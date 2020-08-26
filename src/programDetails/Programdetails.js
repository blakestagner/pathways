import React from 'react'
import Hero from '../hero/Hero'
import {mainPathways, eduInformation } from '../json/landing/landing'
import { bus } from '../json/programs/business'
import { BrowserRouter as Router, Link } from "react-router-dom";
import program from './program.css'



export default class Programdetails extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            programId: '',
            subProgramId: '',
            subProgram: '',
            mainHeader: '',
            mainContent: '',
            program: {}
        }
    }
    //static getDerivedStateFromProps(props, state) {}
    componentWillMount() {
        this.setPropsFromUrl()
    }
    componentDidMount() {
        this.getProgramName()

    }
    setHero(x, y) {
        this.setState({mainHeader: `${this.state.programId} - ${x}`, mainContent: y})
        
    }
    setPropsFromUrl() {
        const { match } = this.props
        var program = match.url.split('/')[2]
        this.setState({programId: program, 
                        subProgramId: match.url.split('/')[3] })
    }
    getProgramName() {
        var programMain = this.state.programId.toLowerCase()
        for(let i = 0; i < mainPathways.length; i++) {
            if(mainPathways[i].id === programMain) {
                for(let j = 0; j < mainPathways[i].programs.length; j++) {
                    if (mainPathways[i].programs[j].id === this.state.subProgramId) {
                    this.setState({subProgram: mainPathways[i].programs[j].name})
                    this.setHero(mainPathways[i].programs[j].name, mainPathways[i].content)
                    this.getProgramList(this.state.subProgramId)
                    }
                } break;
            } 
        }
    }

    getProgramList(x) {
        switch(x) {
            case 'acct':
                console.log(x)
            case 'bus':
                this.setState({program: bus})
                break;
            case 'bustec':
                console.log(x)
            case 'econ':
                console.log(x)
            case 'htm':
                console.log(x)
            case 'intbus':
                console.log(x)
            case 'sust':
                console.log(x)
        }
    }
    render() {
        return (
            <div className="programs" id={this.state.subProgramId}>
                <Hero 
                    mainHeader={this.state.mainHeader.charAt(0).toUpperCase() + this.state.mainHeader.slice(1)}
                    mainContent={this.state.mainContent}
                />
                <div className="programsMain" id={this.state.subProgramId}>
                    <ul className="list">
                        <div className="list-item">
                            <div className="degreeContainer">
                            <h2>Degrees 90 Credits & Above</h2>
                            { bus[0].filter(bus => bus.id === 'degreeProgram').map((buss) => (
                                <div key={buss.programName} className="degreeContent">
                                    <div className="degreeInner">
                                    <p className="programsHeader">{buss.programName}</p>
                                    <a
                                        className="programsExplore"
                                        target="blank"
                                        href={buss.link}
                                        >
                                        Explore
                                    </a>
                                    </div>
                                </div>
                            )) 
                            }
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="degreeContainer">
                            <h2>Certificates 45 Credits & Below</h2>    
                            { bus[0].filter(bus => bus.id === 'certificateProgram').map((buss) => (
                                <div key={buss.programName} className="degreeContent">
                                    <div className="degreeInner">
                                    <p className="programsHeader">{buss.programName}</p>
                                    <a
                                        className="programsExplore"
                                        target="blank"
                                        href={buss.link}
                                        >
                                        Explore
                                    </a>
                                    </div>
                                </div>
                            )) 
                            }
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

