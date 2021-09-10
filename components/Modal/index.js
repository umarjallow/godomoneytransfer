import {XIcon} from '@heroicons/react/solid'
import { Dialog, Transition } from '@headlessui/react'
import {Fragment} from 'react'



export default function Modal({isOpen, title, description, closeModal, children}) {

  return (
      <Transition appear show={isOpen} as={Fragment}>
          <Dialog
              as="div"
              className="fixed inset-0 z-10 flex items-center justify-center backdrop-filter backdrop-blur overflow-y-auto"
              onClose={closeModal}
          >
              <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>
                  <span className="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                  >
                      <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 flex justify-between">
                              <div>{title}</div>
                              <div>
                                  <XIcon className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-900" onClick={closeModal} />
                              </div>
                          </Dialog.Title>
                          <Dialog.Description as="p" className="text-sm font-medium leading-6 text-gray-400">
                              {description}
                          </Dialog.Description>

                            {children}

                      </div>
                  </Transition.Child>
              </div>
          </Dialog>
      </Transition>
  )
}