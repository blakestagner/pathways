import React from 'react'
import {mainPathways, eduInformation } from '../json/landing/landing'
import Hero from '../hero/Hero';
import Programlist from '../components/Programlist'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import landing from './landing.css'

export default class Landing extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            programName: '',
            mainHeader: '',
            mainContent: ''
        }
    }
    componentDidMount() {
        this.setState({mainHeader: eduInformation[0].mainHeader})
        this.setState({mainContent: eduInformation[0].mainContent})
    }
    render() {
        return(
            <div className="programs"> 
            <Hero 
                mainHeader={this.state.mainHeader}
                mainContent={this.state.mainContent}
                />
                <div className="programsMain" id={this.state.programName}>
                    <h2>Guided Pathways</h2>
                    <p>If you plan on transferring to a 4-year college or university, 
                        see Transfer Options listed under each pathway. Because transfer requirements vary, 
                        check with an adviser and the intended transfer institution to help you plan.</p>
                    <Programlist id={this.state.programName} programs={mainPathways}/>
                </div>
            </div>
        )
    }
}