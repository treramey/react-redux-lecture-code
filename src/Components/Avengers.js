import React, {Component} from 'react';

class Avengers extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleAdd = () => {
        //bring in redux action here
    }

    render(){
        return (
            <div>
                <h1>Avengers</h1>
                <input 
                    value={this.state.nameInput}
                    placeholder='Avenger Name'
                    onChange={(e) => this.handleInput(e.target.value)}/>
                <button>Add Avenger</button>
            </div>
        )
    }
}

export default Avengers;