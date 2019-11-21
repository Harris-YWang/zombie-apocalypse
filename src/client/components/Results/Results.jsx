import React from 'react';
import './Results.css';

const Results = props => {
	const { results } = props;

	const renderResults = Object.keys(results).length ? (
		<div className="results">
			<h3>Results</h3>
			<p>Zombies score: {results.zombie_score}</p>
			<p>Zombie positions: {results.final_positions}</p>
		</div>
	) : null;

	return renderResults;
};

export default Results;
