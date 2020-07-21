function userTheme(toggle = false) {
    //let userMode = localStorage.userThemeMode || 'auto';
    let userMode = localStorage.userThemeMode;
    const osMode = !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    //console.log(osMode);
    //console.log(userMode);
    if (toggle) {
        switch (userMode) {
            case 'light':
                userMode = 'dark';
                $('.thema_btn i').removeClass("fas fa-sun").addClass('fas fa-moon');   
                break;
            case 'dark':
                userMode = 'light';
                $('.thema_btn i').removeClass("fas fa-moon").addClass('fas fa-sun'); 
                break;
            default:
                userMode = 'light';
        }
        localStorage.userThemeMode = userMode;
    }
    //console.log(`current mode : ${userMode}`);
    window.__THEME_MODE = userMode === 'auto' ? osMode : userMode;
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