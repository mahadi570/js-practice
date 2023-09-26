var sampleArray = [25, 25, 55, 26,24,14,3,25,14,258,14,255,14,323];

function arrAvg(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    var averageOfArray = sum / array.length;

    return console.log('Average is', averageOfArray, '& Length of array is', array.length)
}

arrAvg(sampleArray);