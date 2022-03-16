class prac {
    /**
     * define selectors using getter methods
     */
    get prac () {return $("//span[@class='mdl-button__ripple-container']");}
    get p_name () {return $("//input[@name='name']");}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async pract () {
        
        await this.prac.click();
        await this.p_name.setValue("Ajnsjnjnsjksnsnjsnsdacdacacadasd58888");

    }
}

module.exports = new prac();