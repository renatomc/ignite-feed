import styles from './Avatar.module.css';

interface Avatar {
  src: string;
  alt?: string;
  hasBorder?: boolean;
}

export function Avatar({ src, alt, hasBorder = true }: Avatar) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={alt} 
    />
  )
}