export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {

   
    if (startIdx === endIdx){ 
        console.log("Calll came for and returned back for "+ startIdx, endIdx);
        return;}
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    console.log("Calling For SIndex ", startIdx , endIdx);

    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    console.log("Call came back ");
    console.log("Now Calling othr half of  ", startIdx , middleIdx, endIdx);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    console.log("Call came back and now calling domerge ");
    console.log("With indexes", startIdx , endIdx);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {

    console.log("SIndex ", startIdx );
    console.log("MIndex "+middleIdx);
    console.log("EIndex ", endIdx );
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

//   export function getQuickSortAnimations(array) {
//     const animations = [];
//     let helperArray = array.slice();

//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     console.log("SortedArray: ", array);
//     return array;
//   }




export function getQuickSortAnimations(array) {
  let animations = [];
  let helperArray = array.slice();
  doQuickSort(helperArray, 0, helperArray.length - 1, animations);
  array = helperArray;
  return animations;
}

function doQuickSort(helperArray, startIdx, endIdx, animations) {
  let pivotIdx;
  if (startIdx === endIdx) return;
  if (startIdx < endIdx) {
    pivotIdx = quickSortHelper(helperArray, startIdx, endIdx, animations);
    doQuickSort(helperArray, startIdx, pivotIdx - 1, animations);
    doQuickSort(helperArray, pivotIdx + 1, endIdx, animations);
  }
}

  function quickSortHelper(
    array,
    startIdx,
    endIdx,
    animations,
  ) {

    let pos;
if(startIdx==endIdx) return;
   
    if (startIdx< endIdx){ 
        
         pos= partition(array, startIdx , endIdx , animations);
        quickSortHelper(array, startIdx, pos-1, animations);
        quickSortHelper(array,pos+1, endIdx, animations);
    }
  }

  function partition(
    array, 
    low ,
    high , 
    animations,
  ){

        let i=low;
        let j= high;
        let pivot=array[low];
        // animations.push([low,-1]);
        while(i<j){

            while(array[i]<=pivot && i<high){
                i++;
            }
            
            while(array[j]>pivot && j>low){
                j--;
            }

           
            if(i<j){
             //   animations.push([i,j]);
             animations.push(["Comparison1",i,j])
             animations.push(["Swap1",i, array[j]]);
             animations.push(["Swap1",j,array[i]]);
                let temp= array[i];
                array[i]=array[j];
                array[j]=temp;
                // animations.push([i,array[i]]);
                // animations.push([j,array[j]]);
               // animations.push([i,j]);
              
            }
        }

      //  animations.push([low,-2]);
    animations.push(["SwapP",low,array[j]]);
    animations.push(["SwapP",j,array[low]]);
        let tp=array[j];
        array[j]=array[low];
        array[low]=tp;
      //  animations.push([j,-2]);
      
return j;

  }

// function partitionArray(helperArray, startIdx, endIdx, animations) {
//     let pivotIdx = randomIntFromInterval(startIdx, endIdx); // get a random index in array for pivot
  
//     animations.push(["comparison1", pivotIdx, endIdx]);
//     animations.push(["swap", pivotIdx, helperArray[endIdx]]);
//     animations.push(["swap", endIdx, helperArray[pivotIdx]]);
//     animations.push(["comparison2", pivotIdx, endIdx]);
//     swapEleInArray(helperArray, pivotIdx, endIdx);
  
//     let lti = startIdx;
  
//     for (let i = startIdx; i < endIdx; ++i) {
//       animations.push(["comparison1", i, endIdx]);
//       animations.push(["comparison2", i, endIdx]);
//       if (helperArray[i] <= helperArray[endIdx]) {
//         animations.push(["comparison1", i, lti]);
//         animations.push(["swap", i, helperArray[lti]]);
//         animations.push(["swap", lti, helperArray[i]]);
//         animations.push(["comparison2", i, lti]);
//         swapEleInArray(helperArray, i, lti);
//         lti++;
//       }
//     }
//     animations.push(["comparison1", lti, endIdx]);
//     animations.push(["swap", endIdx, helperArray[lti]]);
//     animations.push(["swap", lti, helperArray[endIdx]]);
//     animations.push(["comparison2", lti, endIdx]);
  
//     swapEleInArray(helperArray, lti, endIdx);
//     return lti;
//   }
  
//   function swapEleInArray(helperArray, firstIdx, secondIdx) {
//     let temp = helperArray[firstIdx];
//     helperArray[firstIdx] = helperArray[secondIdx];
//     helperArray[secondIdx] = temp;
//   }

//   function randomIntFromInterval(min, max) {
//     // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
