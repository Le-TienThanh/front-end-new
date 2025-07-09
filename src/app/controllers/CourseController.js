import Course from '../models/Course.js';
import mongooseToObject from '../../util/mongoose.js';
import util from '../../util/mongoose.js';

class CourseController {
    // [GET] / news

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('./courses/show', {
                    course: util.mongooseToObject(course),
                });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('./courses/create');
    }
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((error) => {});
        
    }
}

export default new CourseController();
