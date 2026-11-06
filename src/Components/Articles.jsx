import "../App.css";

export default function Articles(props) {
  return (
    <div className={`articles ${props.tech}`}>
      <div className="article-img-container">
        <img src={props.img} alt={props.img} className="article-img" />
        <p className="article-category">{props.subject}</p>
      </div>
      <div className="article-info">
        <div className="article-header">
          <h5 className="article-title">{props.title}</h5>
          <span className="time-container">
            <p className="article-time">{props.time}</p>
            <i class="bi bi-stopwatch"></i>
          </span>
        </div>
        <p className="article-discription">{props.discription}</p>
        <div className="article-footer">
          <span className="author-container">
          <i class="bi bi-pen"></i>
          <h6 className="article-author">{props.author}</h6>
          </span>
          <h6>{props.date}</h6>
        </div>
      </div>
    </div>
  );
}
