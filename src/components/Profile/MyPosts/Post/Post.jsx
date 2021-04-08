import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://media.kg-portal.ru/movies/a/ava/posters/ava_3.jpg" alt="" />
      {props.message}
      <div>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;