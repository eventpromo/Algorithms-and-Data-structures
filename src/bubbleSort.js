module.exports = function sort(array) {
  let length = array.length;
  if(length <= 1){
    return array;
  }
  
  for(let i = 0; i < length - 1; i++){
    for(let j = 1; j < length - i; j++){
      if(array[j - 1] > array[j]){
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
