import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import { PostData } from "./types/PostType";

import styles from './App.module.css';

import './global.css';

const posts: PostData[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/renatomc.png',
      name: 'Renato Costa',
      rule: 'Dev Front end'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galera,'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      { type: 'link', content: 'renatomc/git'},
    ],
    publishedAt: new Date('2023-10-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      rule: 'CTO @Rocketseat'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galera,'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
      { type: 'link', content: 'diego3g/git'},
    ],
    publishedAt: new Date('2023-10-10 20:00:00'),
  },
];

function App() {

  return (
    <>
    <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => (
          <Post 
            key={post.id} 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        ))}
      </main>
     </div>
    </>
  )
}

export default App
