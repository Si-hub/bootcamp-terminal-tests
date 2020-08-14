module.exports = function(list){
    var salesMap = {};

    for(var i = 0; i < list.length; i++){
        var departmentSales = list[i].department
        if(salesMap[departmentSales] === undefined){
            salesMap[departmentSales] = 0;
        }
        salesMap[departmentSales] += list[i].sales
    }
var mostList = 0;
var mostSales = '';

for(var i in salesMap){
    var currentDepartment = salesMap[i]
 if(currentDepartment > mostList){
    mostList = currentDepartment
    mostSales = i


 }   
}

return mostSales
};