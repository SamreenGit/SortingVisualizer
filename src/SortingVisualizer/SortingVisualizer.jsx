import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms'
import {getQuickSortAnimations} from '../SortingAlgorithms/SortingAlgorithms'

import {getInsertionSortAnimations} from '../SortingAlgorithms/InsertionSort'
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort'
import './SortingVisualizer.css';

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 30;


// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

const PIVOT_SWAP = 'yellow';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state={
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
      }


      resetArray(){
        const array= [];
        for(let i=0;i< NUMBER_OF_ARRAY_BARS ; i++){
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array});
              }

    

//               NOTE: This method will only work if your sorting algorithms actually return
//   the sorted arrays; if they return the animations (as they currently do), then
//   this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }
  
mergeSort() {

    
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
           
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  
  quickSort() {

    // console.log(this.state.array);
    // const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
    // const mergeSortedArray = getQuickSortAnimations(this.state.array);
    // console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    // console.log("here the array is --  "+ this.state.array);
    // this.render();
  //  We leave it as an exercise to the viewer of this code to implement this method.
    console.log(this.state.array);
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        let value= animations[i][0];
      const arrayBars = document.getElementsByClassName('array-bar');
    
     if(value === "Comparison1"){
        const [condition, barOne , barTwo] = animations[i]; 
        const barOneStyle   = arrayBars[barOne].style;
        const barTwoStyle   = arrayBars[barTwo].style;
        setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          },  ANIMATION_SPEED_MS);

     }else if(value === "Swap1"){
        setTimeout(() => {
            const [condition, barOneIdx, newHeight] = animations[i];
           /// const [condition, barTwoIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            
            barOneStyle.height = `${newHeight}px`;
            barOneStyle.backgroundColor= PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          setTimeout(() => {
           // const [condition, barOneIdx, newHeight] = animations[i];
            const [condition, barTwoIdx, newHeight] = animations[i];
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newHeight}px`;
            barTwoStyle.backgroundColor= PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
     }else if(value === "SwapP"){
        setTimeout(() => {
            const [condition, barOneIdx, newHeight] = animations[i];
           /// const [condition, barTwoIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            barOneStyle.backgroundColor= PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
          setTimeout(() => {
           // const [condition, barOneIdx, newHeight] = animations[i];
            const [condition, barTwoIdx, newHeight] = animations[i];
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newHeight}px`;
            barTwoStyle.backgroundColor= PRIMARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
     }
     
    }
}

   
// quickSort(){
//     // Handles displaying quick sort animations
//     const animations = getQuickSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       const isColorChange =
//         animations[i][0] === "comparison1" ||
//         animations[i][0] === "comparison2";
//       const arrayBars = document.getElementsByClassName("array-bar");
//       if (isColorChange === true) {
//         const color =
//           animations[i][0] === "comparison1"
//             ? SECONDARY_COLOR
//             : PRIMARY_COLOR;
//         const [, barOneIndex, barTwoIndex] = animations[i];
//         const barOneStyle = arrayBars[barOneIndex].style;
//         const barTwoStyle = arrayBars[barTwoIndex].style;
//         setTimeout(() => {
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * ANIMATION_SPEED_MS);
//       } else {
//         const [, barIndex, newHeight] = animations[i];
//         if (barIndex === -1) {
//           continue;
//         }
//         const barStyle = arrayBars[barIndex].style;
//         setTimeout(() => {
//           barStyle.height = `${newHeight}px`;
//         }, i * ANIMATION_SPEED_MS);
//       }
//     }
// }


// insertionSort(){
    
//     console.log(this.state.array);
//     const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
//     const mergeSortedArray = getInsertionSortAnimations(this.state.array);
//     console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
//     console.log("here the array is --  "+ this.state.array);
//     // this.render();
// }

insertionSort() {
    // Handles displaying insertion sort animations
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  bubbleSort() {
    // Handles displaying bubble sort animations
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        const color =
          animations[i][0] === "comparison1"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


              render(){
                const {array} =this.state;

                return (
                    <div className="array-container">
                            {array.map((value,idx)=>
                            (<div className="array-bar" key={idx} style={{
                                backgroundColor:PRIMARY_COLOR,
                                height: `${value}px`,
                            }}></div>
                        )
                            )
                            }
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button>
                    </div>
                );
                
              }

        

}
// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
}
