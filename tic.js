
$("button").click(function (){
restart();
$('.grid').text("")
$('.grid').css("background", "lightblue")

console.log("restart");

  // location.reload()
})

$('.grid').css("color", "red");
//
// $(function() {

$('.grid').click( function() {
 var $player;
 var id = parseInt(this.id);

 playTurn(id);
 if (player === 1 && id !== true ){
 $(this).text("X")
 $(this).css("background","black")
 } else {
 $(this).text("O");
  $(this).css("background","lightblue")
 }

 // $(this).text($player);
 // console.log(grid.join("-"));
 if (whoWon() === 1) {
   alert("Player 1 Won");
 } else if (whoWon() === 2) {
     alert("Player 2 Won");
   }  else if (whoWon() === 3) {
     alert("It is a tie game!");
   }
})

//
var grid = [null, null, null, null, null, null, null, null, null]
var player = 1

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) {
      player = 2
    } else {
      player = 1
    }
    return true
  }
}

function isGameOver () {
  if (whoWon()) {
    return true
  } else {
    return false
  }
}

function whoWon () {
  if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] === 1) { return 1 }
  if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] === 1) { return 1 }
  if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] === 1) { return 1 }
  if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] === 2) { return 2 }
  if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] === 2) { return 2 }
  if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] === 2) { return 2 }
  if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] === 1) { return 1 }
  if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] === 1) { return 1 }
  if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] === 1) { return 1 }
  if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] === 2) { return 2 }
  if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] === 2) { return 2 }
  if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] === 2) { return 2 }
  if (grid[6] === grid[4] && grid[4] === grid[2] && grid[6] === 1) { return 1 }
  if (grid[6] === grid[4] && grid[4] === grid[2] && grid[6] === 2) { return 2 }
  if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] === 1) { return 1 }
  if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] === 2) { return 2 }
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) { return 3 }
  return 0
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1
}
