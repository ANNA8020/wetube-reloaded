import express from "express";
// express는 request object에 parameter를 보내줘
import {
watch, 
getUpload,
getEdit,
postEdit,
postUpload, 
} from "../controllers/videoController";
// request object: request에 대한 정보를 담고 있음.

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

// 정규직: 문자열로부터 특정 정보를 추츨해내는 방법
// 모든 프로그램 언어에 존재⤴
// (\\d+)를 해줌으로써 /upload 코드를 아무데나 배치 가능
// (//d+)를 :id 옆에 둔 이유: 이름을 붙이기 위해서
// 이름을 붙이는 이유: req.params.id를 불러와야 해서
// 정규칙 + 이름
// regexpal.com (/d+) (ANNA/w+) 
// expressjs.com/en/guide/routing.html

//upload를 id 보다 위에 둔 이유
// express는 upload가 id라고 인식하기 때문

// : ↶파라미터(parameter)
// 이름을 굳이 id라고 안 해도 됌
// nomadcoders.co/wetube/lectures/숫자
// ↪ 숫자 = 변수
// 파라미터 ✕ → 모든 영상마다 Router를 새로 만들어야 함.
// 매번 Router을 만들 수 ✕ → 파라미터는 URL 안에 변수를 넣는걸 허용함.
// : 표시하는 이유: expres한테 이게 변수라는 걸 알려주기 위해서임.

export default videoRouter;
