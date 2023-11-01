/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment ({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/renatomc.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renato Costa</strong>
              <time title="30 de Outubro de 2023 às 22:00" dateTime='2023-10-30 22:00:00'>Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}