import React from 'react';
import ReactDOM from 'react-dom';

const Part = ({ part, exercise }) => {
	return (
		<p>
			{part} {exercise}
		</p>
	);
};

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = ({ parts }) => {
	return (
		<div>
			{parts &&
				parts.map((part, index) => {
					return <Part key={index} part={part.name} exercise={part.exercises} />;
				})}
		</div>
	);
};

const Total = ({ parts }) => {
	let totalExercises = 0;
	if (parts) {
		parts.forEach((part) => {
			totalExercises += part.exercises;
		});
	}
	return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
	// const-definitions
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
