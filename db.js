import mongoose from "mongoose";
// import 해줌으로 mongo에 연결됨

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose는 wetube라는 mongodb database로 연결해줄거야

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error)
db.on("error", handleError);
db.once("open", handleOpen)
// on / onece 차이점
// on는 click event처럼 여러번 발생
// once는 한번만 발생
