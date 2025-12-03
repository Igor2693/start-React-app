
import { Component } from "react";
import { nanoid } from 'nanoid'

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAdd from "../employers-add/employers-add";

import './app.css'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      employers: [
        { name: 'Alex C.', salary: 5000, id: nanoid(3) },
        { name: 'Bulgur V.', salary: 1500, id: nanoid(3) },
        { name: 'Xanex W.', salary: 1000, id: nanoid(3) }
      ]
    }
  }
  render() {

    const { employers } = this.state

    const userData = (name, salary) => {

      const newEmployer = { name: name, salary: salary, id: nanoid(3) }
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

    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList data={employers} onDelete={(id) => onDelete(id)} />
        <EmployersAdd user={(name, salary) => userData(name, salary)} />
      </div>
    );
  }






  // const employers = [
  //   { name: 'Alex C.', salary: 5000, increase: false, id: 1 },
  //   { name: 'Bulgur V.', salary: 1500, increase: false, id: 2 },
  //   { name: 'Xanex W.', salary: 1000, increase: false, id: 3 }
  // ]

  //   let count = 3

  // const userData = (name, salary) => {
  //   const newEmployer = { name: name, salary: salary, id: count + 1 }
  //   const newArr = [...employers, newEmployer]
  //   console.log(newArr);


  // }

  // return (
  //   <div className="app">
  //     <AppInfo />
  //     <div className="search-panel">
  //       <SearchPanel />
  //       <AppFilter />
  //     </div>
  //     <EmployersList data={employers} />
  //     <EmployersAdd user={(name, salary) => userData(name, salary)} />
  //   </div>
  // );
}

export default App;
