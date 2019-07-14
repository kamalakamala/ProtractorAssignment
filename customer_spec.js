//import { by } from "protractor";

//import { element } from "protractor";

//import { monitorEventLoopDelay } from "perf_hooks";
//import { element } from "protractor";

//import { $$ } from "protractor";

//import { element, by } from "protractor";

//import { by } from "protractor";

//import { element } from "protractor";

//import { Options } from "selenium-webdriver/firefox";

//import { browser, element, by } from "protractor";



describe('Customer Login Page Testing',function(){
    beforeEach(function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.className('btn btn-primary btn-lg')).click();
        //browser.sleep(5000);
    
        element(by.cssContainingText('option', 'Harry Potter')).click();
         
       /* 
        element.all(by.model('custId')).then(function(items){
          items[2].click();
            browser.sleep(3000);
        }) */
        
        
        //browser.sleep(2000);
          element(by.className('btn btn-default')).click();
          //browser.sleep(5000);
    })
    
    
    afterEach(function(){
        console.log('Test cases got Excuted');
    })
          it('Verify Currency Type',function(){
              
             var text = element(by.className('fontBig ng-binding')).getText();
              //console.log('Text ' +text);
              expect(text).toEqual('Harry Potter');
              element.all(by.options('account for account in Accounts')).then(function(items){
                  items[0].click();
              })  
                 var res = element(by.xpath('//strong[contains(text(),\'Dollar\')]')).getText();
                 expect(res).toEqual('Dollar');
              
              
              element.all(by.options('account for account in Accounts')).then(function(items){
                items[1].click();
              })
               var res = element(by.xpath('//strong[contains(text(),\'Pound\')]')).getText();
               expect(res).toEqual('Pound');
               
               element.all(by.options('account for account in Accounts')).then(function(items){
                items[2].click();
              })
               var res = element(by.xpath('//strong[contains(text(),\'Rupee\')]')).getText();
               expect(res).toEqual('Rupee');
              
          });

          it('Intial Transaction',function(){
              element(by.xpath('//button[contains(text(),\'Transactions\')]')).click();
              browser.sleep(5000);
                
            var rows = $$('.table table-bordered table-striped tbody tr');
            expect(rows.count()).toBe(0);
          })

          it('DepositMoney',function(){
            element.all(by.options('account for account in Accounts')).then(function(items){
                items[2].click();
              })
              
              element(by.xpath('//button[contains(text(),\'Deposit\')]')).click();
              browser.sleep(3000);
              element(by.model('amount')).sendKeys('2000');
              element(by.className('btn btn-default')).click();
              browser.sleep(3000);
              expect(element(by.xpath('//strong[contains(text(),\'2000\')]')).getText()).toBe('2000');
              //expect(element(by.binding('2000')).getText()).toBe('2000');
          })

          it('Transaction after deposit',function(){
            element.all(by.options('account for account in Accounts')).then(function(items){
                items[2].click();
              })
              element(by.xpath('//button[contains(text(),\'Transactions\')]')).click();
              browser.sleep(5000);
              var rows = $$('.table table-bordered table-striped tbody tr');
              expect(element(by.xpath('//td[contains(text(),\'2000\')]')).getText()).toBe('2000');
              expect(element(by.xpath('//td[contains(text(),\'Credit\')]')).getText()).toBe('Credit');
            
          })
              xit('withdraw Error',function(){
                element.all(by.options('account for account in Accounts')).then(function(items){
                    items[2].click();
                  })
                element(by.xpath('//button[contains(text(),\'Withdrawl\')]')).click();
                browser.sleep(3000);
                element(by.model('amount')).sendKeys('2001');
                browser.sleep(3000);
                element(by.xpath('//button[@class=\'btn btn-default\']')).click();

                expect(element(by.xpath('//span[@class=\'error ng-binding\']')).getText()).toBe('Transaction Failed. You can not withdraw amount more than the balance.');

              })
              it('withDrawSuccess',function(){
                element.all(by.options('account for account in Accounts')).then(function(items){
                    items[2].click();
                  })
                element(by.xpath('//button[contains(text(),\'Withdrawl\')]')).click();
                browser.sleep(3000);
                element(by.model('amount')).sendKeys('1000');
                browser.sleep(3000);
                element(by.xpath('//button[@class=\'btn btn-default\']')).click();
                expect(element(by.xpath('//span[@class=\'error ng-binding\']')).getText()).toBe('Transaction successful');

              })

              it('TransactionAfterWindow',function(){
                element.all(by.options('account for account in Accounts')).then(function(items){
                    items[2].click();
                  })
              element(by.xpath('//button[contains(text(),\'Transactions\')]')).click();
              browser.sleep(5000);
              var rows = $$('.table table-bordered table-striped tbody tr');
              expect(element(by.xpath('//td[contains(text(),\'1000\')]')).getText()).toBe('1000');
              expect(element(by.xpath('//td[contains(text(),\'Debit\')]')).getText()).toBe('Debit');
 

              })

              it('TransactionReset',function(){
              element.all(by.options('account for account in Accounts')).then(function(items){
                    items[2].click();
                  })
              element(by.xpath('//button[contains(text(),\'Transactions\')]')).click();
              //browser.sleep(5000);
              //element(by.xpath('//button[contains(text(),\'Reset\')]')).click().then(function(){
                var rows = $$('.table table-bordered table-striped tbody tr');
                expect(rows.count()).toBe(0);

            

              

              })




        })