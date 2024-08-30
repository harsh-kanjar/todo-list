import React, { useState } from 'react';
import axios from 'axios';

const PaymentGateway = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Replace this URL with your SabPaisa endpoint for initiating payments
      const response = await axios.post('https://your-backend-url.com/api/payments', {
        amount: 500, // amount in rupees
        currency: 'INR',
        description: 'Monthly Subscription',
      });

      // Assuming response contains a URL for redirection to SabPaisa's payment page
      const paymentUrl = response.data.paymentUrl;

      // Redirect the user to the payment page
      window.location.href = paymentUrl;

      setSuccess('Payment initiated successfully. Please complete the payment in the new tab.');
    } catch (error) {
      setError('An error occurred while initiating the payment. Please try again.');
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-gateway">
      <h2>Subscribe Now</h2>
      <p>Monthly Subscription: ₹500</p>
      <button
        className="btn btn-primary"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay ₹500'}
      </button>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
    </div>
  );
};

export default PaymentGateway;
