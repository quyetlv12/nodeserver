const mongodb = require('../config/db');
const products_phone = require('../model/Products');
mongodb.connect();
class SiteController{
    index(req,res){
        res.render('seach',{products_phone});
    }
}
module.exports = new SiteController;