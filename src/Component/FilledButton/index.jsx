import style from "./index.module.css"
const FilledButton = () => {

    return(
        <div>
            <button className={style.btn} style={{background: "color", color: "textColor"}}>{text}</button>
        </div>
    )
}

export  default FilledButton;
