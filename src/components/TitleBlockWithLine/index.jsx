import { Link } from "react-router-dom"
import styles from "./index.module.css"

const TitleBlockWithLine = ({ text, textBtn, link }) => {
  return (
    <div className={styles.title_block}>
      <div className={styles.title}>
        <h2>
          {text}
        </h2>
      </div>
      <div className={styles.line}></div>
      <div>
        <Link to={link}>
          <button  className={styles.Btn}>
            {textBtn}
          </button>
        </Link>
      </div>
    </div>
  )
}
export default TitleBlockWithLine
