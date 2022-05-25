import React from 'react'
import styles from '@/styles/Table.module.css'


export function Upload({onClick}){

    return(
      <div>
          <table className={styles.table} >
              <thead>      
                <tr>
                <td><button onClick={()=>window.location.href='/'}>홈 화면으로</button></td>
                <td><button>내가 쓴 댓글</button></td>
                <td><button>내가 쓴 글</button></td>
                </tr>    
              </thead>
              
              <tbody style={{height:400+"px", textAlign:"center"}}>
                <td colSpan={3}><button onClick={onClick}>게시글 올리기</button></td>       
              </tbody>
          </table>
      </div>
  )
}