import React from "react";
import styles from "@/styles/Nav.module.css"
import { Sidebar } from '@/components'

export function Nav(){
  return (
  <>
    <div className={styles.a}>
    <Sidebar>
        <a href='/'>홈으로</a><br/><br/>
        <a href='/tmc/tablemake'>나의 식단</a><br/><br/>
        <a href='/tmc/mypage'>마이 페이지</a><br/><br/>
        <a href='/'>커뮤니티</a><br/><br/>
        { /* <a href='/board/upload'>게시글 올리기</a><br/><br/> */ }
        <a href='/board/badge'>나의 배지 관리</a><br/><br/>
    </Sidebar>
    </div>
    <div className={styles.textBox}>
    <a href="/board/board">TooMuchCoder</a>
    </div>
    <div className={styles.loginIcon}>
    <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzRcWGKwrdBj7PCmGJgejRq35QVcHrfCCQw&usqp=CAU"
      /></a>
    </div>
  </>
  );
}
