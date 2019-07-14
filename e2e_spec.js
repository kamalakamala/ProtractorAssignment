//import { browser } from "protractor";

//import { browser } from "protractor";

//import { browser, element } from "protractor";
let winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: './reports/E2ETestinglog.log' })
    ]
});

describe('End to end Testing', function () {
    beforeEach(function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.sleep(4000);
    })
    afterEach(function () {
        //console.log('Test cases got Executed');
        logger.info('Test case got executed');
        logger.error('Error in End to End  operation');
    })

    //test cases
    it('Manager Login', function () {
        element(by.xpath('//button[contains(text(),\'Bank Manager Login\')]')).click();
        var customer = element(by.xpath('//button[contains(text(),\'Add Customer\')]')).getText();
        var openAccount = element(by.xpath('//button[contains(text(),\'Open Account\')]')).getText();
        var customer = element(by.xpath('//button[contains(text(),\'Customers\')]')).getText();
        expect((customer) || (openAccount) || (customer)).toBeTruthy;
    })
    it('Add Customer', function () {
        element(by.xpath('//button[contains(text(),\'Bank Manager Login\')]')).click().then(function () {
            element(by.xpath('//button[contains(text(),\'Add Customer\')]')).click().then(function () {
                element(by.model('fName')).sendKeys('kamala').then(function () {
                    element(by.model('lName')).sendKeys('ran').then(function () {
                        element(by.model('postCd')).sendKeys('1234').then(function () {
                            element(by.xpath('//button[@class=\'btn btn-default\']')).click();
                        })
                    })
                })
            })
            
            var alertDialog = browser.switchTo().alert();

            expect(alertDialog.getText()).toEqual('Customer added successfully with customer id :6');
            browser.sleep(5000);
            alertDialog.accept();
            console.log('Customer got added');
        })
    })


    it('To Open Account For Dollar', function () {
        element(by.xpath('//button[contains(text(),\'Bank Manager Login\')]')).click();
        element(by.xpath('//button[contains(text(),\'Open Account\')]')).click();
        browser.sleep(4000);
        // var cust =element.all(by.repeater('cust in Customers'));
        // cust.last().click();
        element(by.cssContainingText('option', 'Harry Potter')).click();
        element(by.cssContainingText('option', 'Dollar')).click();
        element(by.xpath('//button[contains(text(),\'Process\')]')).click();
        var alertDialog = browser.switchTo().alert();
           expect(alertDialog.getText()).toEqual('Account created successfully with account Number :1016');
            browser.sleep(5000);
            alertDialog.accept();

    })
    it('To Open Account For Dollar', function () {
        element(by.xpath('//button[contains(text(),\'Bank Manager Login\')]')).click();
        element(by.xpath('//button[contains(text(),\'Open Account\')]')).click();
        browser.sleep(4000);
        // var cust =element.all(by.repeater('cust in Customers'));
        // cust.last().click();
        element(by.cssContainingText('option', 'Harry Potter')).click();
        element(by.cssContainingText('option', 'Pound')).click();
        element(by.xpath('//button[contains(text(),\'Process\')]')).click();
        var alertDialog = browser.switchTo().alert();
           expect(alertDialog.getText()).toEqual('Account created successfully with account Number :1017');
            browser.sleep(5000);
            alertDialog.accept();

    })
    it('To Open Account For Dollar', function () {
        element(by.xpath('//button[contains(text(),\'Bank Manager Login\')]')).click();
        element(by.xpath('//button[contains(text(),\'Open Account\')]')).click();
        browser.sleep(4000);
        // var cust =element.all(by.repeater('cust in Customers'));
        // cust.last().click();
        element(by.cssContainingText('option', 'Harry Potter')).click();
        element(by.cssContainingText('option', 'Rupee')).click();
        element(by.xpath('//button[contains(text(),\'Process\')]')).click();
        var alertDialog = browser.switchTo().alert();
           expect(alertDialog.getText()).toEqual('Account created successfully with account Number :1018');
            browser.sleep(5000);
            alertDialog.accept();

    }) 

    it('To Delete Customer',function(){
        element(by.xpath('//button[contains(text(),\'Bank Manager Login\')]')).click();
        element(by.xpath('//button[contains(text(),\'Customers\')]')).click();
        element(by.xpath('//input[@placeholder=\'Search Customer\']')).sendKeys('Hermoine');
        element(by.xpath('//button[contains(text(),\'Delete\')]')).click();
        browser.sleep(5000);
        var rows = $$('.table table-bordered table-striped tbody tr'); 
        console.log('Number of rows in a table' +rows)
        rows.each(function(row){
            var rowElems = row.$$('td');
            expect(rowElems.get(0).getText()).toEqual('Hermoine');
                console.log('Customer not deleted')
        

        })
        
    } )

})



