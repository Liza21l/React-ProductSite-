import s from './products.module.scss'
import Post from '../Post/post';
import Button from '../Button/Button';
const Products = (props) => {
    return (
        <div className={`${s.products}`}>
            <div className={`${s.products_block}`}>
                <Post/>
                <p className={`${s.Name}`}>Samsung A32</p>
                <p className={`${s.Name_price}`}>7500 грн</p>
                <button className={`${s.btnAdd}`}>Додати в кошик</button>
            </div>
            <div className={`${s.products_block}`}>
                <Post  className={`${s.img}`}/>
                <p className={`${s.Name}`}>Samsung A32</p>
                <p className={`${s.Name_price}`}>7500 грн</p>
                <button className={`${s.btnAdd}`}>Додати в кошик</button>
            </div>
            <div className={`${s.products_block}`}>
                <Post  className={`${s.img}`}/>
                <p className={`${s.Name}`}>Samsung A32</p>
                <p className={`${s.Name_price}`}>7500 грн</p>
                <button className={`${s.btnAdd}`}>Додати в кошик</button>
            </div>
            <div className={`${s.products_block}`}>
                <Post  className={`${s.img}`}/>
                <p className={`${s.Name}`}>Samsung A32</p>
                <p className={`${s.Name_price}`}>7500 грн</p>
                <button className={`${s.btnAdd}`}>Додати в кошик</button>
            </div>
        </div>
    )
}

export default Products