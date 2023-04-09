import styles from './Title.module.css';

export default function Title({title,subtitle})
{
    return (
        <div className={styles.Title}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}