import Course from '../models/Course.js';
import multipleMongooseToObject from '../../util/mongoose.js';
import util from '../../util/mongoose.js';

class SiteController {
    // [GET] / news
    home(req, res, next) {
        Course.find({})

            .then((courses) => {
                res.render('home', {
                    courses: util.multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
