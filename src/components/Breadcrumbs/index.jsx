import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({pathes}) {
    return (
        <div className={s.breadcrumbs}>
            <div className={s.breadcrumbs_item}>
                <Link to='/' className={s.button}>Main page</Link>
            </div>
            {
                pathes.map(path => (
                    <div className={s.breadcrumbs_item} key={path.title}>
                        <span className={s.line}></span>
                        <Link to={path.link} className={s.button}>{path.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}