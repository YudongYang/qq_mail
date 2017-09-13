/* 13:40 Begin ，一个小时写不完今晚就做 100 个仰卧起坐 */

var express = require('express')
var  bodyParser = require("body-parser")
var app = express()

// 请求体处理  
app.use(bodyParser.urlencoded({  extended:  false  }));

app.post('/checkLogin', function(req, res) {
    var data = {}
    var username = req.body.username
    var password = req.body.password
    console.log(username + ' : 进行登陆认证 -- 密码为 ： ' + password + ' （假装已经加密） ')
    // 假装去数据库认证
    if (username === 'Don' && password === 'md5(123)') {
        data.status = 200
        data.msg = 'Login Success'
        res.end(JSON.stringify(data))
        console.log('认证成功')
    } else {
        data.status = 403
        data.msg = 'Login Fail'
        res.end(JSON.stringify(data))
        console.log('认证失败')
    }
})

var server = app.listen(8080, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

/* 14:10 End ，那就做 200 个吧 */