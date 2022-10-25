import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Accordion({ children, title }) {
	return (
		<div className="w-full relative">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex w-full justify-between bg-white border border-solid border-gray-300 px-4 py-4 text-left text-xl font-medium text-black-500 ${
								open ? "rounded-t-md border-b-0" : "rounded-md"
							}`}
						>
							<span className="font-medium">{title}</span>
							<ChevronUpIcon
								className={`${
									open ? "rotate-180 transform" : ""
								} h-8 w-8 text-orange-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="absolute z-10 bg-white w-full px-4 py-4 text-gray-600 border border-solid border-gray-200 rounded-b-md">
							{children}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
}
