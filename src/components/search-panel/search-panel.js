
import { Component } from 'react'

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }


    inputName = (e) => {
        const term = e.target.value
        this.setState(({
            userName: term
        }))

        this.props.value(term)

    }
    render() {

        return (
            <>
                <input type="text"
                    value={this.state.userName}
                    onChange={this.inputName}
                    className="form-control search-input"
                    placeholder="Найти сотрудника" />
            </>

        )
    }
}

export default SearchPanel