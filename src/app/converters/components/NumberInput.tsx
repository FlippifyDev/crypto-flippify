import React, { ChangeEvent } from 'react';

interface NumberInputProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const numericValue = event.target.value.replace(/[^0-9.]/g, '');
		onChange(numericValue);
	};

	return (
		<input
			type="text"
			id={label}
			value={value}
			onChange={handleChange}
			className="px-4 py-3 rounded-full h-14 bg-darkBlue border-2 border-neonGreen text-white text-lg transition duration-200 ease-in-out focus:ring-2 focus:ring-neonGreen focus:border-transparent focus:outline-none focus:border-neonGreen focus:bg-opacity-50"
		/>

	);
};

export default NumberInput;
