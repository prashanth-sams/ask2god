import React , { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

	constructor(props){
		super(props);
		this.state = {business : []};
	}

	componentDidMount(){
		axios.get('http://localhost:4000/business')
			.then(response =>{
				this.setState({business : response.data});
			})
			.catch(function(error){
				console.log(error);
			})
	}

	tabRow(){
		return this.state.business.map((object, i) => {
			console.log(object,i);
			return <TableRow obj={object} key={i} indice={i} delete ={ (ind) => this.deleteItem(ind)} />;
		});
	}

	deleteItem(index){
		this.setState({business : this.state.business.filter((_,i) => i !== index)});
	}

	render(){
		return (
			<div>
				<h3>verse List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
		            <thead>
		              <tr>
		                <th>Tags</th>
		                <th>Book</th>
		                <th>Chapter</th>
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