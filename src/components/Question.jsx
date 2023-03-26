import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
	const [ showInfo, setShowInfo ] = React.useState(false);
	const {title, info, id} = props;
	const {item} = props;
	const {close} = props;
	const onCilickItem=(id)=>{
		setShowInfo((prevValue)=> !prevValue)
	}


	
	return (
		<article className={'question'}>
			<header>
				<h4>{title}</h4>
				<button
					className="btn"
					onClick={() => {
						close(id)
					}}
				>
					{info.length ? '-' : '+'}
				</button>
			</header>
			 <p>{info}</p>
		</article>
	);
};

export default Question;