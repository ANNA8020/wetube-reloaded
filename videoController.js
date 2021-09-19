import Video from "../models/Video";

/*
console.log("Start");
Video.find({}, error, vidoes) => {
    if(error){
        return res.render("server-error")
    }
    return res.render("home", {pageTitle; "Home", videos});
});
console.log("Finished")
*/
// Video.find({}, (error, videos) => {});
// {} ← mongoose가 database를 불러옴
//  ↪ 반응 → function 실행 → (mongoose가)error, videos 불러옴
// 특정 코드를 마지막에 실행

export const home = async (req, res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
    // database 검색 시작, 종료가 이루어지면 render 시작
};
// HTML retrun 법 
// 1. HTML의 문자열을 써서 하기 2. pug 사용
// 1번은 미친짓임 코드가 길어지고 업데이트 할 때마다 수정해야 하니 pug 사용하기
// render은 두가지 argumnet를 받아
// 1. view name 2. 템블렛에 보낼 변수
export const watch = async (req, res) => {
    const { id } = req.params;
    // router가 주는 express의 기능
    const video = await Video.findById(id);
    return res.render("watch", { pageTitle: video.title, video });
};
// 하나의 비디오만 볼 수 있게 수정
// 비디오 upload
// video = video:video
// ↪ video object를 만든거야﹗
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing` });
};
// 이 코드는 from을 화면에 보여줌
export const postEdit = (req,res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};
// 이 코드는 변경사항을 저장해줌

export const getUpload = (req, res) => {
    return res.render("Upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        return res.redirect("/");
    }   catch (error) {
        return res.render("Upload", { 
            pageTitle: "Upload Video",
            errorMessage: error._message,
         });
    }
};


// globalController.js이 없는 이유
// usrs / video 에 다 포함 되기 때문

// 파일을 새로 만든 이유
// route 와 controller은 같이 있으면 안 됌.
// route는 controller function을 이용하는 입장이니까