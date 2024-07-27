// pages/api/razorpay-capture.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { payment_id, amount, currency } = req.body;

    try {
      const response = await axios.post(
        "https://api.razorpay.com/v1/payments/capture",
        {
          amount,
          currency,
          payment_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64")}`,
        },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error capturing payment:", error.message);
      res.status(500).json({ error: "Payment capture failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
