import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import OptionsCarousel from "../../options-carousel";

export const OptionDetailModal = ({ isOpen = false, option, closeModal }) => {
	return (
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

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-4 px-6 text-left align-middle shadow-xl transition-all">
								<div className="flex justify-between items-center">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Детали места
									</Dialog.Title>
									<XCircleIcon
										className="h-8 w-8 cursor-pointer text-gray-400"
										onClick={closeModal}
									/>
								</div>
								<div className="mt-4 p-4 bg-gray-200 rounded-2xl">
									<div className="font-bold">О {option?.name}</div>
									<div className="flex mt-2">
										<div className="text-gray-500">Местоположение:</div>
										<div className="ml-4">Abay 130</div>
									</div>
									<div className="flex mt-2">
										<div className="text-gray-500">Номер телефона:</div>
										<div className="ml-4">+77054169958</div>
									</div>
									<div className="flex mt-2">
										<div className="text-gray-500">Примерная цена:</div>
										<div className="ml-4">15 000 ₸</div>
									</div>
								</div>
								{option?.additionalOptions?.length > 0 && (
									<>
										<div className="text-center font-semibold text-lg mt-8">
											У тебя хватает деньги чтобы сходить еще в одно место 😉
										</div>
										<div className="my-8">
											<OptionsCarousel options={option.additionalOptions} />
										</div>
									</>
								)}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
