import React , { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './../../css/home.css';
import { colourOptions } from '../../docs/data';


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
        this.onChangeTagName = this.onChangeTagName.bind(this);
        this.onClick= this.onClick.bind(this);

        this.state = {
            searchtags: [],
            width: 0
        }
        axios.defaults.baseURL = 'http://localhost:4000/keywords';
    }

    componentDidMount() {
        if (window.innerWidth > 768) {
            this.setState({ width: 5 });
        } else {
            this.setState({ width: 2 });
        }
    }

    onClick(e){
        // console.log(`The keywords are ${this.state.searchtags}`)
        // e.preventDefault();
        const tags=this.state.searchtags;
		axios.get(`/search/${tags}`).then(res => {           
            console.log(res.data)
            this.setState({results : res.data});
		}).catch(function(error){
			console.log(error);
		})
    }

    onChangeTagName(newValue, actionMeta) {
        /**
         * console.group('Value Changed');
         * console.log(newValue);
         * console.log(`action: ${actionMeta.action}`);
         * console.groupEnd();
         */
        const values = [];
        
        if (newValue !== null) {
          for (let i = 0, l = newValue.length; i < l; i++) {
            values.push(newValue[parseInt(i)].value);
          }
          this.setState({
            searchtags: values
          })
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
                                        onChange={this.onChangeTagName}
                                        options={this.state.searchtags.length >= parseInt(this.state.width) ? [] : colourOptions}
                                        noOptionsMessage={() => {
                                            return this.state.searchtags.length >= parseInt(this.state.width) ? "You have reached the max keywords search" : "No options available" ;
                                          }}
                                        placeholder="Search keywords [e.g., Jesus]"
                                        autoFocus
                                        required
                                        styles={style}
                                    />
                                </div>
                            </div>
                        </div>
                        <a onClick={this.onClick.bind(this)} href='/search'>
                            <button type="button" className="search-button">
                                <span>Search</span>
                            </button>
                        </a>
                    </div>
                    <a onClick={this.onClick.bind(this)} href='/search'>
                        <button type="button" className="mobile-search-button">
                            <span>Search</span>
                        </button>
                    </a>
			    </div>
                <div className="row">
                    <div className="col-lg-4 thumbnail">
                        <a href="/timeline"><img className="rounded-circle" src="https://i.imgur.com/jBMeyiY.png" alt="bible timeline" width="140" height="140" /></a>
                        <h3>Bible History</h3>
                        <p>Chronology of the Old Testament <br/> Adam to Jesus Christ's Birth</p>
                    </div>
                    <div className="col-lg-4 thumbnail">
                        <a href="/question"><img className="rounded-circle" src="https://i.imgur.com/ls1f4NZ.png" alt="questions" width="140" height="140" /></a>
                        <h3>Ask Me</h3>
                        <p>Whoever drinks the water I give him will never thirst</p>
                    </div>
                    <div className="col-lg-4 thumbnail">
                        <img className="rounded-circle" src="https://i.imgur.com/Fhc7ADO.png" alt="from NewTestament" width="140" height="140" />
                        <h3>Jesus Christ</h3>
                        <p>Timeline from Jesus Christ's Birth, <br/> Holy Spirit's take over and The New Covenant</p>
                    </div>
                </div>
            </div>
		)
	}
}