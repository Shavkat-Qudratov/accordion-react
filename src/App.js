import React, { useState } from 'react';
import data from './data';
import './App.css'
import SingleQuestion from './components/Question';
import Question from './components/Question';

function App() {
	const [ questions, setQuestions ] = useState(data);
	const [questionInfo, setQuestionInfo] = useState('');

	function close(id) {
		if( id === questionInfo) {
			setQuestionInfo("")
		}else{
			setQuestionInfo(id)
		}
	}

	return (
		<main>
			<div className="container">
				<h3>questions and answers about login</h3>
				<section className="info">
				 {questions.map((item) => {
					return(
						<Question 
						key={item.id}
						info={questionInfo == item.id ? item.info : ''}
						title={item.title}
						id={item.id}
						close={close}
						/>
					)
				 })}
				</section>
			</div>
		</main>
	);
}

export default App;