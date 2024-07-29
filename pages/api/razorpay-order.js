// pages/api/razorpay-order.js

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: 'rzp_test_npfutZLyZxi54o',
  key_secret: 'pKVdKeyTmDxlSl1OEqfAVi4u',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body;

    const options = {
      amount: amount * 100, // amount in the smallest currency unit (paise)
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    try {
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
