import React from 'react'
const chemin = 'https://image.tmdb.org/t/p/w500'




function Popup({ selected, closePopup, credits}) {
	






	

	var anneSortie = selected.release_date // 2016-01-26
	var array = []; // tableau date vide
	array = anneSortie.split('-'); //array[0]->2016, array[1]->01, array[2]->26 



	return (

	


		<div className="popup container ">
			<button className="close" onClick={closePopup}>X</button>
			
			
			<div className="row">
			<div className="col-sm-4">
				<div className="img_movie">
				<img src={chemin + selected.poster_path} alt={selected.title} />
				</div>
			</div>
			<div className="col-sm-8">
					<h2>{selected.title} ({array[0]})</h2>
					<i>{selected.tagline}</i>
					<div className="clear"></div>
                    {selected.overview}
					<div className="clear"></div>
				
					
					{credits.map(item => (
				  <li key={item.id}>
                                {item.character} : {item.name}
                                   </li> 
			))}
				
				
				{console.log(credits)}
					
					
			</div>



				
				
				
			</div>
		

			
			
		</div>


	
	)
}

export default Popup
