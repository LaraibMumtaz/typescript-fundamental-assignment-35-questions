//15- Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
let scores=[10,5,20,20,4,5,2,25,1]
let maxno=Math.max(...scores)
let minno=Math.min(...scores)

function exdblow(score:number[],max:number,min:number){
let exceed=0
let below=0
for(let i=0;i<score.length;i++){
        if(score[i]>max){
          exceed=exceed+1
          
        }
        else if (score[i]<min){
              below=below+1
              
        }
        else{
          console.log("nothing")     
}

}
console.log("the number of times it fell exceed the minimum score:",exceed)
console.log("times the score below the maximum score:",below)

}


exdblow([56,56,8,2,-9,-8,-65,47],maxno,minno)