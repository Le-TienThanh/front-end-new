class SiteController {
    // [GET] / news
    home(req, res) {
        res.render('home');
    }
    search(req, res){
        res.render('search')
    }
}

export default new SiteController;
