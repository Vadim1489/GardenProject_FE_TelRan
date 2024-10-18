import NotFoundImg from './media/404.png'
import NotFoundImg_4 from './media/4.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className={s.not_found_page_container}>
      <div className={s.not_found_page}>
        <div className={s.block_404}>
          <img src={NotFoundImg_4} alt="Not Found Image" className={s._4} />
          <img src={NotFoundImg} alt="Not Found Image" />
          <img src={NotFoundImg_4} alt="Not Found Image" className={s._4} />
          
        </div>
        <div className={s.block_404_text}>
          <h2>Page Not Found</h2>
          <p>
            We’re sorry, the page you requested could not be found. <br/>
            Please go back to the homepage.
          </p>
          <Link to='/' >
            <div>Go Home</div>
          </Link>
        </div>
      </div>
    </div>
  )
}