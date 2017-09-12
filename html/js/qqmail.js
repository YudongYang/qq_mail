/* 较为复杂的 js */
/* 生成 0 - ranger 的随机数 */
function randomNumber (ranger) {
	return Math.floor(Math.random() * ranger);
}
function randomLoginPicture () {
	var loginPictureArray = [
	'<div class="login_pictures_picture" style="background-image:url(img/tg-bird1fbc69.png);background-position:56px 60px;"></div>' + 
	'<div class="login_pictures_txt">' + 
	'<p class="login_pictures_title">QQ邮箱，常联系！</p>' + 
	'<p>没有什么能够阻挡</p><p>你对自由的向往</p><p>天马行空的生涯</p><p>你的心了无牵挂</p><p class="login_pictures_info">摘自《蓝莲花》</p>' + 
	'<p class="login_pictures_info" style="margin:-5px 0 0 0;">' + 
	'<a class="gray" href="http://y.qq.com/#type=singer&amp;mid=00235pCx2tYjlq" target="_blank">听更多许巍音乐</a></p></div>'
	,
	'<div class="login_pictures_picture" style="background-image:url(img/tg-silence1e9c5d.jpg);background-position:right 40px;"></div>' + 
	'<div class="login_pictures_txt">' + 
	'<p class="login_pictures_title">QQ邮箱，常联系！</p>' + 
	'<p>到头来，</p><p>我们记住的，</p><p>不是敌人的攻击，</p><p>而是朋友的沉默。</p><p>——马丁·路德·金</p><p class="login_pictures_info">插画来自丑丑(两岁)</p></div>'
	,
	'<div class="login_pictures_picture" style="background-image:url(img/tg-smile1e9c5d.jpg);background-position:234px 130px;"></div>' + 
	'<div class="login_pictures_txt">' + 
	'<p class="login_pictures_title">QQ邮箱，常联系！</p>' + 
	'<p>1982年，第一张电脑笑脸诞生</p><p>今天，人们已经习惯用它来表达心情</p><p>现在，您也可以在邮件里</p><p>用:-)来传达一个微笑的表情</p>' + 
	'<p class="login_pictures_info"><a href="https://mail.qq.com/cgi-bin/readtemplate?check=false&amp;t=about_symbolization" target="_blank">了解更多表情符号</a></p></div>'
	,
	'<div class="login_pictures_picture" style="background-image:url(img/tg-chang1ea8a2.png);background-position:right 0;"></div> ' + 
	'<div class="login_pictures_txt">' + 
	'<p class="login_pictures_title">QQ邮箱，常联系！</p><p>2500年前，人们飞鸽传书</p><p>181年前，莫尔斯发明了电报</p><p>48年前，第一封电子邮件发出</p><p>今天，QQ邮箱联系你、我、他</p></div>'
	,
	'<div class="login_pictures_picture" style="background-image:url(img/tg-mj1e9c5d.jpg);background-position:right 20px;"></div>'
	,
	'<div class="login_pictures_picture" style="background-image:url(img/tg-mail20f1b0.gif);background-position:right 100px;"></div>' + 
	'<div class="login_pictures_txt">' + 
	'<p class="login_pictures_title">QQ邮箱，常联系！</p><p>1987年9月14日21时07分</p><p>中国第一封电子邮件</p><p>从北京发往德国</p><p>“越过长城，走向世界”</p></div>'
	];
	var loginHtml = loginPictureArray[randomNumber(loginPictureArray.length)];
	return loginHtml;
}