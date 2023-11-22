
import React from 'react'
export default function ArrayMap(){
    const fruits = ["Apple", "Mango", "Banana", "GFG"];

    const styles = {
		
		backgroundColor: "white",
		width: "100px",
		marginBottom: "10px",
		padding: "10px",
		color: "green",
		margin:" auto",
		textAlign:"center",
		boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
	};


    return(
       <div style={{marginTop:"200px"}}>
		{
				/* This maps each array item to a div adds
				the style declared above and return it */
				fruits.map((fruit) => (
					<div key={fruit} style={styles}>
						{fruit}
					</div>
				))
			}

	   </div>

    )
}