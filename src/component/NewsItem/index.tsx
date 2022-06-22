import { post } from '../../features/newsSlice';

const NewsItem: React.FC<post> = ({ id, title, body }) => {
  return (
    <div className="item">
      <div className="item__container">
        <div className="item__title">id:</div>
        <div className="item__body">{id}</div>
      </div>
      <div className="item__container">
        <div className="item__title">title:</div>
        <div className="item__body"> {title}</div>
      </div>
      <div className="item__container">
        <div className="item__title">body:</div>
        <div className="item__body">{body}</div>
      </div>
    </div>
  );
};

export { NewsItem };
