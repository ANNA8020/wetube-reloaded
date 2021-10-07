import Video from "../models/Video";

export const home = async (req, res) => {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
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
    if(!video){
    // video not found
        return res.render("404", { pageTitle: "Video not found." });
    }
    return res.render("watch", { pageTitle: video.title, video });
    };
// 하나의 비디오만 볼 수 있게 수정
// 비디오 upload
// video = video:video
// ↪ video object를 만든거야﹗

export const getEdit =async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    // eidt 템플릿에 video object를 보내야 하기 때문에 exists Ⅹ
    if(!video) {
        return res.render("404", { pageTItle: "Video not found" })
    }
    return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};
// 이 코드는 from을 화면에 보여줌

export const postEdit = async (req,res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({ _id: id });
    // video = database에서 검색한 영상 object
    // exits는 id만 불러오는거야 전에는 video object를 가져왔잖아 하지만 굳이 그렇게 할 필요 Ⅹ
    //  ↪ 영상 존재 확인을 위한 것 
    // exits(): 필더를 필요로 하고 영상의 어떤 속성도 필터 가능
    if(!video) {
        return res.render("404", { pageTItle: "Video not found" })
    }
    await Video.findByIdAndUpdate(id, {
        // Video = 내가 만든 영상 Model
        title,
        description,
        hashtags: Video.formatHashtags(hashtags),
    });
    // 두개의 argument 필요
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
            hashtags: Video.formatHashtags(hashtags),
        });
        return res.redirect("/");
    }   catch (error) {
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
         });
    }
};

export const deleteVideo = async (req, res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
     return res.redirect("/");
   };
  
   export const search = async (req, res) => {
     const { keyword } = req.query;
     let videos = [];
     if (keyword) {
       videos = await Video.find({
         title: {
           $regex: new RegExp(`${keyword}$`, "i"),
         },
       });
     }
     return res.render("search", { pageTitle: "Search", videos });
    
};


// globalController.js이 없는 이유
// usrs / video 에 다 포함 되기 때문

// 파일을 새로 만든 이유
// route 와 controller은 같이 있으면 안 됌.
// route는 controller function을 이용하는 입장이니까