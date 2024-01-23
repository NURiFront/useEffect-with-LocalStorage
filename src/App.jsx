import { useEffect, useState } from 'react';
import Local from './components/local/Local';
import Length from './components/length/Length';

const App = () => {
	const [todos, setTodos] = useState('users');
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${todos}`)
			.then((response) => response.json())
			.then((json) => setData(json));
	}, [todos]);

	return (
		<div className="App">
			<Local />
			<Length />
			<div className="allBtn">
				<button
					onClick={() => {
						setData([]);
						setTodos('');
					}}
				>
					delete all users
				</button>
				<button
					onClick={() => {
						setTodos('users');
					}}
				>
					get all users
				</button>
			</div>

			<div className="allDiv">
				{data.map((el) => {
					return (
						<div className="all" key={el.id}>
							<h1>{el.id}</h1>
							<h2>{el.name}</h2>
							<h3>{el.email}</h3>
							<h5>{el.street}</h5>
							<h4>{el.phone}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default App;
