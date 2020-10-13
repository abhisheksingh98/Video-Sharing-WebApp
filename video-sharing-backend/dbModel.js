import mongoose from 'mongoose'

//Schema defines the data structure we need to use
const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
})

//Collection inside the database
export default mongoose.model('tiktokVideos',tiktokSchema);