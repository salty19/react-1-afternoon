import React, {Component} from 'react' 

class Sum extends Component {

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(val) {
        this.setState({ number1: parseInt(val, 10) })
    }

    updateNumber2(val) {
        this.setState({ number2: parseInt(val, 10) })
    }

    render() {
        return (
            <div className="puzzlebox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number"  onChange={ (e) => this.updateNumber1(e.target.value)} />
                <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value)} />
                <button className="confirmationButton"> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum 