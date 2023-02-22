import React, { Children, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Store } from '@/utils/Store';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import CartScreen from '@/pages/cart';
import { ToastContainer } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '@headlessui/react';
import DropDownLink from './DropDownLink';
import Cookies from 'js-cookie';
export default function Layout({ children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemscount, setcartitemscount] = useState(0);
  const { status, data: session } = useSession();
  useEffect(() => {
    setcartitemscount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 item-center justify-between shadow-md px-4 py-2">
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">UnBoxed</a>
            </Link>
            <div>
              <Link href="/cart" legacyBehavior>
                <a className="px-2">
                  Cart
                  {cartItemscount > 0 && (
                    <span className="ml-1 p-1 rounded-full bg-red-600 text-sm font-bold text-white ">
                      {cartItemscount}
                    </span>
                  )}
                </a>
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg bg-white">
                    <Menu.Item>
                      <DropDownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" legacyBehavior>
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright @ 2023 Unboxed</p>
        </footer>
      </div>
    </>
  );
}
