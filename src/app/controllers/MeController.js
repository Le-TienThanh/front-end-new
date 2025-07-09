import Course from '../models/Course.js';
import multipleMongooseToObject from '../../util/mongoose.js';
import util from '../../util/mongoose.js';

class MeController {
    // [GET] / news
    storedCourses(req, res, next) {
        Course.find({}).then((courses) => {
            res.render('./me/stored-courses', {
                courses: util.multipleMongooseToObject(courses),
            });
        });
    }
}

export default new MeController();
