const express = require('express');
const path = require('path');
const app = express();
const PORT = 8002;

const quotes = [
  { title: "작은 일에 거창함이 깃들어 있다.", who: "밥 말리" },
  { title: "인생은 속도가 아니라 방향이다.", who: "마하트마 간디" },
  { title: "꿈을 기록하는 것이 목표가 아니라, 행동으로 옮기는 것이 목표다.", who: "이소룡" },
  { title: "사람은 불행을 통해 성장한다.", who: "도스토예프스키" },
  { title: "행동 없는 비전은 꿈에 불과하다.", who: "조엘 바커" },
  { title: "행복은 준비된 자에게 찾아온다.", who: "파스퇴르" },
  { title: "당신의 시간이 제한되어 있음을 기억하라.", who: "스티브 잡스" },
  { title: "끝날 때까지 끝난 게 아니다.", who: "요기 베라" },
  { title: "성공은 실패를 거듭하며 이룬다.", who: "윈스턴 처칠" },
  { title: "우리는 생각하는 대로 된다.", who: "부처" },
  { title: "어둠 속에서도 빛나는 별은 있다.", who: "빌리 조엘" },
  { title: "어려움은 우리가 성취하도록 만든다.", who: "알버트 아인슈타인" },
  { title: "희망은 영혼의 깃발이다.", who: "플라톤" },
  { title: "변화는 고통을 수반한다.", who: "루소" },
  { title: "배움은 끝이 없다.", who: "레오나르도 다 빈치" },
  { title: "좋은 친구는 어려울 때 빛난다.", who: "에우리피데스" },
  { title: "실패는 성공으로 가는 디딤돌이다.", who: "톰 왓슨" },
  { title: "고통은 영혼을 깨끗이 한다.", who: "칼릴 지브란" },
  { title: "모든 위대한 일은 작은 한 걸음에서 시작된다.", who: "라우쩌" },
  { title: "끈기는 재능을 이긴다.", who: "나폴레옹 힐" },
  { title: "포기하지 않는 사람이 승리한다.", who: "아브라함 링컨" },
  { title: "어둠이 깊을수록 새벽은 가깝다.", who: "빅토르 위고" },
  { title: "자유는 용기에서 온다.", who: "소크라테스" },
  { title: "행복은 자기 자신과의 화해에서 시작된다.", who: "칼 융" },
  { title: "사랑은 모든 것을 정복한다.", who: "베르길리우스" },
  { title: "자신감을 가지면 무엇이든 할 수 있다.", who: "헬렌 켈러" },
  { title: "배움은 지혜의 씨앗이다.", who: "탈레스" },
  { title: "위대한 것은 간단하다.", who: "톨스토이" },
  { title: "과거에 집착하지 마라.", who: "에픽테토스" },
  { title: "인내는 쓰지만 열매는 달다.", who: "루소" },
  { title: "무지보다는 진실을 택하라.", who: "소포클레스" },
  { title: "문제는 항상 기회와 함께 온다.", who: "존 애덤스" },
  { title: "위대한 정신은 반대에 부딪힌다.", who: "알버트 아인슈타인" },
  { title: "경험은 최고의 스승이다.", who: "줄리어스 시저" },
  { title: "위험을 감수하지 않으면 아무것도 얻지 못한다.", who: "벤자민 프랭클린" },
  { title: "미래는 오늘 시작된다.", who: "교황 요한 바오로 2세" },
  { title: "작은 친절이 세상을 바꾼다.", who: "에이브라함 링컨" },
  { title: "기회는 행동하는 자의 것이다.", who: "헨리 포드" },
  { title: "최고가 아니면 시작하지 마라.", who: "스티브 잡스" },
  { title: "스스로를 믿으면 한계를 초월할 수 있다.", who: "오프라 윈프리" },
  { title: "행동이 말보다 강하다.", who: "루이 아마르" },
  { title: "성공은 포기하지 않는 자의 것이다.", who: "월트 디즈니" },
  { title: "행복은 지금 이 순간에 있다.", who: "틱낫한" },
  { title: "위대한 영혼은 반대를 두려워하지 않는다.", who: "마하트마 간디" },
  { title: "도전하지 않으면 기회는 없다.", who: "존 에프 케네디" },
  { title: "열정은 성공의 불꽃이다.", who: "빈스 롬바르디" },
  { title: "완벽을 추구하지 말고 꾸준함을 추구하라.", who: "댄 월도" },
  { title: "세상은 도전하는 자의 것이다.", who: "프랭클린 루즈벨트" },
  { title: "미래는 준비된 자의 것이다.", who: "앨런 셰퍼드" },
  { title: "인생은 하나의 예술이다.", who: "빈센트 반 고흐" },
  { title: "믿음은 불가능을 가능하게 만든다.", who: "헬렌 켈러" },
  { title: "어제보다 나은 오늘을 만들어라.", who: "에머슨" },
  { title: "인생은 선택의 연속이다.", who: "프리드리히 니체" },
  { title: "희망은 어떤 상황에서도 필수다.", who: "넬슨 만델라" },
  { title: "사랑은 모든 것을 가능하게 한다.", who: "마더 테레사" },
  { title: "실패는 성공의 어머니이다.", who: "톰 왓슨" },
  { title: "사람은 꿈을 따라 살아야 한다.", who: "레프 톨스토이" },
  { title: "무지의 어둠은 지식의 빛으로 물리칠 수 있다.", who: "아이작 뉴턴" },
  { title: "실패는 시도한 사람의 훈장이다.", who: "조지 버나드 쇼" },
  { title: "용기는 공포를 극복하는 것이다.", who: "마크 트웨인" },
  { title: "미래는 지금의 결정에 달려 있다.", who: "엘리노어 루즈벨트" },
  { title: "성공은 작은 습관의 연속이다.", who: "제임스 클리어" },
  { title: "포기는 가장 큰 적이다.", who: "마이클 조던" },
  { title: "좋은 아이디어는 공유할수록 강해진다.", who: "찰스 다윈" },
  { title: "새로운 길을 찾는 자가 성공한다.", who: "토머스 에디슨" },
  { title: "가장 큰 위험은 아무것도 하지 않는 것이다.", who: "마크 저커버그" },
  { title: "행복은 자신을 사랑하는 데서 시작된다.", who: "오쇼" },
  { title: "변화는 작은 한 걸음에서 시작된다.", who: "마틴 루터 킹 주니어" },
  { title: "사람은 목표가 없으면 떠다니는 배와 같다.", who: "세네카" },
  { title: "미래는 오늘 우리가 만드는 것이다.", who: "마하트마 간디" },
  { title: "웃음은 최고의 약이다.", who: "찰리 채플린" },
  { title: "용기는 두려움 속에서 시작된다.", who: "넬슨 만델라" },
  { title: "배움은 끝이 없다.", who: "아리스토텔레스" },
  { title: "자신을 믿는 것이 가장 중요하다.", who: "피터 드러커" },
  { title: "행복은 자신감에서 시작된다.", who: "조지 에디슨" },
  { title: "도전은 성장을 만든다.", who: "헨리 데이비드 소로" },
  { title: "현재를 사랑하라.", who: "루이스 캐럴" },
  { title: "열정은 멈추지 않는 불꽃이다.", who: "윈스턴 처칠" },
  { title: "포기하지 말고 끝까지 가라.", who: "존 레논" },
  { title: "행복은 작은 것에서 온다.", who: "로알드 달" },
  { title: "미래를 꿈꾸는 사람이 세상을 바꾼다.", who: "엘리너 루즈벨트" },
  { title: "끈기는 모든 것을 이긴다.", who: "벤자민 프랭클린" },
  { title: "미래는 오늘 시작된다.", who: "교황 요한 바오로 2세" },
  { title: "작은 친절이 세상을 바꾼다.", who: "에이브라함 링컨" },
  { title: "기회는 행동하는 자의 것이다.", who: "헨리 포드" },
];

