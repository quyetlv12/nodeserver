const newRouter  = require('./news');
const seachRouter = require('./seach');
function route(app) {
    // app.get('/news', (req,res,next)=>{
    //     res.json("show hello");
    // })
    
    app.use('/news',newRouter);
    app.use('/seach',seachRouter);
    
}
module.exports = route;