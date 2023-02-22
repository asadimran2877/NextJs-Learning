/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import data from '@/utils/data';
import { Store } from '@/utils/Store';

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const router = useRouter();
  const product1 = data.products.find((product) => product.slug === slug);

  const addtoCarttHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry, Product is Out of stock');
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
    router.push('/cart');
  };
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" onClick={addtoCarttHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
