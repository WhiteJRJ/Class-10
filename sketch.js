var marks = [40,35,45,38,40]; //total items=5
//           0   1  2  3  4     index
//array.length-no of elements in an array

function score_average(){
  var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
  console.log(sum)
  console.log(sum/marks.length)
}
function setup() {
  createCanvas(400, 400);
  score_average()
}

function draw() {
  background(220);
}