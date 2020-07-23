function userTheme(toggle = false) {
    let userMode = localStorage.userThemeMode;
    //console.log(userMode);
    if (toggle) {
        switch (userMode) {
            case 'light':
                userMode = 'dark';
                window.__THEME_MODE = 'dark';
                $('.thema_btn i').removeClass("fas fa-sun").addClass('fas fa-moon');   
                break;
            case 'dark':
                userMode = 'light';
                window.__THEME_MODE = 'light';
                $('.thema_btn i').removeClass("fas fa-moon").addClass('fas fa-sun'); 
                break;
            default:
                userMode = 'light';
        }
        localStorage.userThemeMode = userMode;
    }
    //console.log(`current mode : ${userMode}`);
    document.getElementsByTagName('html')[0].classList[window.__THEME_MODE === 'dark' ? 'add' : 'remove']('darkmode');
}
if (!!window.matchMedia) {
 ['light', 'dark'].forEach(mode => {
        window.matchMedia(`(prefers-color-scheme: ${mode})`).addListener(e => {
            if (!!e.matches) {
                userTheme();
            }
        });
    });
}
userTheme();

$(document).ready(function(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $('.thema_btn i').removeClass("fas fa-sun").addClass('fas fa-moon');  
        $('html').addClass('darkmode');
    }
});