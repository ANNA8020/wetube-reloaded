import express from "express";
// npm i (express) 설치하기
// npm i = npm install
// node_modules에서 express 찾기
import morgan from "morgan";
// npm i morgan 설치하기
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
// 1. import  2. export
// 라우터에서 변수를 다른 파일에서 가져옴
// 좋은점
// 변수 이름을 맘대로 설정 가능 (default export 이기 때문)
// nonde.js는 (ex.)globalRouter이라는 변수를 말하는걸 아니깐﹗
// 헷갈리니까 이름은 같게 해주는게 조움


const app = express();
// req, res는 express로부터 받은 것.
const logger = morgan("dev");
// morgan: nodejs 용 request logger middleware.
// logger 함수는 middleware를 return 해줌.


app.set("view engine", "pug");
// 뷰 엔진 pug로 세팅
app.set("views", process.cwd() + "/src/views");
// src 안에 넣고 싶어서 Replace Settings
// src 밖에 view 폴더를 뒤도 됌 
app.use(logger);
app.use(express.urlencoded({ extended: true }));
// res.redirect(): 브라우저가 redirect(자동으로 이동)하도록 하는 것
//  ↪ 쩡이의 form에 body를 이해함
// extended
//  ↪ body에 있는 정보들을 보기 좋게 형식을 갖춰주는 일을 함
// *설치해주기 전에 middleware를 먼저 사용해줘야 함
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

// 1. 코드 작성
//    ↪지저분하게 작성
// 2. 새로 정리
//    ↪ 쩡이처럼 이뿌게 정리﹗
// *창작의 흐름을 끊지 않는게 중요

// 서버 흐름
// url 시작 → router 설정 → router 안에 url 완성 → +router 안에 controller를 import해서 부르기
