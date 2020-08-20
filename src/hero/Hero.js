import React from 'react'
import {eduInformation } from '../json/landing/landing'
import  logo  from '../img/hclogo-2color.png'
import './hero.css'

export default class Hero extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            collegeName: '',
            logo: '',
            programName: ''
        }
    } 
    componentDidMount() {
        this.setState({collegeName: eduInformation[0].eduName})
        this.setState({logo: eduInformation[0].logoMain})
    }
    render() {
        return(
            <div className="hero" id={this.state.programName}>
                <div className="heroMain">
                    <img src={logo} className="mainLogo" alt="School Logo"/>
                    <div className="heroContent">
                    <h1 className='mainHeader'>{this.props.mainHeader}</h1>
                    <p className="mainContent">{this.props.mainContent}</p>
                    </div>
                </div>
            </div>
        )
    }
}