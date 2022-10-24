import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion({ children, title }) {
	return (
		<div className="w-full px-4 pt-4">
			<div className="mx-auto w-full max-w-md rounded-2xl p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={`flex w-full justify-between bg-white border border-solid border-gray-200 px-4 py-4 text-left text-xl font-medium text-black-500 ${
									open ? "rounded-t-2xl border-b-0" : "rounded-2xl"
								}`}
							>
								<span className="font-medium">{title}</span>
								<ChevronUpIcon
									className={`${
										open ? "rotate-180 transform" : ""
									} h-8 w-8 text-orange-500`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 py-4 text-gray-400 border border-solid border-gray-200 rounded-b-2xl">
								{children}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
