module.exports = class NavBar {
    get pageTitle() { return $('h6'); }
    get btnHamburgerMenu() { return $("//button[@id='nav-bar-toggle']"); }
    get btnProblems() { return $('#problems'); }
    get btnProfile() { return $("#profile"); }

    async openProblems() {
        await this.btnHamburgerMenu.click();
        await this.btnProblems.click();
    }

    async openProfile() {
        await this.btnHamburgerMenu.click();
        await this.btnProfile.click();
    }
}