import Stripe from "stripe";
const secretKey = process.env.STRIPE_SECRET_KEY!;
const publishableKey = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
const stripe = new Stripe(secretKey);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, amount } = body;

  if (!name || !email || !amount) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    // Use an existing Customer ID if this is a returning customer.
    let customer;
    const doesCustomerExist = await stripe.customers.list({
      email,
    });

    if (doesCustomerExist.data.length > 0) {
      customer = doesCustomerExist.data[0];
    } else {
      const newCustomer = await stripe.customers.create({
        name,
        email,
      });

      customer = newCustomer;
    }

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2025-05-28.basil" }
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount) * 100,
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });
    return new Response(
      JSON.stringify({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(
      "Error occured in server while returning payment sheet details",
      err
    );
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
