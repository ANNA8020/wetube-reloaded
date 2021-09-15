import express from "express";
// export default 썼을 떄
// express 하면 node.js는 이게 file이 아니라 package
// node_modules이 알아봄
import {edit, remove, logout, see} from "../controllers/userController";
// export 썼을 때
// .. ↶outside (파일에서 벗어나는 걸 의미)
// ./ ↶ 지금의 장소

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;