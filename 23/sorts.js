function bubble(arr){
    console.log(arr)
    for ( i=0; i< arr.length-1; i++){
        for (j = i+1; j < arr.length; j++){
            if (arr[i] > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

            }
        }
    }
    console.log(arr)
    return arr;
}

module.exports.bubble = bubble
