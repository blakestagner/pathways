import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  
export default class Subprogramlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }
    componentWillMount() {
        this.setState({id: this.props.id})
    }
    render() {
        return (
            <div className="programsList">
                <div className="">
                    <ul className="list">
                        {
                        this.props.programs.map((programs)=> (
                        <div key={programs.id} className="list-item">
                            <div className="list-content">
                            <img className="subProgramsImg" src={require(`../img/${this.state.id}/${programs.id}.svg`)} />
                                <p className="programsHeader">{programs.name}</p>
                                <Link 
                                    className="subProgramsExplore"
                                    to={`/programs/${this.state.id}/${programs.id}`}
                                    >
                                    Explore
                                </Link>
                            </div>
                        </div>
                        ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}