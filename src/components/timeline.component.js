import React , { Component } from 'react';
import './../css/timeline.scss';
import './../css/lightbox.css';
import ReactModal from 'react-modal';

export default class Timeline extends Component {       
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
      
    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render(){
		return (
			<div>
                <br />
                <h2 align="center" >History of Bible</h2>
                <br />
                <br />
                <div className="timeline timeline-purple">
                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                ~ 4000 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>God created Adam and then Eve</h2>
                            <br />
                            <i className="fa fa-male fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <i className="fa fa-female fa-icon" style={{color: "grey", fontSize: "70px" }}></i>
                            <p>God created Adam and then Eve</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">Genesis 1-2</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">                
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                2165 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Birth of Abraham</h2>
                            <br />
                            <i className="fa fa-child fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <p>Birth of Abraham</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">Genesis 11:26</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1876 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Capture of Israelites in Egypt</h2>
                            <br />
                            <p>Continues for 430 years</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">Exodus 12:40</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1446 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Return of Israelites from Egypt</h2>
                            <br />
                            <i className="fa fa-file-text-o fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <br />
                            <p>God gave 10 commandments to Israelites at Mt. Sinai through Moses</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">Exodus 20</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1406 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Moses dies</h2>
                            <br />
                            <i className="fa fa-long-arrow-right fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <p>Joushua leads next generation of Israelities into Canaan</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">Joshua 1</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1120 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Birth of Samuel</h2>
                            <br />
                            <i className="fa fa-child fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <p>Birth of Samuel</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">1 Samuel 1</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1011 BC
                            </div>
                        </div>                        
                        <div className="timeline-content">
                            <h2>David becomes King</h2>
                            <br />
                            <i className="fas fa-crown fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <p>David becomes King</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">2 Samuel 2</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                971 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Solomon becomes King</h2>
                            <br />
                            <i className="fa fa-king" style={{color: "grey", fontSize: "70px"}}></i>
                            <p>Solomon becomes King</p>
                            <h4>
                                <span className="badge badge-success" id="timeline-label">1 Kings 1:39</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1483 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Birth of Martin Luther</h2>
                            <br />
                            <i className="fa fa-child fa-icon" style={{color: "grey", fontSize: "70px"}}></i>
                            <div id="main">
                                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                                <ReactModal 
                                    isOpen={this.state.showModal}
                                    contentLabel="onRequestClose Example"
                                    onRequestClose={this.handleCloseModal}
                                    className="Modal"
                                    overlayClassName="Overlay"
                                >
                                    <p>Modal text!</p>
                                    <button onClick={this.handleCloseModal}>Close Modal</button>
                                </ReactModal>
                            </div>
                            <p>He came to reject several teachings and practices of the Roman Catholic Church. Luther translated the New Testament from Greek into German</p>
                            <p>Nationality: Germany <br /> Spouse: Katharina von Bora</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1522 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>New Testament in German</h2>
                            <br />
                            <p>Luther had published his German translation of the New Testament</p>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}