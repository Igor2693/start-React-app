import EmployersListItem from "../employers-list-item/employers-list-item"

import './employers-list.css'

const EmployersList = ({ data, onDelete, onToggleProp }) => {


    const element = data.map(item => {
        const { id, ...itemOther } = item
        return <EmployersListItem
            key={id}
            {...itemOther}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployersList