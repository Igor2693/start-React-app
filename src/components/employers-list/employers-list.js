import EmployersListItem from "../employers-list-item/employers-list-item"

import './employers-list.css'

const EmployersList = ({ data, onDelete }) => {


    const element = data.map(item => {
        const { id, ...itemOther } = item
        return <EmployersListItem key={id} {...itemOther} onDelete={() => onDelete(id)} />
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default EmployersList