
import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    // app.post('/search', (req, res) => {
    //     // console.log(req.body);
    //     // console.log(req.body.q);
    //     // console.log(req.body.gender);
    //     res.render('search');
    // });
}

export default route;
