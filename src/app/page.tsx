import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Link href="fake-link" className="underline">
        Click Me to go to a not-found page
      </Link>
    </div>
  );
}
