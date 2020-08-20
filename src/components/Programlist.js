import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
  
export default class Programlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id
        }
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
                            <img className="programsImg" src={require(`../img/pathwaysIcon/${programs.id}.png`)} />
                                <p className="programsHeader">{programs.pathwayName}</p>
                                <p className="programsContent">{programs.content}</p>
                                <Link 
                                    className="programsExplore"
                                    exact='true'
                                    to={`/programs/${programs.id}`}
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