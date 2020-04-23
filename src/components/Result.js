import React from 'react'
const chemin = 'https://image.tmdb.org/t/p/w500'

function Result({ result, openPopup}) {
	return (
		
		<div className="col-sm-4" onClick={((e) => openPopup(e, result.id) )}>
		
			{/* {console.log(result)} */}

			<div className="img_movie">
                                       <img src={chemin + result.poster_path} alt={result.title} />
                                       </div>
                                      {result.title}
                                      {result.vote_average}

		</div>
		
	)
}

export default Result
