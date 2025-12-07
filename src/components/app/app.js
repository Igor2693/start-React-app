
import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAdd from "../employers-add/employers-add";

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employers: [
        { name: 'Alex C.', salary: 5000, increase: false, like: false, id: 1 },
        { name: 'Bulgur V.', salary: 1500, increase: false, like: false, id: 2 },
        { name: 'Xanex W.', salary: 1000, increase: false, like: false, id: 3 }
      ]
    }
    this.maxId = 4

  }
  render() {

    const { employers } = this.state

    const userData = (name, salary) => {

      const newEmployer = {
        name: name,
        salary: salary,
        like: false,
        increase: false,
        id: this.maxId++
      }
      const newArr = [...employers, newEmployer]
      this.setState({
        employers: newArr
      })
    }

    const onDelete = (id) => {
      this.setState((state) => ({
        employers: state.employers.filter(item => {
          return item.id !== id
        })
      }))
    }

    const onToggleProp = (id, prop) => {
      this.setState(({ employers }) => ({
        employers: employers.map(item => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] }
          }
          return item
        })
      }))
    }

    const newData = employers.filter(item => {
      return item.increase === true
    })

    return (
      <div className="app">
        <AppInfo data={this.state.employers} dataLength={newData} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList
          data={employers}
          onDelete={(id) => onDelete(id)}
          onToggleProp={(id, prop) => onToggleProp(id, prop)}
        />
        <EmployersAdd user={(name, salary) => userData(name, salary)} />
      </div>
    );
  }

}

export default App;
