module.export = function binSearch(arr, toFind)
{
    if (!arr){
        return null;
    } 
    var first = 0;
    var last = arr.length - 1;
    while (first < last)
    {
        var mid = first + Math.floor((last - first) / 2);
        if (arr[mid] >= toFind){
            last = mid;
        } 
        else{
            first = mid + 1;
        }
    }    
    if (arr[last] == toFind){
        return last;
    }        
    else {
        return null;
    }
}