import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Icox from "./IcoX";

interface Props {
  address: string;
}

export default function MyModal({ address }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className="inline-flex flex-col items-center justify-center gap-2 rounded-2xl bg-white py-8 pl-[26px] pr-[26px] text-center
                         max-w-md transform overflow-hidden transition-all font-['Roboto_Mono'] leading-7 text-black"
            >
              {/* TOP */}
              <div className="flex w-[420px] gap-4">
                <div className="h-6 w-6 opacity-[undefined] " />
                <Dialog.Title as="div" className="h-6 w-[420px]">
                  domain.eth
                </Dialog.Title>
                {/*  BUTTON */}
                <button className="h-6 w-6" onClick={closeModal}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {/* ADDRESS */}
              <Dialog.Title as="div" className="w-full text-sm font-normal">
                address
              </Dialog.Title>
              {/* QR */}
              <div
                className={`-[420px] w-[420px] [background:url(https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${address}&choe=UTF-8)_center_/_cover]`}
              />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
