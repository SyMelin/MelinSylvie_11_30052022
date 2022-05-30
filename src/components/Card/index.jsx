function Card ({ title, cover }) {
    return (
        <div>
            <img src={cover} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default Card