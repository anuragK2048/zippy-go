import Stripe from "stripe";
const secretKey = process.env.STRIPE_SECRET_KEY!;
const publishableKey = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
const stripe = new Stripe(secretKey);

export async function POST(request: Request) {
  // Use an existing Customer ID if this is a returning customer.
  try {
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2025-05-28.basil" }
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "eur",
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter
      // is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
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
