import React from 'react'



export function CommunityList({}){

    return(

<html>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<body>

<div class="w3-container" >
  <h2>게시글 커뮤니티</h2>
  <div class="w3-bar">
  <a href="/"><button class="w3-button w3-teal">홈</button></a>
  <a href="/board/community"><button class="w3-button w3-red w3-button w3-right">게시글 작성</button></a> 
  
  <br/><br/>
</div>
  <table class="w3-table-all">
    <tr>
      <th class="w3-left-align">번호</th>
      <th>제목</th>
      
    </tr>
    <tr>
      <td>1</td>
      <td>혼밥 식단 추천</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>파티 식단 공유합니다.</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>식단 강추</td>
    </tr>

    <tr>
    <td>4</td>
    <td>냉장고 속 재료로 초간단 요리하기</td>
    </tr>

    <tr>
    <td>5</td>
    <td>오늘의 요리</td>
   </tr>

  <tr>
    <td>6</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>7</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>8</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>9</td>
    <td>오늘의 요리</td>
  </tr>
    </table>
  </div>

  </body>
</html>
  )
}
            