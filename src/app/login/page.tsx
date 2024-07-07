"use client"

import { FormEvent } from "react"
import styles from "./login.module.css"

export default function LoginPage() {
    function onSubmitHandler(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log({id: e.target[0].value, password: e.target[1].value})
    }
    return <form name="login" className={styles.flexColumnContainer} onSubmit={onSubmitHandler}>
            <h1>로그인 페이지</h1>
            <input id="id" type="text" placeholder="ID" className={styles.inputStyle} />
            <input id="password" type="password" placeholder="Password" className={styles.inputStyle}/>
            <button className={styles.buttonStyle}>로그인</button>
        </form>
}