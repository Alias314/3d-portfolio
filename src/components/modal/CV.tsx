import { Dialog } from "radix-ui";
import { useState } from "react";

const CV = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div className="fixed inset-0 flex justify-center items-center">
          <Dialog.Content className="w-2xl h-screen p-10 bg-white">
            <Dialog.Title className="mb-5 text-3xl text-center">
              Resume
            </Dialog.Title>
            <Dialog.Description className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              voluptates, ab quam quia autem delectus quidem dolorum?
              Necessitatibus cumque ut, suscipit voluptatibus dignissimos
              aliquid optio hic minus voluptatem, repellat praesentium?
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CV;
