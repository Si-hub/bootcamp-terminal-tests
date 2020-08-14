module.exports = function countAllFromTown(registrationNumber,location ){ 
	var array = 0;
var split = registrationNumber.split(',');
  for (var i = 0; i < split.length; i++){
   
     var reg = split[i].trim()
      if (reg.startsWith(location)){
  		array++;
  } 

}
  return array;
};