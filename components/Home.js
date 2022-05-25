import styles from "@/styles/Home.module.css";

export function Home() {
    return (
        <> < header className = {styles.w3DisplayContainer+ ' ' + styles.w3Content+ ' ' + styles.w3Center} style = {{maxWidth:"1920px"}} > <img
        className={styles.w3Image}
            src="https://www.w3schools.com/w3images/photographer.jpg"
            alt="Me"
            width="1520"
            height="800"/>
    </header>   
</>
    )
}