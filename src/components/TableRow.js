// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

var ellipsis = {
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
};

class TableRow extends Component {

  constructor(props){
    console.log('props',props);

    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){
    axios.get('http://localhost:4000/manager/delete/'+this.props.obj._id)
            .then(res => {
              console.log('deleted');
              this.props.delete(this.props.indice);
            })
            .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.tag_name}
          </td>
          <td>
            {this.props.obj.book_name}
          </td>
          <td>
            {this.props.obj.chapter_number}: {this.props.obj.verse_number}
          </td>
          <td style={ ellipsis }>
            {this.props.obj.verse_context}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;