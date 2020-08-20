import React, {Component} from 'react' 

class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names:  {JSON.stringify(this.state.names, null, 10)}
                </span>
                <input className="inputLine" />
                <button className="confirmationButton"> Filtered </button>
                <span className="resultsBox filterStringRB"> Filtered Names:  {JSON.stringify(this.state.filteredNames, null, 10)}
                </span>
            </div>
        )
    }
}

export default FilterString