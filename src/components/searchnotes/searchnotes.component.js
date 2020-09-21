import React, { Component } from 'react'

export default class Searchnotes extends Component {
  render() {
    return (
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
    )
  }
}