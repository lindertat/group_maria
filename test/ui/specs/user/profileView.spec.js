const LoginPage = require('../../pageobjects/auth/Login.page');
const ViewProfilePage = require('../../pageobjects/user/Profile.page');
const PublicationsPage = require('../../pageobjects/publication/Publications.page');

describe('View Profile Page', () => {

    it('Should display Full name and Job Title', async () => {
        await LoginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
        await PublicationsPage.navBar.openProfile();
        await expect(ViewProfilePage.userFirstLastName).toBeExisting().true;
        await expect(ViewProfilePage.userJobTitle).toBeExisting().true;
        await expect(ViewProfilePage.userEmail).toBeExisting().true;
    });

});

