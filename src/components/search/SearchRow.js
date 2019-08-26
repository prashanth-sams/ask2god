// SearchRow.js

import React, { Component } from 'react';
import axios from 'axios';

class SearchRow extends Component {

  constructor(props){
    super(props);
    
    axios.defaults.baseURL = 'http://localhost:4000/manager';
  }

  render() {
    return (
        <tr>
          <td className="search-row">
            <label style={{fontSize: '18px', left: 0}}>
              <b>{this.props.obj.book_name}</b> {this.props.obj.chapter_number}:{this.props.obj.verse_number}
            </label>
            <p>{this.props.obj.verse_context}</p>
          </td>
        </tr>
    );
  }
}

export default SearchRow;