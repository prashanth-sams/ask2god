import React , { Component } from 'react';
import Select from 'react-select';
import { colourOptions } from '../../docs/data';
import axios from 'axios';
import './_style.css';
import SearchRow from './SearchRow';
import Loading from '../loading/loading.component';
import Searchnotes from "../searchnotes/searchnotes.component";

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

export default class Search extends Component {

    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onClick= this.onClick.bind(this);
        this.state = {
            results : [],
            tag: 'peace',
            tag_label: null,
            isLoading: false,
            isDesktop: false
        };

        axios.defaults.baseURL = 'http://localhost:4000/keywords';
    }

    UNSAFE_componentDidMount(){
        this.setState({
            isLoading: true
        })
        
        if (window.innerWidth > 768) {
            this.setState({ isDesktop: true });
        } else {
            this.setState({ isDesktop: false });
        }

        axios.get(`/search/${this.state.tag}`).then(response =>{
            this.setState({
                results : response.data,
                isLoading: false
            });
        })
        .catch(function(error){
            console.log(error);
        })
	}

    onClick(e){
		// e.preventDefault();
        const tags=this.state.searchtags || ["peace"];
		axios.get(`/search/${tags}`).then(response => {           
            console.log(response.data)
            this.setState({results : response.data, tag_label: this.state.searchtags});
		}).catch(function(error){
			console.log(error);
		})
    }

    handleSelectChange( event ) {

        if (event[0] !== undefined) {
            this.setState({
                searchtags : event[0].value
            })
        } else {

        }
    }

    tabRow(){
        return this.state.results.map((object, i) => {
            return <SearchRow obj={object} key={i}/>;
        });
    }

	render(){
        const { isLoading, isDesktop } = this.state;

		return (
            <React.Fragment>
                {isLoading ? <Loading /> : ""}
                <div className="search-top">
                    <div className="searchbox-layer0">
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
                                        defaultValue={[{ label: "Peace", value: "peace" }]}
                                        autoFocus
                                        required
                                        styles={style}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="button" className="search-button" onClick={this.onClick.bind(this)}>
                            <span>Search</span>
                        </button>
                    </div>
                    <div className="content-area">
                        <div className="content-container-left">
                            <h2 style={{color: '#616161'}}>/{this.state.tag_label || this.state.tag}</h2>
                            <div>
                                { this.tabRow() }
                            </div>
                        </div>
                        {isDesktop ? <Searchnotes /> : null}
                    </div>
                </div>
            </React.Fragment>
		)
	}
}