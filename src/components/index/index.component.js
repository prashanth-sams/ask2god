import React , { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

	constructor(props){
		super(props);
		this.state = {manager : []};
	}

	componentDidMount(){
		axios.get('http://localhost:4000/manager')
			.then(response =>{
				this.setState({manager : response.data});
			})
			.catch(function(error){
				console.log(error);
			})
	}

	tabRow(){
		return this.state.manager.map((object, i) => {
			console.log(object,i);
			return <TableRow obj={object} key={i} indice={i} delete ={ (ind) => this.deleteItem(ind)} />;
		});
	}

	deleteItem(index){
		this.setState({manager : this.state.manager.filter((_,i) => i !== index)});
	}

	render(){
		return (
			<div>				
				<h3 align="center">Verse List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
		            <thead>
		              <tr>
		                <th>Tags</th>
		                <th>Book</th>
		                <th>Chapter</th>
										<th>Verse</th>
		                <th colSpan="2">Action</th>
		              </tr>
		            </thead>
		            <tbody>
		              { this.tabRow() }
		            </tbody>
          		</table>
			</div>
		)
	}
}