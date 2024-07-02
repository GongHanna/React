import styles from './ComEx1.module.scss';

const ComEx1 = () => {
  return (
    <div className={styles.wrapper}>
      <h2>css, scss module 적용</h2>
      <ul>
        <li className={`${styles.box} ${styles.orange}`}>orange</li>
        <li className={`${styles.box} ${styles.salmon}`}>salmon</li>
        <li className={`${styles.box} ${styles.lightblue}`}>lightblue</li>
      </ul>
    </div>
  );
};

export default ComEx1;