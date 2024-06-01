import Link from "next/link";
import Modal from "../components/PopupModal/PopupModal";

export default function Home({ searchParams }: any) {
  const modal = searchParams.modal;

  return (
    <main className="h-screen bg-black text-white p-0">
      <Link href="/animation-page">
        <button
          type="button"
          className="bg-white  text-black py-2.5 px-6 font-light rounded-lg m-6"
        >
          To Animation Page
        </button>
      </Link>
      <Link href="?modal=open">
        <button
          type="button"
          className="bg-white  text-black py-2.5 px-6 font-light rounded-lg m-6"
        >
          Open Modal
        </button>
      </Link>
      <Modal modal={modal} />
    </main>
  );
}
