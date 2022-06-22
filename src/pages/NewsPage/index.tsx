import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { NewsItem } from '../../component/NewsItem';

import { getPosts } from '../../features/newsSlice';

const NewsPage = () => {
  const posts = useAppSelector((state) => state.news.posts);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container">
      {posts ? (
        <ul>
          {posts.map((i) => (
            <NewsItem key={i.id} id={i.id} title={i.title} body={i.body}></NewsItem>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export { NewsPage };
