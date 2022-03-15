const dashpage = require('../pageobjects/dash.page');
const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

describe('OrthoCatapult Application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tc@clt.com', 'tc');
        expect(browser).toHaveTitle('OrthoCatapult');
        //await expect(SecurePage.flashAlert).toBeExisting();
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
            //'You logged into a secure area!');
    });
    
    it('click add patient button from dashboard', async () => {
       browser.getUrl();
       await dashpage.add();
    });


});


