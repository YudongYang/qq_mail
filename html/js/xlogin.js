/* xlogin js */
var selectedTab = 1

$('#switcher_qlogin').click(function () {
    selectedTab = 1
    selectTab(selectedTab)
})

$('#switcher_plogin').click(function () {
    selectedTab = 2
    selectTab(selectedTab)
})

var selectTab = function (tabIndex) {
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