import styles from './User.module.css'

const User = (props) => {
return(
    <div className={styles['user-wrapper']}>
      <div className={styles.username}>{props.username}</div>
      <div className={styles.age}>{props.age}</div>
    </div>
)
}

export default User

