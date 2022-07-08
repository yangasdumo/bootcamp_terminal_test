function findItemsOver (list,threshold ) {
    var results = []
    for(var i=0;i<list.length;i++){
      var listItem = list[i].qty;
      
      if (listItem > threshold){
        results.push(list[i])
       }
  
  } 
    
    return results;
    
  }
  module.exports = findItemsOver