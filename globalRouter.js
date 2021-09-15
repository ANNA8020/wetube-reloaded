import express from "express";
// .js file에 각각 import 해주기.
// 독립되어 있으니까 ⤴
import {join, login} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
// 여러 개를 export 할 떄 object로 묶어서 작성.

const globalRouter = express.Router();
// global router 

globalRouter.get("/", home);
// 쩡이냥 usrs → "/" url 접속
// express가 global router 안에 들어감
// express가 안에서 url 나머지 주소를 찾아.
// / + /
globalRouter.get("/join", join);
globalRouter.get("/login", login);
// URL은 함수의 이름과 꼭 같을 필요는 없음

export default globalRouter;
// *모든 파일은 분리된 모듈 → 무언가를 바깥에 공유 → export 해주기
// 변수만 import 하고 싶다?
// ↪ default export 해주면 ㄲㅡㅌ

// 차이점
// export default: 한가지 변수만 import
//                 변수 이름을 바꿔서 작성 가능
// export: 여러 개의 변수를 import 가능
//         내가 쓴 변수 이름 그대로 쓰기
// ex. const 쩡이 =
// import {쩡이} from . . . O
// import {짱이} from . . . ✕