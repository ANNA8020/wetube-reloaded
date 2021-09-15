import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    mata: {
        views: Number,
        rating: Number,
    },
    // 내꺼 video 형식을 작성할거야
});

const Video = mongoose.model("Video", videoSchema);

export default Video;