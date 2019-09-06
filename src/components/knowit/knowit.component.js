import React , { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './_style.css';
import SearchRow from './SearchRow';
import { questionOptions, groupedOptions } from './data';

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

export default class Knowit extends Component {
    constructor(props){
        super(props);
        this.onClick= this.onClick.bind(this);
        this.state = {
            manager : [],
            tag: 'peace',
            tag_label: null
        };

        axios.defaults.baseURL = 'http://localhost:4000/knowit';
    }

    componentDidMount(){
		axios.get(`/knowit/${this.state.tag}`)
			.then(response =>{
				this.setState({manager : response.data});
			})
			.catch(function(error){
				console.log(error);
            })
	}

    onClick(e){
		// e.preventDefault();
        const tags=this.state.searchtags || ["peace"];
		axios.get(`/knowit/${tags}`).then(response => {           
            console.log(response.data)
            this.setState({manager : response.data, tag_label: this.state.knowittags});
		}).catch(function(error){
			console.log(error);
		})
    }

    tabRow(){
        return this.state.manager.map((object, i) => {
            return <SearchRow obj={object} key={i}/>;
        });
    }

	render(){
		return (
			<div className="search-top">
                <div className="searchbox-layer0">
                    <div className="searchbox-layer2">
                        <div className="icon-search" id="search-icon">
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="searchbox-layer3">
                            <div className="searchbox-layer4">
                                <Select
                                    defaultValue={questionOptions[0]}
                                    placeholder="Who is Jesus?"
                                    options={groupedOptions}
                                    formatGroupLabel={formatGroupLabel}
                                    autoFocus
                                    required
                                    // onChange={this.handleSelectChange}
                                />

                                {/* <Select
                                    defaultValue={[{ label: "Peace", value: "peace" }]}
                                    autoFocus
                                    required
                                    styles={style}
                                /> */}
                            </div>
                        </div>
                    </div>
                    <button type="button" className="search-button" onClick={this.onClick.bind(this)}>
                        <span>Search</span>
                    </button>
                </div>
                {/* <div>
                    <p>
                        {this.item.map}
                        asdas
                    </p>
                </div> */}


                {/* <div className="content-area">
                    <div className="content-container-left">
                        <h2 style={{color: '#616161'}}>/{this.state.tag_label || this.state.tag}</h2>
                        <div>
                            { this.tabRow() }
                        </div>
                    </div>
                    <div className="content-container-right" id="image-area">
                        <div>
                            <img className="" src="https://i.imgur.com/FaFaaIX.jpg" alt="peace" width="367" height="250"/>
                        </div>
                        <div className="details-area">
                            <div className="infobox-left">
                                <b>Mentioned in Bible</b>
                            </div>
                            <div className="infobox-right">
                                429 times [KJV version]
                            </div>
                        </div>
                    </div>                           
                </div> */}
			</div>
		)
	}
}