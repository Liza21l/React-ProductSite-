import phoneImg from  './phone.svg'
import s from './img.module.scss'
const Post = () => {
    return (
        <div>
            <img  className={`${s.img}`} src={phoneImg}/>
        </div>
    )
}
export default Post