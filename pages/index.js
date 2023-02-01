import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';
import data from '@/utils/data';
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grids-cols-5">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
