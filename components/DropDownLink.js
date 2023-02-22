import Link from 'next/link';
import React from 'react';

export default function DropDownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <div>
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
    </div>
  );
}
