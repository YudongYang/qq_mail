/* xlogin js */

// 选项卡部分 begin

var selectedTab = 1

$('#switcher_qlogin').click(function() {
    selectedTab = 1
    selectTab(selectedTab)
})

$('#switcher_plogin').click(function() {
    selectedTab = 2
    selectTab(selectedTab)
})

var selectTab = function(tabIndex) {
    if (tabIndex === 1) {
        $('#qr_login_panel').show()
        $('#switcher_qlogin').attr('class', 'switch_btn_focus')
        $('#web_login_panel').hide()
        $('#switcher_plogin').attr('class', 'switch_btn')
    } else {
        $('#web_login_panel').show()
        $('#switcher_plogin').attr('class', 'switch_btn_focus')
        $('#qr_login_panel').hide()
        $('#switcher_qlogin').attr('class', 'switch_btn')
    }
}

// 选项卡部分 end

// 二维码图片 hover 部分 begin

$('#qr_for_hover').hover(function() {
    $('#qr_img_box').addClass('qr_img_box_slide')
    $('#qr_tips').addClass('qr_tips_show')
})

$('#qr_for_hover').mouseleave(function() {
    console.log('mouseleave')
    $('#qr_img_box').removeClass('qr_img_box_slide')
    $('#qr_tips').removeClass('qr_tips_show')
})

// 二维码图片 hover 部分 end

// 下次自动登陆框 begin

var qrRemember = false

$('#qrCheck').click(function() {
    qrRemember = !qrRemember;
    if (qrRemember) {
        $('#qrCheck').removeClass('uncheck').addClass('check')
    } else {
        $('#qrCheck').removeClass('check').addClass('uncheck')
    }
})

var webRemember = false

$('#webCheck').click(function() {
    webRemember = !webRemember;
    if (webRemember) {
        $('#webCheck').removeClass('uncheck').addClass('check')
    } else {
        $('#webCheck').removeClass('check').addClass('uncheck')
    }
})

// 下次自动登陆框 end

// 两个表单中的输入框 begin

// 将输入框 JS 代码封装起来，说不定以后有机会用呢

var inputBoxJS = function(selector) {

    // input_eara ( sername_eara ) 下面子元素点击事件，提示变色，选中输入框
    $(selector).children().click(function() {
        $(selector).find('.input_tips').removeClass('input_tips').addClass('input_tips_focus')
        $(selector).find('input').focus()
    })

    // input ( username ) 输入框失去焦点事件，如果没有输入文字，提示变回原来颜色
    $(selector).find('input').blur(function() {
        var username = $(selector).find('input').val()
        if (!username) {
            $(selector).find('.input_tips_focus').removeClass('input_tips_focus').addClass('input_tips')
        }
    })

    // input 输入事件监听，需要同时使用 input propertychange 两个才能保证大部分正常浏览器正常监听
    // 如果输入之后有文字，隐藏提示；如果没有文字，显示提示
    $(selector).find('input').bind('input propertychange', function() {
        var username = $(selector).find('input').val()
        if (username) {
            $(selector).find('label').hide()
            $(selector).find('.input_box_del').show()
        } else {
            $(selector).find('label').show()
            $(selector).find('.input_box_del').hide()
        }
    })

    // 后面那个 X 的点击事件，清除 input 中的内容，显示提示，隐藏自身
    $(selector).find('.input_box_del').click(function() {
        $(this).prev().val(null)
        $(selector).find('label').show()
        $(selector).find('.input_box_del').hide()
    })
}

inputBoxJS('#username_eara')
inputBoxJS('#password_eara')
// 两个表单中的输入框 end

var showTips = function(tipsMessage) {
    $('#error_message').text(tipsMessage)
    $('#error_tips').css('display', 'block')
    setTimeout(function() {
        $('#error_message').text('')
        $('#error_tips').css('display', 'none')
    }, 5000)
}

$('#submit').click(function() {
    var username = $('#username_input').val()
    var password = $('#password_input').val()
    console.log(username)
    console.log(password)
    if (!username && !password) {
        alert('原网页没有用户名输入为空的提示，这里 alert 一下')
    } else {
        if (!password) {
            showTips('你还没有输入密码！')
            return
        }
        if (!username) {
            return 
        }
        // 假装密码掩盖了
        password = 'md5(' + password + ')'
        console.log(password)
        $.post('check/login', { 'username': username, 'password': password }, function(data, textStatus, jqXHR) {
            if (data && data.status === 200) {
                alert('Login Success')
            } else {
                showTips('你输入的帐号或密码不正确，请重新输入。')
            }
        })
    }
});