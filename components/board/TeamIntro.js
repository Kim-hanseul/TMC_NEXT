import React from 'react'
import styles from "@/styles/Nav.module.css"

export function Board({ onChange, onSubmit}){
    return (
        <div className={styles.b}>
            <table>
                <thead>
                    <tr>
                        <td><h1>TooMuchCoder</h1></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://i.kym-cdn.com/photos/images/original/000/401/612/c11.png" width="400" height="400"/>
                         </td>
                        <td><img src="https://i.ytimg.com/vi/tdwqVX-IVFQ/maxresdefault.jpg" width="400" height="400"/>
                        </td>
                        <td><img src="https://images.ctfassets.net/23wh7e5ryr18/photo-43604/d02a6cd68116e7215d641f962fb92a60/43604-simpsons.jpg?fm=jpg&fl=progressive&w=900&q=50" width="400" height="400"/>
                        </td>
                    </tr>
                    <tr>
                        <td><h><a href="https://github.com/JeongMyeongHong">홍 정 명</a></h></td>
                        <td><h><a href="https://github.com/Kim-hanseul">김 한 슬</a></h></td>
                        <td><h><a href="https://github.com/sol2kwon">권 솔 이</a></h></td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}