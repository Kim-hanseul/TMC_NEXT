import React from 'react'
import { createSvgIcon } from '@mui/material/utils';
import styles from '@/styles/Table.module.css'


export function Community({onChange,onSubmit}){

    return(
      <html>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <body>
        <h2 class="w3-text-blue">게시글 작성하기</h2>
        <p>      
        <label class="w3-text-blue"><b>제목</b></label>
        <input class="w3-input w3-border" name="first" type="text"/></p>
        <p>      
        <label class="w3-text-blue"><b>게시글 작성</b></label><br/>
        <textarea cols="200" rows="10"></textarea></p>
        <p>
        <div align = "center">
        <a href="/"><button class="w3-button w3-teal">취소</button></a>
        <button class="w3-btn w3-blue "  >저장</button>
        </div>  
        </p>
      </body>
      </html> 
  )
}
       