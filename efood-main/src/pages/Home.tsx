
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: '1', name: 'Fast Food', icon: '🍔', count: 15 },
  { id: '2', name: 'Pizza', icon: '🍕', count: 8 },
  { id: '3', name: 'Asian', icon: '🍜', count: 12 },
  { id: '4', name: 'Desserts', icon: '🍰', count: 6 },
  { id: '5', name: 'Coffee', icon: '☕', count: 9 },
  { id: '6', name: 'Healthy', icon: '🥗', count: 7 },
];

const featuredRestaurants = [
  {
    id: '1',
    name: 'Burger Palace',
    category: 'Fast Food',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '2',
    name: 'Pizza Corner',
    category: 'Italian',
    rating: 4.7,
    deliveryTime: '30-40 min',
    deliveryFee: 1.99,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    featured: true,
  },
  {
    id: '3',
    name: 'Sushi Zen',
    category: 'Japanese',
    rating: 4.9,
    deliveryTime: '35-45 min',
    deliveryFee: 3.99,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    featured: false,
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    category: 'Mexican',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    image: 'https://images.unsplash.com/photo-1565299585323-38174c5bb76c?w=400&h=300&fit=crop',
    featured: false,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Delicious Food
            <br />
            <span className="text-orange-200">Delivered Fast</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto fade-in">
            Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.
          </p>
          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-scale">
            Order Now
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="hover-scale cursor-pointer hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} restaurants</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Restaurants</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                <Card className="hover-scale hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-48 object-cover"
                    />
                    {restaurant.featured && (
                      <Badge className="absolute top-3 left-3 bg-orange-500">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{restaurant.category}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{restaurant.deliveryTime}</span>
                      <span className="font-medium">${restaurant.deliveryFee} delivery</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <p className="text-gray-600">Partner Restaurants</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">25 min</div>
              <p className="text-gray-600">Average Delivery Time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
