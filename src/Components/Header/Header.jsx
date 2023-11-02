import Button from '../Button/Button';
import s from './Header.module.scss'
import { LogoIcon } from '../Icon';
const Header = (props) => {
    let headerTheme
    if (props.theme === '') {
        headerTheme = s.header
    }
    return (
        <header className={`${s.header} ${headerTheme}`}>
            <LogoIcon/>
            <p className={`${s.header_logoText}`}>Phone Store</p>
            <div className={`${s.btnBlock}`}>
                <Button text="Sidn in" theme="dark"/>
                <Button text="Sidn up" theme="light"/>
            </div>
            <div className={`${s.navBar}`}>
                <p className={`${s.navBar_p}`}>Home</p>
                <p>Store</p>
                <p>About us</p>
                <p>Contacts</p>
            </div>
        </header>
    )

}

export default Header