import React, {Component} from 'react' 
class FilterObject extends Component {

    constructor(){
        super()

        this.state = {
            employees: [
                {
                    name: 'Kara LeSueur',
                    title: 'Regional Sales Manager',
                    age: 32,
                },
                {
                    name: 'Stephanie James',
                    title: 'Sales Operations Director',
                    age: 31,
                },
                {
                    name: 'Jacob Knowle',
                    title: 'Account Manager',
                    age: 28,
                }
            ],
            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterEmployees(prop) {
        
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original:  {JSON.stringify(this.state.employees, null, 10) } </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered:  {JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject 