import html from "./public/images/html.svg";
import js from "./public/images/js.svg";
import css from "./public/images/css.svg";
import react from "./public/images/react.svg";
import next from "./public/images/next.svg";
import redux from "./public/images/redux.svg";
import github from "./public/images/github.svg";
import git from "./public/images/git.svg";
import docker from "./public/images/docker.svg";
import ts from "./public/images/ts.svg";
import mysql from "./public/images/mysql.svg";
import vscode from "./public/images/vscode.svg";
import aws from "./public/images/aws.svg";
import expressjs from "./public/images/expressjs.png";
import chatting from "./public/images/thumb/chatting.png";
import chatting2 from "./public/images/thumb/chatting2.png";
import dohye from "./public/images/thumb/dohye.png";
import dohye2 from "./public/images/thumb/dohye2.png";
import dohye3 from "./public/images/thumb/dohye3.png";
import dohye4 from "./public/images/thumb/dohye4.png";
import lunchtimeSwagger from "./public/images/thumb/lunchtime-swagger.png";
import lunchtimeSwagger2 from "./public/images/thumb/lunchtime-swagger2.png";
import lunchtimeSwagger3 from "./public/images/thumb/lunchtime-swagger3.png";
import lunchtimeSwagger4 from "./public/images/thumb/lunchtime-swagger4.png";
import tftstory from "./public/images/thumb/tftstory.png";
import tftstory2 from "./public/images/thumb/tftstory(2).png";
import tftstory3 from "./public/images/thumb/tftstory(3).png";
import tftstory4 from "./public/images/thumb/tftstory(4).png";
import workingtime from "./public/images/thumb/workingtime.png";
import vocatest from "./public/images/thumb/vocatest.png";
import vocatest2 from "./public/images/thumb/vocatest2.png";
import vocatest3 from "./public/images/thumb/vocatest3.png";
import fifa1 from "./public/images/thumb/fifa1.png";
import fifa2 from "./public/images/thumb/fifa2.png";
import fifa3 from "./public/images/thumb/fifa3.png";
import instar from "./public/images/instar.svg";
import mail from "./public/images/mail.svg";
import phone from "./public/images/phone.svg";
import tistory from "./public/images/tistory-logo-fill.svg";
import firebase from "./public/images/firebase.svg";
import gcp from "./public/images/gcp.svg";

export const navProfile = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export const front = [
  {
    image: js,
    name: "Javascript",
    projects: ["Vocatest", "도혜 건설", "Lunch Time", "Chatting App"],
  },
  { image: ts, name: "Typescript", projects: ["TFT story", "Working TIme"] },
  { image: css, name: "CSS", projects: ["모두 사용"] },
  { image: html, name: "HTML", projects: ["모두 사용"] },
  { image: react, name: "REACT", projects: ["Vocatest", "도혜 건설"] },
  {
    image: next,
    name: "NEXT",
    projects: ["TFT story", "Working TIme", "Chatting App"],
  },
  {
    image: redux,
    name: "Redux",
    projects: ["TFT story", "Chatting App", "Working Time"],
  },
];

export const back = [
  {
    image: mysql,
    name: "Mysql",
    projects: ["TFT story", "Lunch Time", "Vocatest"],
  },
  {
    image: expressjs,
    name: "Express.js",
    projects: ["Lunch Time", "VocaTest", "TFT story"],
  },
  { image: firebase, name: "Firebase", projects: ["Chatting App"] },
];

export const rest = [
  { image: git, name: "Git", projects: ["모두 사용"] },
  { image: github, name: "Github", projects: ["모두 사용"] },
  { image: docker, name: "Docker", projects: ["Lunch Time"] },
  { image: vscode, name: "VScode", projects: ["모두 사용"] },
  {
    image: aws,
    name: "AWS",
    projects: ["TFT Story", "vocatest", "Lunch Time"],
  },
  { image: gcp, name: "GCP", projects: ["도혜 건설"] },
];

