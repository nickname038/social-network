import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

const posts = [
  {message: 'Hi! How are you?', id: 1, likesCount: 11},
  {message: 'It\'s ok', id: 2, likesCount: 15},
];

const postsItems = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div>New posts</div>
      <div className={s.posts}>
        { postsItems }
      </div>
    </div>
  );
}

export default MyPosts;