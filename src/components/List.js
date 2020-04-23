import React from 'react'
import axios from 'axios';



function List(props) {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => res.map(user => user.username))
    .then(userNames => console.log(userNames));
    
	return (

        
		<div>
            je m'appelle {props.userNames}
        </div>
	)
}

export default List