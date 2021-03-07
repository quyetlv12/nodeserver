const express = require('express')
const app = express();
const path = require('path');
const mongodb = require('./config/db');
const Products = require('./model/Products');
const newController = require('./controller/NewController');
const route = require('./routes');

var handlebars  = require('express-handlebars');
app.use(express.static(path.join(__dirname,'/public')))

app.engine('hbs', handlebars({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'));
mongodb.connect();
 


 route(app);
app.get('/', function (req, res,next) {
  // Products.find({}, function (err, products) {
  //   if(err){
  //     res.status(400).json()
  //   }
  //   else{
  //     res.json(products)
  //   }
  // });


  Products.find({})
            .then(products => {
              products = products.map(products => products.toObject())
              res.render('home',{products})
            }
            )
            .catch(next)
  // res.render('home')
})
// app.get('/news', function (req, res) {
//   res.render('news')
// })
 
app.listen(3000,()=>{
  console.log("kết nối thành công đến localhost");
})