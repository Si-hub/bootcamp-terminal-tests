module.exports =  function findItemsOver20(list){ 
    var over =[];
    
    for (var i=0; i<list.length; i++){ 
        var find = list[i];
     
      if (find['qty'] > 20){ 
      over.push(find);
        
      }
   
    }
      return over;
  };
 
