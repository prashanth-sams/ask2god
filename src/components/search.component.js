import React , { Component } from 'react';

export default class Search extends Component {

	render(){
		return (
			<div>
				<h3 align="center">Search Bible</h3>
                <div className="input-group md-form form-sm form-2 pl-0">
                    <input className="form-control my-0 py-1 lime-border" type="text" placeholder="Search keywords [e.g., Jesus]" aria-label="Search" name="search"/>
                        <div className="input-group-append">
                            <span className="input-group-text lime lighten-2" id="basic-text1"><i className="fa fa-search text-grey"
                                aria-hidden="true"></i></span>
                        </div>
                </div>
			</div>
		)
	}
}