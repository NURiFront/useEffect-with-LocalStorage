import { useEffect, useState } from 'react';
import './Length.css'

const Length = () => {
	const [input, setInput] = useState('');
	useEffect(() => {
		console.log(input.length);
	}, [input]);

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="length"
				value={input}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Length;
