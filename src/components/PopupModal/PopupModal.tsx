import Link from "next/link";

function Modal({ modal }: any) {
  return (
    <>
      {modal === "open" && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-10 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto px-6 py-4 rounded-md w-80 h-64">
            <div className="flex flex-col items-center ">
              <h1 className="font-semibold text-xl">Modal content</h1>
              <p className="text-base my-6">
                This modal is implemented utilizing searchParams instead of
                useState or useHooks to meet the criteria.
              </p>
              <Link href={"/"}>
                <button
                  type="button"
                  className="bg-black text-white text-sm px-2 py-2 rounded font-extralight"
                >
                  Close Modal
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
