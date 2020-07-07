import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = ({ text, value }) => {
	const percentage = () => (text === 'positive' ? '%' : null);
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
			<td>{percentage()}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const average = () => {
		return (good + -1 * bad) / (good + neutral + bad);
	};

	const positiveAvg = () => {
		return good / (good + neutral + bad) * 100;
	};

	return (
		<table>
			<tbody>
				<Statistic text="good" value={good} />
				<Statistic text="neutral" value={neutral} />
				<Statistic text="bad" value={bad} />

				<Statistic text="all" value={good + neutral + bad} />
				<Statistic text="average" value={average()} />
				<Statistic text="positive" value={positiveAvg()} />
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to own state
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);

	const noFeedback = () => good + neutral + bad === 0;

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={() => setGood(good + 1)} text={'good'} />
			<Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
			<Button handleClick={() => setBad(bad + 1)} text={'bad'} />

			<h1>statistics</h1>

			{noFeedback() ? <div>No feedback given</div> : <Statistics good={good} neutral={neutral} bad={bad} />}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
