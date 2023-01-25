import React from 'react';
import { Link } from 'react-router-dom'

function RenderingArrayOfObjects(){
const data=[
	{
		"Name":"John",
		"Age":"24",
		"Course":"MERN",
		"Batch":"Octobor",
		"Change":"edit"

	},
	{
		"Name":"Reshma",
		"Age":"24",
		"Course":"webDeveloper",
		"Batch":"saptember",
		"Change":"edit"

	},
	{
		"Name":"sandip",
		"Age":"30",
		"Course":"Bcom",
		"Batch":"Octobor",
		"Change":"edit"

	},


]
const tableRows=data.map(
	(element)=>{
		return(
			<tr>
			<td>{element.Name}</td>
			<td>{element.Age}</td>
			<td>{element.Course}</td>
			<td>{element.Batch}</td>
			<td><Link to="/edit">{element.Change}</Link></td>
			</tr>
		)
	}
)
return(
	<div id='tableHead'>
		<table >
			<tr>	
				<th> Name</th>
				<th>Age</th>
				<th>Course</th>
				<th>Batch</th>
				<th>Change</th>
			</tr>
			<tbody>
			{tableRows}
			</tbody>
		</table>	
			
	</div>
)
}
function Table1() {
return (
	<div>
		<RenderingArrayOfObjects />
	</div>
);
}

export default Table1;