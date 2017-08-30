/**
 * Created by zyj on 2017/8/30.
 */
var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);
/*请求文件*/
var appData = require('./data.json');
/*请求文件的数据*/
var qqlist = appData.data.list;

var apiRoutes = express.Router();
/*qqlist请求的第十，随意起名*/
apiRoutes.get('/qqlist', function (req, res) {
  res.json({
    errno: 0,
    data: qqlist
  });
});


/*页面呈现出的地址*/
app.use('/resapi', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
