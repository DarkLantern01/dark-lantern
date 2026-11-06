import "../App.css"

export default function Services(props) {
    return (
        <div className={`services ${props.title}`}>
            <span>
            <i className={`services-icons ${props.icon}`}></i>
            </span>
            <span className="service-info">
            <h4>{props.title}</h4>
            <p className="p-service">{props.discription}</p>
            </span>
        </div>
    )
}