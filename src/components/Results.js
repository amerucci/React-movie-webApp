import React from 'react'

import Result from './Result'

function Results ({results, openPopup }) {
	
	return (
		<section className="row">
			{/* {console.log(results)} */}
			{results.map(result => (
				<Result key={result.id} result={result} openPopup={openPopup} />
			))} 
		</section>
	)
}

export default Results
