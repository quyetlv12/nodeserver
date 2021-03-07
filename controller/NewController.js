class NewController{
    index(req,res){
        res.render('news')
    }
    show(req,res){
        res.send("that is detail products")
    }
}
module.exports = new NewController;