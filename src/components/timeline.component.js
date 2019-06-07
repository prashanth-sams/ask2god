import React , { Component } from 'react';
import './../css/timeline.scss'

export default class Timeline extends Component {

	render(){
		return (
			<div>
				<h2>Bible History</h2>
                <div className="timeline timeline-purple">
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                ~ 4000 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>God created Adam and then Eve</h2>
                            <br />
                            <p>Genesis 1-2</p>
                            <i className="fa fa-male fa-icon"></i>
                            <i className="fa fa-female fa-icon"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                2165 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Birth of Abraham</h2>
                            <br />
                            <p>Genesis 11:26</p>
                            <i className="fa fa-child fa-icon"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                1876 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Capture of Israelites in Egypt</h2>
                            <br />
                            <p>Continues for 430 years - Exodus 12:40</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                1446 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Return of Israelites from Egypt</h2>
                            <br />
                            <p>God gave 10 commandments to Israelites at Mt. Sinai through Moses - Exodus 20</p>
                            <i className="fa fa-file-text-o fa-icon"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                1406 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Moses dies</h2>
                            <br />
                            <p>Joushua leads next generation of Israelities into Canaan - Joshua 1</p>
                            <i className="fa fa-long-arrow-right fa-icon"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                1120 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Birth of Samuel</h2>
                            <br />
                            <p>1 Samuel 1</p>
                            <i className="fa fa-child fa-icon"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                1011 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>David becomes King</h2>
                            <br />
                            <p>2 Samuel 2</p>
                            <i className="fas fa-crown fa-icon"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                971 BC
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>Solomon becomes King</h2>
                            <br />
                            <p>1 Kings 1:39</p>
                            <i className="fa fa-king"></i>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">
                            <div>
                                TBD
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h2>TBD</h2>
                            <br />
                            <p>TBD</p>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}