import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material/utils';
import Box from '@mui/material/Box';

const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
  );

export function Badge({ onChange, onSubmit}){

    return (
      <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <body>
      
      <div class="w3-container" align = "middle">
        <h2>나의 뱃지 관리</h2>
        <br/><br/>
        <button class="w3-button w3-red" >재료 상세히 보기</button>
        <button class="w3-button w3-teal">히스토리 상세히 보기</button>
        <table class="w3-table-all w3-centered" >
          <tr>
            <th>나의 냉장고</th>
            <th>이번주는 이만큼이나 모았어요!</th>
      
          </tr>
          <tr>
            <td>블루베리: 3개</td>
            <td>5.18일 아침식단으로 블루베리 획득!</td>
            
          </tr>
          <tr >
            <td>양상추: 4개</td>
            <td>5.22일 저녁식단으로 브로콜리 획득!</td>
          
          </tr>
          </table>
          <br/><br/>
          <button class="w3-button w3-red" align = "center">요리 상세히 보기</button>
          <button class="w3-button w3-teal" align = "center">식단 상세히 보기</button>
          <table class="w3-table-all w3-centered" >
          <tr>
            <th>나의 요리 컬렉션</th>
            <th>이번주는 이만큼이나 만들었어요!!</th>
          </tr>
          <tr>
            <td>리코타 치킨 샐러드: 1개</td>
            <td>5.18일 아침식단으로 미역국 획득!</td>
          </tr>
          <tr>
            <td>증화식 짬뽕: 2개</td>
            <td>6.22일 저녁식단으로 삼겹살 김치볶음밥 획득!</td>
          </tr>
          </table>
      </div>
      </body>
      </html>
 )
}
            