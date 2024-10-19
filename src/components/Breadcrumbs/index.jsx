import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({pathes}) {
    return (
        <div className={s.breadcrumbs}>
            <Link to='/' className={s.button}>Main page</Link>
            {
                pathes.map(path => (
                    <>
                        <span className={s.line}></span>
                        <Link to={path.link} className={s.button}>{path.title}</Link>
                    </>
                ))
            }
        </div>
    )
}