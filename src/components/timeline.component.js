import React , { Component } from 'react';
import './../css/timeline.scss';
import './../css/lightbox.css';
import { Button } from "react-bootstrap";

export default class Timeline extends Component {
    
    constructor () {
        super();
        this.state = {
            showModal: false
        }
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleOpenModal (e) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    }
      
    handleCloseModal () {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    handleScroll() {
        const styles = `
            display:block;
            position:fixed;
            bottom:10px;
            left:80%
        `
        if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
            document.getElementById("top").style = styles
        } else {
            document.getElementById("top").style.display = "none";
        }
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
                                382-384 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>New Testament in Latin</h2>
                            <br />
                            <div id="main">
                                <img id="myImg" src="https://i.imgur.com/p5wz3Kb.jpg" alt="Jerome" onClick={this.handleOpenModal} style={{width: "100%", maxwidth: "300px"}}></img>

                                <div id="myModal" className="modal">
                                    <span className="close" onClick={this.handleCloseModal}>&times;</span>
                                    <img className="modal-content" src="https://i.imgur.com/p5wz3Kb.jpg" style={{width: "100%", maxwidth: "300px"}} alt="Jerome" id="img01"></img>
                                    <div id="caption">Jerome</div>
                                </div>

                            </div>
                            <p>Jerome translates the New Testament from original Greek into Latin</p>
                            <p style={{backgroundColor: "grey"}}>Nationality: TBD <br /> Spouse: TBD <br /> Born: TBD <br /> Died: TBD <br /> Lived: TBD years</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                390-405 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Old Testament in Latin</h2>
                            <br />
                            <p>Jerome translates the Old Testament from original Hebrew into Latin. It includes the 39 Old Testament books, 27 New Testament books, and 14 Apocrypha books.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                600 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Roman Catholic announced Latin Bible as the only scripture</h2>
                            <br />
                            <p>The Roman Catholic Church declares Latin as the only language for Scripture.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1382-1395 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Holy Bible in English</h2>
                            <br />
                            <div id="main">
                                <img id="myImg" src="https://i.imgur.com/T36idC6.jpg" alt="John Wycliffe" onClick={this.handleOpenModal} style={{width: "100%", maxwidth: "300px"}}></img>

                                <div id="myModal" className="modal">
                                    <span className="close" onClick={this.handleCloseModal}>&times;</span>
                                    <img className="modal-content" src="https://i.imgur.com/T36idC6.jpg" style={{width: "100%", maxwidth: "300px"}} alt="Martin" id="img01"></img>
                                    <div id="caption">John Wycliffe</div>
                                </div>
                            </div>
                            <p>John Wycliffe is remembered first as a Bible translator. He lived in the 1300s when the Roman Catholic Church ruled, and it authorized Bibles written only in Latin. After Wycliffe translated the Bible into English, each copy took ten months to write by hand. These translations were banned and burned as quickly as church officials could get their hands on them</p>
                            <p style={{backgroundColor: "grey"}}>Nationality: TBD <br /> Spouse: TBD</p>
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
                            <div id="main">
                                <img id="myImg" src="https://i.imgur.com/ALK6uVt.jpg" alt="Martin Luther" onClick={this.handleOpenModal} style={{width: "100%", maxwidth: "300px"}}></img>

                                <div id="myModal" className="modal">
                                    <span className="close" onClick={this.handleCloseModal}>&times;</span>
                                    <img className="modal-content" src="https://i.imgur.com/ALK6uVt.jpg" style={{width: "100%", maxwidth: "300px"}} alt="Martin" id="img01"></img>
                                    <div id="caption">Martin</div>
                                </div>

                            </div>
                            <p>He came to reject several teachings and practices of the Roman Catholic Church. Luther translated the New Testament from Greek into German</p>
                            <p style={{backgroundColor: "grey"}}>Nationality: Germany <br /> Spouse: Katharina von Bora</p>
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

                    <div className="timeline-item">
                        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" className="timeline-date">
                            <div>
                                1706 AD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Holy Bible in Tamil</h2>
                            <br />
                            <div id="main">
                                <img id="myImg" src="https://i.imgur.com/f2pZWtH.jpg" alt="Ziegenbalg" onClick={this.handleOpenModal} style={{width: "100%", maxwidth: "300px"}}></img>

                                <div id="myModal" className="modal">
                                    <span className="close" onClick={this.handleCloseModal}>&times;</span>
                                    <img className="modal-content" src="https://i.imgur.com/f2pZWtH.jpg" style={{width: "100%", maxwidth: "300px"}} alt="Ziegenbalg" id="img01"></img>
                                    <div id="caption">Ziegenbalg</div>
                                </div>

                            </div>
                            <p>Bartholomaeus Ziegenbalg is the first Protestant missionary to India. He translated the New Testament from Greek to Tamil, double-checked by an equally linguistically gifted Gründler. He brought along with him a Tamil, Peter Malaiyappan, to converse with him in Tamil and help him with the Old Testament translation</p>
                            <p style={{backgroundColor: "grey"}}>Nationality: Germany <br /> Spouse: Maria Dorothea Saltzmann (1716) <br /> Born: 10 July 1682 <br /> Died: 23 February 1719 <br /> Lived: 36 years</p>
                        </div>
                    </div>

                </div>
                <Button onClick={this.topFunction} id="top" title="Go to top">
                    <i className="fa fa-arrow-up fa-icon" style={{fontSize: "15px"}}></i>
                    Top
                </Button>
			</div>
            
		)
	}
}