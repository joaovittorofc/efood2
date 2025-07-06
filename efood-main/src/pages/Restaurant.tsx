
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

const restaurantData = {
  '1': {
    id: '1',
    name: 'Burger Palace',
    category: 'Fast Food',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop',
    description: 'The best burgers in town, made with fresh ingredients and served with love.',
    menu: [
      {
        id: '1',
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop',
        category: 'Burgers'
      },
      {
        id: '2',
        name: 'BBQ Bacon Burger',
        description: 'Smoky BBQ sauce, crispy bacon, and caramelized onions',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop',
        category: 'Burgers'
      },
      {
        id: '3',
        name: 'Crispy Chicken Burger',
        description: 'Golden fried chicken breast with fresh lettuce and mayo',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1606755962773-d324e2d53352?w=300&h=200&fit=crop',
        category: 'Burgers'
      },
      {
        id: '4',
        name: 'French Fries',
        description: 'Crispy golden fries seasoned to perfection',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop',
        category: 'Sides'
      },
      {
        id: '5',
        name: 'Chocolate Milkshake',
        description: 'Rich and creamy chocolate milkshake topped with whipped cream',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop',
        category: 'Drinks'
      },
    ]
  }
};

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  const restaurant = restaurantData[id as keyof typeof restaurantData];

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Restaurant not found</h1>
      </div>
    );
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const categories = [...new Set(restaurant.menu.map(item => item.category))];

  return (
    <div className="min-h-screen">
      {/* Restaurant Header */}
      <div className="relative h-64 md:h-80">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
              <div className="flex items-center space-x-4 mb-3">
                <Badge className="bg-orange-500">{restaurant.category}</Badge>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">⭐</span>
                  <span>{restaurant.rating}</span>
                </div>
                <span>{restaurant.deliveryTime}</span>
                <span>${restaurant.deliveryFee} delivery</span>
              </div>
              <p className="text-lg opacity-90 max-w-2xl">{restaurant.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurant.menu
                .filter(item => item.category === category)
                .map(product => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-orange-500">${product.price}</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                size="sm"
                                onClick={() => setSelectedProduct(product)}
                              >
                                Add to Cart
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>{selectedProduct?.name}</DialogTitle>
                              </DialogHeader>
                              {selectedProduct && (
                                <div className="space-y-4">
                                  <img 
                                    src={selectedProduct.image} 
                                    alt={selectedProduct.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                  />
                                  <p className="text-gray-600">{selectedProduct.description}</p>
                                  <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-orange-500">
                                      ${selectedProduct.price}
                                    </span>
                                    <Button onClick={() => handleAddToCart(selectedProduct)}>
                                      Add to Cart - ${selectedProduct.price}
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
