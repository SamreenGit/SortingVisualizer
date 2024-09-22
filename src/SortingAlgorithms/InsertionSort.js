export function getInsertionSortAnimations(helper) {
    const animations = [];
    let array= helper.slice();
    if (array.length <= 1) return array;
    console.log("input array ",array);
    insertionSortHelper(array, animations);
    console.log("sorted ar ",array);
    return animations;
  }

  function insertionSortHelper(
    mainArray,
    animations
  ) {
    const length = mainArray.length;
        for(let i=1;i<length;i++){

let val= mainArray[i];
let j=i-1;
animations.push(["comparison1", j, i]);
    animations.push(["comparison2", j, i]);
while(j>=0 && mainArray[j]>val){
    animations.push(["overwrite", j + 1, mainArray[j]]);
    mainArray[j+1]=mainArray[j];
    j=j-1;
    if (j >= 0) {
        animations.push(["comparison1", j, i]);
        animations.push(["comparison2", j, i]);
      }
}
animations.push(["overwrite", j + 1, val]);
mainArray[j+1]=val;

        }

  }

  