import React, { Children } from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 item-center justify-between shadow-md px-4 py-2">
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">UnBoxed</a>
            </Link>
            <div>
              <Link href="/cart" legacyBehavior>
                <a className="px-2">Cart</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="px-2">Login</a>
              </Link>
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
