import React, { Component } from 'react'

class EvenAndOdd extends Component {

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Even And Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange (e.target.value)} />
                <button className="confirmationButton"> Split </button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvenAndOdd