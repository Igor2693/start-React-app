
import { Component } from 'react'

import './employers-add.css'

class EmployersAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    nameUser = (e) => {

        this.setState({
            name: e.target.value.replace(/[^а-яa-z]/gi, '')
        })

    }

    salaryUser = (e) => {

        this.setState({
            salary: e.target.value.replace(/[^\d]/gi, '')
        })

    }

    addUser = (e) => {
        e.preventDefault()
        if (this.state.name && this.state.salary) {
            this.props.user(this.state.name, this.state.salary)
            this.setState(({
                name: '',
                salary: ''
            }))
        }


    }


    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.addUser}
                    className="add-form d-flex">
                    <input type="text"
                        onChange={this.nameUser}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={this.state.name} />
                    <input type="text"
                        onChange={this.salaryUser}
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={this.state.salary} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAdd