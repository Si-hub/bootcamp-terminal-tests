module.exports = function allPaarl(registrationNumber){ 
    var array = 0;
   
  var regNumbersForPaarl = registrationNumber.split(', ');
    for (var i = 0; i < regNumbersForPaarl.length; i++){
     
       var reg = regNumbersForPaarl[i]
        if (reg.startsWith('CJ')){
         array++;
    } 
  
  }
    return array;
  };