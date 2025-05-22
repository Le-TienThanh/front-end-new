class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news');
    }
}

export default new NewsController;
