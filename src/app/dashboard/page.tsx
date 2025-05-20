import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Link href={"/#contact"}>Home</Link>
      </Suspense>
    </div>
  );
}
