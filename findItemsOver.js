module.exports =  function findItemsOver20 (items,threshold){ 
    //console.log(threshold);
    var array = [];
    
    for (var i=0; i<items.length; i++){ 
        var itemList = items[i];
     
      if (itemList['qty'] > threshold){ 
      array.push(itemList);
        
      }
   
    }
      return array;
  };