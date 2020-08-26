import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
  
export default class Programdegrees extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id
        }
    }
    render() {
        return (
            <div className="programsList">
                
            </div>
        )
    }
}