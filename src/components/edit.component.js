import React , { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
	constructor(props) {
	    super(props);
	    this.onChangeTagName = this.onChangeTagName.bind(this);
	    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
	    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {
	      tag_name: '',
	      book_name: '',
	      chapter_number:''
	    }
  	}

  	componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                tag_name: response.data.tag_name, 
                book_name: response.data.book_name,
                chapter_number: response.data.chapter_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }


    onChangeTagName(e) {
	    this.setState({
	      tag_name: e.target.value
	    });
  	}
	
	onChangeBusinessName(e) {
	    this.setState({
	      book_name: e.target.value
	    })  
	}
	 
	onChangeGstNumber(e) {
	    this.setState({
	      chapter_number: e.target.value
	    })
	}


	onSubmit(e) {
    	e.preventDefault();
	    const obj = {
	      tag_name: this.state.tag_name,
	      book_name: this.state.book_name,
	      chapter_number: this.state.chapter_number
	    };
	    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
	        .then(res => console.log(res.data));
    
    	this.props.history.push('/index');
  	}

  	render() {
    
	    return (
	        <div style={{ marginTop: 10 }}>
	            <h3 align="center">Update Verse</h3>
	            <form onSubmit={this.onSubmit}>
	                <div className="form-group">
	                    <label>Tags:  </label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.tag_name}
	                      onChange={this.onChangeTagName}
	                      />
	                </div>
	                <div className="form-group">
	                    <label>Book: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.book_name}
	                      onChange={this.onChangeBusinessName}
	                      />
	                </div>
	                <div className="form-group">
	                    <label>Chapter: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.chapter_number}
	                      onChange={this.onChangeGstNumber}
	                      />
	                </div>
	                <div className="form-group">
	                    <input type="submit" 
	                      value="Update Verse" 
	                      className="btn btn-primary"/>
	                </div>
	            </form>
	        </div>
	    )
  	}
}