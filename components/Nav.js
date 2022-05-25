import React from "react";
import styles from "@/styles/Nav.module.css"
import { Sidebar } from '@/components'

export function Nav(){
  return (
    <div className={styles.a}>
    <Sidebar>
        <a href='/'>홈으로</a><br/><br/>
        <a href='/tmc/tablemake'>나의 식단</a><br/><br/>
        <a href='/'>커뮤니티</a><br/><br/>
        <a href='/board/upload'>↪ 게시글 올리기</a><br/><br/>
        <a href='/board/badge'>↪ 나의 배지 관리</a><br/><br/>
    </Sidebar>
    </div>
  );
}
