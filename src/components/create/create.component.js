import React , { Component } from 'react';
import Select, { components } from 'react-select';
import axios from 'axios';
import { colourOptions } from '../../docs/data';

const MultiValueLabel = (props) => {
	return (<components.MultiValueLabel {...props}/>);
};

export default class Create extends Component {

	constructor(props){
		super(props);
		this.onChangeTagName = this.onChangeTagName.bind(this);
		this.onChangeBookName = this.onChangeBookName.bind(this);
		this.onChangeChapterNumber = this.onChangeChapterNumber.bind(this);
		this.onChangeVerseNumber = this.onChangeVerseNumber.bind(this);
		this.onChangeVerseContext = this.onChangeVerseContext.bind(this);
		this.onSubmit= this.onSubmit.bind(this);

		this.state = {
			tag_name : '',
			book_name : '',
			chapter_number: '',
			verse_number: '',
			verse_context: ''
		};
		axios.defaults.baseURL = 'http://localhost:4000/manager';
	}

	onChangeTagName(newValue, actionMeta) {
		console.group('Value Changed');
		console.log(newValue);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();

		var values = [];
		for (var i = 0, l = newValue.length; i < l; i++) {
			values.push(newValue[i].value);
		}
		
		this.setState({
			tag_name: values
		});
	};

	onChangeBookName(e){
		this.setState({
			book_name : e.target.value
		});
	}

	onChangeChapterNumber(e){
		this.setState({
			chapter_number : e.target.value
		});
	}

	onChangeVerseNumber(e){
		this.setState({
			verse_number : e.target.value
		});
	}

	onChangeVerseContext(e){
		this.setState({
			verse_context : e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		console.log(`The values are ${this.state.tag_name}, ${this.state.book_name}, ${this.state.chapter_number}, ${this.state.verse_number}, and ${this.state.verse_context}`)
		alert(`Added verse with ${this.state.tag_name}, ${this.state.book_name}, ${this.state.chapter_number}, ${this.state.verse_number}, and ${this.state.verse_context}`)
		
		const obj = {
			tag_name : this.state.tag_name,
			book_name : this.state.book_name,
			chapter_number : this.state.chapter_number,
			verse_number : this.state.verse_number,
			verse_context : this.state.verse_context
		};

		axios.post('/add', obj)
			.then( res=> {
				console.log(res.data)
			});

		this.setState({
			tag_name : '',
			book_name : '',
			chapter_number : '',
			verse_number : '',
			verse_context : ''
		});
	}

	render(){
		return (
			<div style={{marginTop: 10}}>
				<h3 align="center">Add Verse</h3>
          			<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group" style={{ fontSize: '0.9rem' }}>
							<Select
								name="tags"
								isMulti
								onChange={this.onChangeTagName}
								options={colourOptions}
								placeholder="Tags [eg., love]"
								autoFocus
								components={{ MultiValueLabel }}
								styles={{ multiValueLabel: (base) => ({ ...base, backgroundColor: colourOptions[2].color, color: 'white' }) }}
								required
							/>
            			</div>
						<div className="form-group">
							<input type="text" className="form-control"
								name="book"
								placeholder="Book [eg., matthew]"
								value={this.state.book_name}
								onChange={this.onChangeBookName}
								required
							/>
            			</div>
						<div className="form-group">
							<input type="text" className="form-control"
								name="chapter"
								placeholder="Chapter"
								value={this.state.chapter_number}
								onChange={this.onChangeChapterNumber}
								required
							/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control"
								name="verse number"
								placeholder="Verse number"
								value={this.state.verse_number}
								onChange={this.onChangeVerseNumber}
								required
              				/>
            			</div>
						<div className="form-group">
							<input type="text" className="form-control"
								name="verse"
								placeholder="Verse context"
								value={this.state.verse_context}
								onChange={this.onChangeVerseContext}
								required
              				/>
            			</div>
						<div className="form-group">
							<input type="submit" value="Add Verse" className="btn btn-primary"/>
            			</div>
         			 </form>
        		</div>
		)
	}
}