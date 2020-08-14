module.exports =  function totalPhoneBill(phoneBill){ 
    var bill = phoneBill.split(',')

    var total = 0;

    for (var i = 0; i < bill.length; i++){ 
      var trimString = bill[i].trim()
      if(trimString == 'sms'){ 
        total += 0.65;
      }else if(trimString == 'call'){ 
        total += 2.75;
        }
        
      }
      return 'R' + total.toFixed(2);
    };