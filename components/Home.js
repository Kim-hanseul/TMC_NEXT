import ReactPlayer from "react-player";
import "@/styles/Home.module.css"
export function Home() {
    return (
        
        <>
        <div className="outer">
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={'https://www.youtube.com/watch?v=1hY8f20tqlI'}    // 플레이어 url
                width='95vw'         // 플레이어 크기 (가로)
                height='100vh'        // 플레이어 크기 (세로)
                playing={true}        // 자동 재생 on
                muted={true}          // 자동 재생시 음소거 on
                controls={false}       // 플레이어 컨트롤 노출 여부
                light={false}         // 플레이어 모드
                pip={false}            // pip 모드 설정 여부
                loop={true}
                headerShown={false}
                /* poster={'https://whatsnewindonesia.com/wp-content/uploads/2020/03/Cooking-IG_2.jpg'} */  // 플레이어 초기 포스터 사진
                onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
            />
        </div>
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player2'
                url={'https://www.youtube.com/watch?v=2fDzCWNS3ig'}    // 플레이어 url
                width='95vw'         // 플레이어 크기 (가로)
                height='100vh'        // 플레이어 크기 (세로)
                playing={true}        // 자동 재생 on
                muted={true}          // 자동재생시 음소거 on
                controls={false}       // 플레이어 컨트롤 노출 여부
                light={false}         // 플레이어 모드
                pip={false}            // pip 모드 설정 여부
                loop={true}             //loop 설정
                onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
            />
        </div>
        </div>
    </>
    )
}
export default Home;