export const projects = [
  { name: "피파온라인 선능 선수 분석", time: "22.08 - 진행중", image: fifa2 },
  { name: "TFT story", time: "22.01 - 22.02", image: tftstory },
  { name: "Lunch Time", time: "22.01 - 22.03", image: lunchtimeSwagger },
  { name: "Voca Test", time: "21.11 - 21.11", image: vocatest },
  { name: "Chatting App", time: "21.06 - 21.07", image: chatting },
  { name: "Working Time", time: "21.12 - 21.12", image: workingtime },
  { name: "(주)도혜 건설", time: "20.12 - 21.02", image: dohye },
];

export const projectAll = [
  {
    url: ["https://github.com/jaehunkim0828/fifa-frontend"],
    name: "피파온라인 선수 성능 분석",
    image: [fifa3, fifa2, fifa1],
    parts: [
      {
        name: "요약 🖍",
        content: [
          `피파온라인4 게임에서 선수들마다 능력치는 비슷하지만 가격은 천차만별입니다. 개인 선수마다 키차이, 특수 능력, 체감때문에 선수의 가격의 차이가 발생합니다. 대중들이 사용했을때 좋다고 했던 선수들은 과연 데이터 상에서도 충분히 값어치를 하고싶은지 알고싶어서 프로젝트를 시작하게 되었습니다.`,
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["22.08 - 진행중"],
      },
      {
        name: "메인 기능 🗝",
        content: ["선수검색", "개인 선수 능력분석", "선수 선능 비교분석"],
      },
      {
        name: "사용한 기술들 🛠",
        content: [
          "mysql",
          "express",
          "aws",
          "Next.js",
          "typescript",
          "sequelize",
          "ajax",
          "redux",
          "scss",
        ],
      },
      {
        name: "인원 🙃",
        content: ["1명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          `이번 프로젝트를 시작하면서 이전에 못하고 잘 몰라서 넘어 갔거나 미루다 보니 안하게 된 리팩토링을 개발 중간 중간에 진행하면서 프로젝트를 진행했습니다.`,
          `typescript로 개발을 많이 진행해봤지만 정작 '내가 정적 타이핑 언어를 잘 이용하고 있는게 맞나?' 싶은정도로 빠르게 개발하고 싶은 마음에 타입을 any, 반복되는 타입들을 정의해주지 않고 프로젝트를 진행했습니다. 하지만 이번만큼은 type 파일을 나누어서 component별로 타입을 따로 정리해두고 반보되는 type들은 재사용을해서 데이터낭비를 최소화하려고 노력했습니다.`,
          `또한 폴더 정리에 대해 많이 생각해봤고 다음과 같이 정리하게 되었습니다(github링크 참조). 하지만 각 component별로 api를 작성하다보니 같은 요청을 중복으로 작성하게 되었습니다. 제 생각으로는 각각의 component별로 어떤 api가 사용되는지 직관적으로 알게 하고싶어서 중복되어도 작성하면서 개발을 진행하였습니다.`,
          `피파 온라인게임을 즐겨 하면서 문득 생각이 들었습니다. 유명 방송인들이 추천해 주는 선수들이 과연 데이터로 분석한 지표로도 성능이 좋을까? 2. 선수별(시즌별) 데이터를 비교해서 등급을 매긴다면, 현재 시장에 올라온 가격에 값어치를 하는 것일까? 오히려 가성비가 좋을까? 에 대해 궁금해졌습니다.`,
          `그래서 피파온라인 4 open API를 찾아보다가 랭크 정보에서 "TOP 10,000 랭커 유저가 사용한 선수의 20경기"를 발견하게 되었고, 선수(시즌) 별로 랭커들이 사용한 데이터를 추출해서 위에 세워놓은 가설들을 증명해 보려고 했습니다`,
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          `예전에 빠르게 개발을 진행했을때는 오랜만에 다시 개발을 진행하였을때 코드 해석하는데 오랜시간이 걸렸습니다. 하지만 리팩토링을 통해 에러를 고치거나 새로 개발을 진행하려했을때 수월하게 개발을 진행할 수 있었고 리팩토링의 중요성을 알게되었습니다`,
        ],
      },
    ],
  },
  {
    url: ["https://github.com/jaehunkim0828/TFT-story", "http://tftstory.com"],
    name: "TFT story",
    image: [tftstory, tftstory2, tftstory3, tftstory4],
    parts: [
      {
        name: "요약 🖍",
        content: [
          "처음으로 Next.js를 이용해서 개발하게 되었습니다. Next.js사용한이유는 요즘 뜨는 프레임워크이고 page 관리면에서 React와 다르게 따로 라이브러리를 사용하지않고 자체적으로 라우팅 해주는 방식이 흥미로워서 개발하게 되었습니다. css media 쿼리도 사용하면서 웹사이트를 반응형으로 제작하게 되었습니다.",
          "TFT story 웹사이트는 롤토체스 게임에서 사용되는 덱을 만들고 공유하는 웹사이트 입니다. 다른 롤토체스 웹사이트를 사용하면서 없어서 불편했던 기능을 만들어보고 싶었고 유저수를 늘려서 커뮤니티 웹사이트를 만들어 보고싶어서 제작하게 되었습니다. ",
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["22.01 - 22.02"],
      },
      {
        name: "메인 기능 🗝",
        content: ["메인 페이지", "덱 리스트", "덱 만들기", "덱 정보"],
      },
      {
        name: "사용한 기술들 🛠",
        content: [
          "Next.js",
          "Typescript",
          "React.js",
          "scss",
          "express.js",
          "Mysql",
        ],
      },
      {
        name: "인원 🙃",
        content: ["1명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          `개인 개발이기때문에 front-end, back-end 그리고 디자인까지 모두 고려하면서 개발을 했습니다. 개발을 시작하기전에 와이어 프레임을 노트에 그려놓고 db도 erd 클라우드를 사용해서 제작해 놓고 개발을 시작했지만 처음에 생각 하지 못한 로직들 때문에 실시간으로 디자인을 고치면서 프론트를 만들었고 백엔드에 대해 자세하게 공부하지않아서 sql 쿼리를 만드는데 오랜시간이 걸렸습니다.`,
          `개발을 하면서 기억에 남는 기능들이 있습니다.`,
          `첫번째로, 덱을 만들기를 할때, 최종덱 만드는 과정에서 챔피언과 아이템을 옮겨서 최종덱에 올려놓기위해 Drag and Drop을 사용했습니다. React library를 이용하고 챔피언과 아이템의 image와 이름을 redux 상태 관리툴을 이용해서 drag, drop 할때 데이터를 전달해 주게 만들었습니다.`,
          `두번째로는, 개발을 어느정도 마쳤을때 제 웹사이트를 실제로 사용해보면서 불편한점이 있었는데 완성아이템이 어떤 조합 아이템으로 만들어졌는지 헷갈리때가 있었습니다. 그래서 완성 아이템 위에 커서를 올려놓으면 modal창이 뜨면서 어떤 조합 아이템으로 만들어지는지 확인 할수 있게 해주었습니다.`,
          `마지막으로는, 롤토체스에서는 시너지가 존재합니다. 같은 시너지를 내는 챔피언이 특정 인원 이상 있을경우 추가적인 효과가 붙습니다. 그래서 시너지 별로 챔피언 인원수에 맞는 색깔을 부여해주는 기능을 만들었습니다.`,
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          `next.js를 처음 사용하면서 React와 다른점들을 알게 되었습니다`,
          `Next js는 React라이브러리의 프레임워크로 React의 SSR(server side rendering)을 쉽게 구현할 수 있게 도와주는 프레임워크입니다. 그전에 React는 SPA(Single Page Application)이고 Client Side Rendering 방식입니다. 그러므로 최소 한번의 로딩으로 전체 파일을 받고, 받은 데이터를 변경해서 사용하기 때문에 처음에 로딩하는데 시간이 오래걸린다는 단점이 있습니다. 또한 파일 하나를 다운 받는 시간도 오래걸려 검색엔진에도 후순위로 밀려나게 됩니다. 하지만 Nextjs는 SSR(server side rendering)방식으로 server 측에서 화면을 그려서 보내주는 방식으로 HTML 안에 이미 컨테츠가 포함되어 있는상태여서, 크롤러 봇들이 데이터를 수집하기 쉬워서 검색 엔지를 최적화할 수 있습니다. `,
        ],
      },
    ],
  },
  {
    url: ["https://github.com/jaehunkim0828/lunch-time-backend"],
    name: "Lunch Time",
    image: [
      lunchtimeSwagger,
      lunchtimeSwagger2,
      lunchtimeSwagger3,
      lunchtimeSwagger4,
    ],
    parts: [
      {
        name: "요약 🖍",
        content: [
          `lunch-time에서 저는 backend을 담당해서 개발을 하게 되었습니다. mvc 패턴을 이용해서 구조를 짰고 swagger을 이용해서 만든 api들을 정리해서 올려 놓고 공유했습니다.`,
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["22.01 - 22.03"],
      },
      {
        name: "메인 기능 🗝",
        content: [
          "내 위치 1km 반경 안에있는 음식점 카테고리 받기",
          "내 위치 1kim 반경 안에 있는 음식점에서 카테고리 음식들을 제외한 음식점 보내주기",
        ],
      },
      {
        name: "사용한 기술들 🛠",
        content: ["mysql", "express", "aws", "kakao api"],
      },
      {
        name: "인원 🙃",
        content: ["3명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          `남들과 같이하는 팀단위에 프로젝트에서 백엔드를 담당해서 서버를 만들고 데이터베이스에 연결해보면서, 모르는 문제가 생겼을때, 저는 어느정도 기간을 요청하고 그 기간안에 완성해서 컨펌 받으며 개발을 진행하였습니다.`,
          `aws에서 Ec2 서버를 만들기 전에 MySQLWortbench에서 localhost에 db을 만들고 kakao api를 이용해서 서울 전역을 1km안에 음식점들의 데이터를 loop문을 이용해서 받으려고 했으나 kakao api에서 한번에 줄 수 있는 데이터가 한정되어있어서 500m씩 데이터를 받았고, 받은 데이터를 가공해서 저장했습니다. 그리고 aws ec2서버를 만들고 local에서 만든 db를 aws ec2서버에 마이그레이션 시켜줬습니다.`,
          `마지막으로 만들어진 api들을 swagger에 정리해서 같은 서버 다른 포트에 정리해서 올려 놓았습니다.`,
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          `로그인 api를 만들면서 로그인 과정에서 token을 받고, 받은 token을 cookie 또는 localstorage에 저장해 놓는 것은 알고 있었지만, 서버에 어떤 회원의 token을 보내주더라도 받은 그 token이 현재 받으려고 하는 회원정보에 접근할 수 있는지 유효섬 검사 해줘야 한다는것을 알게되었습니다. `,
        ],
      },
    ],
  },
  {
    url: [
      "https://github.com/jaehunkim0828/voca-test-aws",
      "https://dailyvocatest.tk/",
    ],
    name: "Voca Test",
    image: [vocatest, vocatest2, vocatest3],
    parts: [
      {
        name: "요약 🖍",
        content: [
          `A - Z까지 처음으로 개발해서 서비스를 완성한 프로젝트 입니다. front-end는 React.js로 서비스를 만들었고 backend로는 mysql, express를 이용해서 만들었습니다.`,
          `만들게 된 계기는 영어 단어를 외우면서 반복되는 일들을 줄여주기위해 만들게 되었습니다. 시험지를 만들지 않고 단어를 가리고 시험을 보게 되면 위치로 어렴풋이 생각이 나서 랜덤으로 섞어주는 단어장을 만들어야겠다고 생각했습니다.`,
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["21.11 - 21.11"],
      },
      {
        name: "메인 기능 🗝",
        content: [
          "단어장 생성하기",
          "간단한 로그인기능",
          "단어 생성하기",
          "시험보기",
          "테스트 결과 확인하기",
        ],
      },
      {
        name: "사용한 기술들 🛠",
        content: ["React", "express", "mysql", "aws", "https"],
      },
      {
        name: "인원 🙃",
        content: ["1명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          `처음에는 db를 연결할 생각없이 front만 만들어서 일회성 단어테스트장을 만들계획이였습니다. 하지만 브라우저를 닫으면 다시 반복적으로 단어를 적어야하는 일이 생기게 되어서 backend까지 구현하게 되었습니다.`,
          `단어를 만드는 과정에서 한글과 영어를 적고 기록하기 버튼을 누르게 되면 단어장에 단어는 추가 되지만 input의 위차가 초기화가 되어서 다시 처음 위치로 돌아가는게 아닌 마지막에 영어단어를 입력한 2번째 input를 가리키고 있어서 단어를 빠르게 만드는데 시간이 지연되었습니다. 그래서 react hook인 useRef를 사용해서 기록하기 버튼을 눌렀을때 input의 위치를 1번째 input을 가르키게 변경해서 빠르게 단어를 넣을 수 있도록 했습니다.`,
          `http에서 https로 보안을 강화했습니다. 나만의 단어장에 들어가려면 비밀번호가 필요합니다. 하지만 데이터를 주고 받는과정에서 http통신으로 하게되면 해킹당할 위험이 있어서 letsencrpt를 이용해서 인증서를 발급받고 443포트를 열어줘서 80번 port에서 들어오면 nginx proxy_pass를 이용해서 443포트로 리다이렉트 시켜줬습니다.`,
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          "vocatest 프로젝트를 하면서 http와 https 차이점에 대해서 알게 되었습니다. http는 암호화가 되지 않은 평문 데이터를 정송하게 됩니다. 제 3자가 통신하는 과정을 보게 된다면 비밀번호와 유저 정보가 노출될 위험이 있습니다. 그래서 https는 대칭키와 비대칭키를 사용해서 데이터를 암호화시켜서 보안성을 높입니다. 첫번째로 클라이언트서버에서 특정 서버로 요청을 보내면 서버에서 저희에게 공개키를 보냅니다. 클라이언트는 받은 공개키를 브라우저에 내장되어있는 ca를 이용해서 공개키가 정품인지 확인을 하고 정품인증이 되면 클라이언트 세션키를 공개키로 암호화 시켜서 서버에게 전송해줍니다. 그럼 서버에서 개인키를 이용해서 세션키 얻게 되고 대칭키로 서로 암호화된 데이터를 주고받을 수 있게 합니다.",
        ],
      },
    ],
  },
  {
    url: ["https://github.com/jaehunkim0828/nextron-chatting"],
    name: "Chatting App",
    image: [chatting, chatting2],
    parts: [
      {
        name: "요약 🖍",
        content: [
          `next 와 electron을 같이 공부하기 위해서 nextron을 이용해서 개발을 했습니다. `,
          `firebase를 이용해서 실시간 1대1 채팅을 만들고 친구들을 초대해서 1대n 채팅방도 구현했습니다. 그리고 firebase auth를 이용해서 자체 회원가입이 가능하게 만들었습니다.`,
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["21.06 - 21.07"],
      },
      {
        name: "메인 기능 🗝",
        content: ["1대1 대화방 채팅", "1대n 대화방 채팅", "회원가입/로그인"],
      },
      {
        name: "사용한 기술들 🛠",
        content: [
          "nextron(next.js, electron)",
          "firebase",
          "typescript",
          "redux",
        ],
      },
      {
        name: "인원 🙃",
        content: ["1명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          `firebase에서 snapshot을 사용하기 위해서 v9 버전으로 제작했습니다. 처음에는 v8으로 제작했지만 실시간 업데이트 통신에 대해서는 v8에서는 개발이 힘들어서 v9 버전으로 다시 연결하고 querysnapshot을 사용해 주었습니다.`,
          `1대n 그룹방을 어느 위치에 만들지 고민을했었습니다. 채팅을 하다가 나가서 나가서 그룹채팅을 만드는 구조가 아닌 채팅중에도 쉽게 그룹방을 만들 수 있게 채팅창 오른쪽 위에 +버튼을 만들어 놓고 custon modal을 구현해서 쉽게 그룹방을 만들 수 있게했습니다.`,
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          "React와 다르게 Next에서는 라이브러리 설치 없이 next 자체적으로 useRouter을 이용해서 routing을 할 수 있습니다.",
          "nextron을 배포하는 과정에서 map 버전을 배포하기 위해서 맥 인증키를 발급 받아야 한다는 것을 알게 되었습니다. 맥의 경우에는 사인키로 빌드해야 정상적으로 동작합니다. Developer ID Application을 생성하고 다운로드하고 키체인에 등록하면 사인키가 정상적으로 작동하게 됩니다.",
        ],
      },
    ],
  },
  {
    url: ["https://github.com/jaehunkim0828/check-workingtime"],
    name: "Working Time",
    image: [workingtime],
    parts: [
      {
        name: "요약 🖍",
        content: [
          "개발 인스타그램을 시작하면서 게시글에 내가 어떤 개발을 했고 하루동안 어느정도를 개발하는 데 시간을 사용했는지 체크하고 싶어서 만들게 되었습니다.",
          "시간 관리앱이 필요하다고 생각해서 nextron으로 개발했습니다.",
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["21.12 - 21.12"],
      },
      {
        name: "메인 기능 🗝",
        content: ["시간 체크", "Total 시간", "오늘 한일", "내일 할일"],
      },
      {
        name: "사용한 기술들 🛠",
        content: ["nextron", "redux", "typescript"],
      },
      {
        name: "인원 🙃",
        content: ["1명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          "오늘 한일의 리스트 시간들이 start 버튼과 stop버튼을 눌렀을때 update가 안되는 이슈가 있었습니다. state와 props 이용할 수 있지만 total시간도 update해줘야할 부분이러곳 있어서 redux를 이용해서 store을 만들어 줘서 상태관리를 쉽게 만들어줬습니다.",
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          "setInterval을 이용해서 1초에 한번씩 count가 1씩 증가하게 만들려고 했지만 useState가 1초마다 update 안되는 이슈가 있었습니다. useState는 비동기 함수입니다. 결국 setState(count + 1)하게되면 다음에 count는 업데이트된 값을 받을 수 없습니다. 그래서 setState하는 과정에서 동기적으로 사용할수 있는 함수형 업데이트가 있습니다. setState안에 익명함수의 첫번째 파라미터는 업데이트된 count의 값을 가르키게 됩니다. 그러므로 함수형 업데이트를 이용해서 1초마다 동기적으로 setState를 해줄 수 있습니다.",
        ],
      },
    ],
  },
  {
    url: ["https://github.com/jaehunkim0828/dohye-constrution"],
    name: "(주)도혜 건설",
    image: [dohye2, dohye3, dohye4],
    parts: [
      {
        name: "요약 🖍",
        content: [
          "React를 이용해서 처음으로 개발한 프로젝트입니다. naver map api와 slide image, drop down... library를 이용해서 웹사이트를 만들어 보았습니다.",
        ],
      },
      {
        name: "개발 기간 ⏰",
        content: ["20.12 - 21.02"],
      },
      {
        name: "메인 기능 🗝",
        content: ["회사 소개", "시공현장", "회사 위치"],
      },
      {
        name: "사용한 기술들 🛠",
        content: ["react", "nginx", "gcp"],
      },
      {
        name: "인원 🙃",
        content: ["2명"],
      },
      {
        name: "개발 내용 🧑‍💻",
        content: [
          "개발자 친구와 같이 github을 이용해서 협업해서 만들게 되었습니다. github main branch에서 서로 수정될때마다 업데이트 해주면서 merge해주었습니다.",
          "웹사이트를 반응형으로 만들기위해 media query를 사용해었습니다.",
          "naver map api를 이용해서 api_key를 받고 env파일에 key를 저장해 두고 map을 사용했습니다. github에 push할때는 .gitignore을 이용해서 env파일은 따로 저장해두고 gcp에서 인스턴스으로 서버를 열고 nginx를 이용해서 80번 포트를 열어서 react build파일을 nginx위에 올려서 만들었습니다.",
          "robots.txt와 sitemap을 이용해서 만든 웹사이트들을 naver, google, 다음에 노출시켜주었습니다.",
        ],
      },
      {
        name: "알게된 점 📖",
        content: [
          "gcp는 계정당 300크리딧을 무료로 제공해줘서 300달러까지는 무료로 사용하고 그이후부터 요금이 부여됩니다.",
        ],
      },
    ],
  },
];

export const contacts = [
  {
    image: instar,
    name: "인스타그램",
    path: "https://www.instagram.com/dev.jaehun/",
  },
  { image: github, name: "깃허브", path: "https://github.com/jaehunkim0828" },
  { image: tistory, name: "티스토리", path: "https://hun-dev.tistory.com/" },
  { image: mail, name: "jhunkim0828@gmail.com" },
  { image: phone, name: "010-3123-1308" },
];
