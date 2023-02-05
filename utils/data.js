import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Kane',
      email: 'kane@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  products: [
    {
      id: 1,
      name: 'Free-shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 100,
      brand: 'nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: 'A popular Shirt',
    },
    {
      id: 2,
      name: 'Fit-shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 90,
      brand: 'nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Shirt',
    },
    {
      id: 3,
      name: 'Slim-shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 80,
      brand: 'nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Shirt',
    },

    {
      id: 4,
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 110,
      brand: 'nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Shirt',
    },
    {
      id: 5,
      name: 'Slim Pants',
      slug: 'slim-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 120,
      brand: 'nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'Smart Looking {Pant',
    },
    {
      id: 6,
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 95,
      brand: 'nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Pant',
    },
  ],
};

export default data;
