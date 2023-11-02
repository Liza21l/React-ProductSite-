import s from "./button.module.scss"
const Button= (props) => {
    let btnTheme
    if (props.theme === 'light') {
        btnTheme = s.btn_light
    }else {
        btnTheme = s.btn_dark
    }
    return(
        <>
        <button className={`${s.btn} ${btnTheme}`}>{props.text}</button>
        </>

    )
}

export default Button