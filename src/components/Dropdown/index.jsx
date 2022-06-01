import '../../styles/Dropdown.css'

function Dropdown ({title, text}) {
    return (
        <div className="dropdown__container">
            <h2 className="dropdown__up">{title}</h2>
            <p className="dropdown__bottom">{text}</p>
        </div>
    )
}

export default Dropdown