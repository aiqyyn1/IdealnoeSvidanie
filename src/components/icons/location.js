import * as React from "react";

const Location = (props) => (
	<svg
		width={18}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M8.986 23.841c-.373 0-.718-.197-.907-.518L6.924 21.37c-2.372-4.01-4.612-7.796-5.378-9.333A8.201 8.201 0 0 1 .71 8.408C.71 3.845 4.423.132 8.986.132c4.564 0 8.276 3.713 8.276 8.276 0 1.269-.28 2.486-.831 3.62l-.021.04c-.78 1.557-3.006 5.32-5.362 9.303l-1.155 1.952c-.189.321-.534.518-.907.518Z"
			fill="#FF7A00"
		/>
		<path
			d="M8.986 12.165a4.053 4.053 0 0 1-4.049-4.048 4.054 4.054 0 0 1 4.05-4.05 4.053 4.053 0 0 1 4.048 4.05 4.053 4.053 0 0 1-4.049 4.048Z"
			fill="#fff"
		/>
	</svg>
);

export default Location;
