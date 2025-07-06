
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Success = () => {
  const orderNumber = Math.floor(Math.random() * 1000000);
  const estimatedDelivery = new Date(Date.now() + 35 * 60 * 1000); // 35 minutes from now

  useEffect(() => {
    // You could track the order success event here
    console.log('Order placed successfully!');
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your order. We're preparing your delicious meal!</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order Number</span>
                <span className="font-semibold">#{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-semibold">
                  {estimatedDelivery.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center text-orange-500">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Your order is being prepared</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/">Order Again</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/cart">View Order History</Link>
          </Button>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            You'll receive SMS updates about your order status. 
            For any questions, contact us at (555) 123-4567.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
