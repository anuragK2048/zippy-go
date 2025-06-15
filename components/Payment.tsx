import { fetchAPI } from "@/lib/fetch";
import { PaymentProps } from "@/types/type";
import { useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import { Alert, View } from "react-native";
import CustomButton from "./CustomButton";

const Payment = ({
  fullName,
  email,
  amount,
  driverId,
  rideTime,
}: PaymentProps) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const result = await fetchAPI(`/(api)/(stripe)/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName || email.split("@")[0],
        email: email,
        amount: amount,
        // paymentMethodId: paymentMethod.id,
      }),
    });
    const { paymentIntent, ephemeralKey, customer } = result;

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Zippy Go Pvt Ltd",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Anurag K",
      },
    });
    if (!error) {
      setLoading(false);
    }
  };

  const openPaymentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      // Payment successful
      setSuccess(true);
    }
  };

  return (
    <View>
      <CustomButton
        disabled={loading}
        title="Confirm Ride"
        className="my-10"
        onPress={openPaymentSheet}
      />
    </View>
  );
};

export default Payment;
