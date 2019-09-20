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

export default class Question extends Component {
    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onClick= this.onClick.bind(this);
        this.state = {
            results : [],
            questionvalue: 'jesus-1',
            default_question: 'Who is Jesus?',
            question: null
        };

        axios.defaults.baseURL = 'http://localhost:4000';
    }

    componentDidMount(){
		axios.get(`/question/search/${this.state.questionvalue}`)
        .then(response =>{
            this.setState({results : response.data});
        })
        .catch(function(error){
            console.log(error);
        })
	}

    onClick(e){
		// e.preventDefault();
        // const value=this.state.questionvalue || ["jesus-2"];
		// axios.get(`/question/search/${value}`).then(response => {           
        //     console.log(response.data)
        //     this.setState({results : response.data, value: this.state.questionvalue});
		// }).catch(function(error){
		// 	console.log(error);
		// })
    }

    handleSelectChange(event) {
        if (event !== undefined) {

            axios.get(`/question/search/${event.value}`)
            .then(response =>{
                this.setState({results : response.data, question: response.data[0].question});
            })
            .catch(function(error){
                console.log(error);
            })
        } else {

        }
    }

    tabRow(){
        return this.state.results.map((object, i) => {
            return object.bible.map((innerObject, j) => {
                return <SearchRow obj={innerObject} key={j}/>;
            })
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
                                    onChange={this.handleSelectChange}
                                />
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


                <div className="content-area">
                    <div className="content-container-left">
                        <h2 style={{color: '#616161'}}>{this.state.question || this.state.default_question}</h2>
                        <div>
                            { this.tabRow() }
                        </div>
                    </div>
                    <div className="content-container-right" id="image-area">
                        {/* <div>
                            <img className="" src="https://i.imgur.com/FaFaaIX.jpg" alt="peace" width="367" height="250"/>
                        </div> */}
                        <div className="details-area">
                            <div className="infobox-left">
                                <b>Mentioned in Bible</b>
                            </div>
                            <div className="infobox-right">
                                429 times [KJV version]
                            </div>
                        </div>
                    </div>                           
                </div>
			</div>
		)
	}
}