// /request 호출 횟수를 저장할 전역 변수
let requestCount = 0;

// 요청 로깅 미들웨어
app.use((req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url} ${requestCount}`);
  next(); // 다음 미들웨어나 라우트로 전달
});

// 1. 정적 파일 서빙 (public 폴더)
app.use(express.static(path.join(__dirname, "public")));

// 2. 루트 요청 시 index.html 전달
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.get("/request", (req, res) => {
  // 무작위 명언

  requestCount += 1;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const picked = quotes[randomIndex] || { title: "명언이 없어요", who: "???" };
  
  // 화자는 '햄스터'로 변경
  const finalWho = "햄스터";

  // DIV 기반 말풍선
  const bubbleHTML = `
<div style="
  position: relative;
  max-width: 300px;
  background: #fffceb;
  border: 4px solid #333;
  padding: 15px;
  border-radius: 20px;
  margin: 0;
">
  <!-- 명언 텍스트 -->
  <div style="
    font-family: 'Comic Sans MS', cursive;
    font-size: 15px;
    color: #000;
    margin-bottom: 10px;
  ">
    ${picked.title}
  </div>

  <!-- 발언자(오른쪽 정렬) -->
  <div style="
    font-family: 'Comic Sans MS', cursive;
    font-size: 13px;
    color: #555;
    text-align: right; /* 여기서 오른쪽 정렬 */
  ">
    - ${finalWho}
  </div>

  <!-- 말풍선 꼬리(검은색 삼각형) -->
  <div style="
    position: absolute;
    bottom: -24px; 
    left: 44px;
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 24px solid #333;
    z-index: 1;
  "></div>

  <!-- 말풍선 꼬리(배경색 삼각형) -->
  <div style="
    position: absolute;
    bottom: -16px;
    left: 48px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid #fffceb;
    z-index: 2;
  "></div>
</div>
`.trim();

  // HTML 문자열 응답
  res.send(bubbleHTML);
});


// 서버 구동
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
