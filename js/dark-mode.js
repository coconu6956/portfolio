function userTheme() {
    window.__THEME_MODE = 'light';
    if (!!window.matchMedia) {
        window.__THEME_MODE = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'auto';
    }
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

$(document).ready(function () {
    
});
