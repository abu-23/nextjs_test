import dynamic from "next/dynamic";
import Link from "next/link";

const GeometryScene = dynamic(() => import("@/components/GeometryModelScene/Index"), {
  ssr: false,
});

import React from "react";

export default function page() {
  return (
    <main>
      <Link href="/" className="absolute block z-10 m-5 ">
        <button className="bg-white  text-black p-2 font-light rounded-lg">
          Back to Home page
        </button>
      </Link>
      <GeometryScene />
    </main>
  );
}
