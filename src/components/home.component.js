import React , { Component } from 'react';
import './../css/home.css';

export default class Home extends Component {

	render(){
		return (
			
            <div className="container marketing">
                <div>
				    <h2 align="center">Search Bible</h2><br />
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <input className="form-control my-0 py-1 lime-border" type="text" placeholder="Search keywords [e.g., Jesus]" aria-label="Search" name="search"/>
                            <div className="input-group-append">
                                <span className="input-group-text lime lighten-2" id="basic-text1"><i className="fa fa-search text-grey"
                                    aria-hidden="true"></i></span>
                            </div>
                    </div>
			    </div>
                <div className="row">
                    <div className="col-lg-4">
                        <a href="/timeline"><img className="rounded-circle" src="https://i.imgur.com/jBMeyiY.png" alt="bible timeline" width="140" height="140" /></a>
                        <h2>Bible History</h2>
                        <p>Timeline of Bible from the start till now; Timeline of Bible from the start till now; Timeline of Bible from the start till now; Timeline of Bible from the start till now</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://i.imgur.com/Fhc7ADO.png" alt="revelation timeline" width="140" height="140" />
                        <h2>Revelation Timeline</h2>
                        <p>Timeline of Bible from the start till now; Timeline of Bible from the start till now; Timeline of Bible from the start till now; Timeline of Bible from the start till now</p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://i.imgur.com/XSdRfRQ.jpg" alt="TBD" width="140" height="140" />
                        <h2>TBD</h2>
                        <p>Timeline of Bible from the start till now; Timeline of Bible from the start till now; Timeline of Bible from the start till now; Timeline of Bible from the start till now</p>
                    </div>
                </div>
            </div>
		)
	}
}