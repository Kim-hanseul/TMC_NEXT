import React from 'react'
export function Board({ onChange, onSubmit}){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td><h1>Team TooMuchCoder</h1></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://i.kym-cdn.com/photos/images/original/000/401/612/c11.png" width="500" height="600"/>
                         </td>
                        <td><img src="https://i.ytimg.com/vi/tdwqVX-IVFQ/maxresdefault.jpg" width="500" height="600"/>
                        </td>
                        <td><img src="https://images.ctfassets.net/23wh7e5ryr18/photo-43604/d02a6cd68116e7215d641f962fb92a60/43604-simpsons.jpg?fm=jpg&fl=progressive&w=900&q=50" width="500" height="600"/>
                        </td>
                    </tr>
                    <tr>
                        <td><h5> <a href="https://github.com/JeongMyeongHong">홍정명</a></h5></td>
                        <td><h5> <a href="https://github.com/Kim-hanseul">김한슬</a></h5></td>
                        <td><h5> <a href="https://github.com/sol2kwon">권솔이</a></h5></td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}