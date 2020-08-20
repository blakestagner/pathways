import React from 'react'
import Hero from '../hero/Hero'
import Subprogramlist from '../components/Subprogramlist'
import {mainPathways, eduInformation } from '../json/landing/landing'
import landing from '../landing/Landing'


export default class Programs extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            mainHeader: '',
            mainContent: '',
            programId: '',
            subProgramList: []
        }
    }
    componentWillMount() {
        this.checkState()
    }
    componentDidMount() {
        this.setHero()
    }
    checkState() {
        var url = this.props.location.pathname.split("/")[2]
        this.setState({programId: url})
    }
    setHero() {
        for(let i = 0; i < mainPathways.length; i++) {
            if(mainPathways[i].id === this.state.programId) {
                this.setState({mainHeader: mainPathways[i].pathwayName, mainContent: mainPathways[i].content })
                this.getProgramData(mainPathways[i].programs)
                break;
            } else;
        }
    }
    getProgramData(x) {
        this.setState({subProgramList: x})
    }
    render() {
        return(
            <div className="programs" id={this.state.programId}>
                <Hero 
                    mainHeader={this.state.mainHeader}
                    mainContent={this.state.mainContent}
                />
                <div className="programsMain" id={this.state.programName}>
                    <Subprogramlist id={this.state.programId} programs={this.state.subProgramList}/>
                </div>
            </div>
        )
    }
}