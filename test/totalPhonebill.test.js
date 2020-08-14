let assert = require("assert");
let totalPhonebill = require("../totalPhonebill");

describe("The totalPhonebill function ", function(){
    
    it ("should calculate the total phone bill for the data that is provided", function() {

        var phonebill = 'call, sms, call, sms, call, sms, call'
        assert.equal(totalPhonebill(phonebill),'R'+12.95);
    });

    it ("should calculate the total phone bill for the data that is provided", function() {
    
          var phonebill = 'call, sms, sms, sms, sms, sms, sms'
        assert.equal(totalPhonebill(phonebill),'R'+6.65);
    });

});