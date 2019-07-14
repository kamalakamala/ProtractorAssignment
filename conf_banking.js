var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    directConnect: true,
    //seleniumAdress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
     capabilities: {
      'browserName': 'chrome'
    }, 
    /* multiCapabilities:[
      {
      'browserName': 'chrome',
      specs: ['./calc_spec.js'],

    },
    {
      'browserName': 'firefox',
      specs: ['./calc_spec.js'],
    }
  ], */
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    //specs: ['calc_spec.js'],
    //specs: ['spec.js'],
    //specs: ['customer_spec.js'],
    specs: ['e2e_spec.js'],
    //specs: ['dataxml_spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
  
    onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots',
        //screenshotsFolder: 'customerPageImages',
        screenshotsFolder: 'E2ETestingImages',
        takeScreenshots: true
      })
    ); 
 } 
};