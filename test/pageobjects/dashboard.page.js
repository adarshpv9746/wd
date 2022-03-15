//let helper = require('../helpers/helper');
//let editpatpage = require('../pages/editpatient');
const Page = require('./page');
class dashpage extends page{
    get add_btn(){

            return $("//mdl-button[@class='primary patient-add-btn ng-tns-c5-0 mdl-button ng-star-inserted']");
    } 


    async addp_button(){
        //helper.waitForElementpresent(add_btn);
        
        await add_btn.click();
    }

};

module.exports = new dashpage();