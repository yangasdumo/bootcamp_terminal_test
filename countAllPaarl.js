function countAllPaarl(str){
    let myArray = str.split(",");
    var list = [];
   
    for (let i=0;i<myArray.length; i++){
     
      if(myArray[i].includes('CJ')){
        list.push(myArray[i]);
        
      }
      
     
    }

    return list.length; 
  }
  module.exports = countAllPaarl
