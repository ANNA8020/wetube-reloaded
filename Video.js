import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim: true }],
    mata: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    },
    // 내꺼 video 형식을 작성할거야
});

const Video = mongoose.model("Video", videoSchema);

export default Video;