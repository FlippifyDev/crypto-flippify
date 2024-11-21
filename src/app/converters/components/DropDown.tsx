import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
	options: { label: string, param: string, sub_label: string }[]; // Change: Use param and label
	value: string;
	onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	// Close the dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		// Cleanup the event listener when the component is unmounted
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (selectedValue: string) => {
		onChange(selectedValue); // Pass the param value (e.g., 'bitcoin') to the parent component
		setIsOpen(false); // Close the dropdown after selecting an option
	};

	return (
		<div ref={dropdownRef} className="relative inline-block text-left h-full">
			<div className='h-full z-10'>
				<button
					type="button"
					className="inline-flex justify-between items-center w-30 h-14 rounded-full active:scale-95 bg-darkBlue border-2 border-neonGreen text-white px-4 py-2 text-lg font-medium transition duration-200 ease-in-out focus:ring-2 focus:ring-neonGreen focus:outline-none focus:border-neonGreen focus:bg-opacity-50 focus:border-transparent"
					onClick={toggleDropdown}
				>
					{/* Display the full name corresponding to the selected value */}
					{options.find(option => option.param.toLowerCase() === value)?.label}
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						aria-label="Dropdown Toggle"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-darkBlue ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
						{/* Show both label and param */}
						{options.map((option) => (
							<a
								key={option.param.toLowerCase()}
								className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
								role="menuitem"
								onClick={() => handleOptionClick(option.param.toLowerCase())}
							>
								<div className='flex flex-col'>
									<span className='font-semibold text-[15px]'>{option.label}</span>
									<span className='text-gray-300'>{option.sub_label}</span>
								</div>
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
