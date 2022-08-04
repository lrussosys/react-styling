import styles from './Button.module.css'

const Button = (props) => {
return(
    <button className={styles.button} type={props.type}>Add</button>
)
}

export default Button