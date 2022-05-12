import { NewsItem } from "../../component/NewsItem/NewsItem";
import React from "react";
import { getPosts } from "../../features/newsSlice";
import { useDispatch, useSelector } from "react-redux";
const NewsPage = () => {
  const posts = useSelector((state) => state.news.posts);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container">
      {posts ? (
        <ul>
          {posts.map((i) => (
            <NewsItem
              key={i.id}
              id={i.id}
              title={i.title}
              body={i.body}
            ></NewsItem>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export { NewsPage };
