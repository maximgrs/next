import Link from "next/link";
import React from "react";

type Props = {};

function Menu({}: Props) {
  return (
    <div className="menuContainer">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/cars">Cars</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/trucks">Trucks</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
