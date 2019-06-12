import React , { Component } from 'react';
import './../css/home.css';

export default class Home extends Component {

	render(){
		return (
            <div className="container marketing">
                <div>
				    <h2 align="center">Search Bible</h2><br />
                    <div className="searchbox-layer1">
                        <div className="searchbox-layer2">
                            <div className="icon-search" id="search-icon">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="searchbox-layer3">
                                <div className="searchbox-layer4">
                                    <input type="text" className="searchbox-layer5" spellcheck="false" placeholder="Search keywords [e.g., Jesus]" id="search"/>
                                </div>
                            </div>
                        </div>                            
                        <button type="button" className="search-button">
                            <span>Search</span>
                        </button>
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