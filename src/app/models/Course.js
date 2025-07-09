import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Course', Course);
