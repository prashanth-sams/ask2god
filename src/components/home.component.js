import React , { Component } from 'react';
import Select from 'react-select';
import './../css/home.css';
import { colourOptions } from './../docs/data';


const style = {
    // width: '3px',
    control: (props, state) => ({
      ...props,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0
      }
    }),

    input: (props) => ({
        ...props,
        maxLength: 5
    }),

    multiValueLabel: (props) => ({ 
        ...props, 
        backgroundColor: colourOptions[2].color,
        color: 'white',
    })
};

export default class Home extends Component {
    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);

        this.state = {
            show: false
        }
    }

    // this section needs update
    handleSelectChange( value ) {
        if ( value.length >= 2 ) {
            this.setState( {
                show: true
            });

            if(this.state.show) { 
                // return (div[class$=-control]{background-color: white; });
            } else { 
                // return (<a onClick={this.onClick}> press me </a>);
            }
        }
    }

	render(){
		return (
            <div className="container marketing">
                <div>
				    <h2 align="center">Bible Search</h2><br />
                    <div className="searchbox-layer1">
                        <div className="searchbox-layer2">
                            <div className="icon-search" id="search-icon">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="searchbox-layer3">
                                <div className="searchbox-layer4">
                                    <Select
                                        isMulti={true}
                                        onChange={this.handleSelectChange}
                                        options={colourOptions}
                                        placeholder="Search keywords [e.g., Jesus]"
                                        autoFocus
                                        required
                                        styles={style}
                                    />
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