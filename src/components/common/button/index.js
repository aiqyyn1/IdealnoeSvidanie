import React from "react";

export default function Button({ title = "" }) {
	return (
		<div className="rounded-md shadow">
			<div className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-1 text-base font-medium text-white cursor-pointer hover:bg-indigo-700 md:px-10 md:text-lg">
				{title}
			</div>
		</div>
	);
}
