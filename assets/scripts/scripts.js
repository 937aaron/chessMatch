var count = 0
var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

  $(".forward").click(function(e){
    e.preventDefault
    count++
    // console.log(count);
    if (count === 1){
      console.log(board.join('\n') + '\n\n');
      board[4][3] = board[6][3];
      board[6][3] = ' ';
      var move = board[4][3];
      console.log(board.join('\n'));
      console.log(move);
      $(".43").append('<p>' + move + '</p>');
      $(".63").html(" ");
    }
      else if (count === 2){
      console.log(board.join('\n') + '\n\n');
      board[2][5] = board[0][6];
      board[0][6] = ' ';
      var move = board[2][5];
      console.log(board.join('\n'));
      console.log(move);
      $(".25").append('<p>' + move + '</p>');
      $(".06").html(" ");
    }
    else if (count === 3){
     console.log(board.join('\n') + '\n\n');
     board[4][2] = board[6][2];
     board[6][2] = ' ';
     var move = board[4][2];
     console.log(board.join('\n'));
     console.log(move);
     $(".42").append('<p>' + move + '</p>');
     $(".62").html(" ");
   }
   else if (count === 4){
    console.log(board.join('\n') + '\n\n');
    board[2][4] = board[1][4];
    board[1][4] = ' ';
    var move = board[2][4];
    console.log(board.join('\n'));
    console.log(move);
    $(".24").append('<p>' + move + '</p>');
    $(".14").html(" ");
  }
  else if (count === 5){
   console.log(board.join('\n') + '\n\n');
   board[5][6] = board[6][6];
   board[6][6] = ' ';
   var move = board[5][6];
   console.log(board.join('\n'));
   console.log(move);
   $(".56").append('<p>' + move + '</p>');
   $(".66").html(" ");
 }
 else if (count === 6){
  console.log(board.join('\n') + '\n\n');
  board[3][3] = board[1][3];
  board[1][3] = ' ';
  var move = board[3][3];
  console.log(board.join('\n'));
  console.log(move);
  $(".33").append('<p>' + move + '</p>');
  $(".13").html(" ");
}
else if (count === 7){
 console.log(board.join('\n') + '\n\n');
 board[6][6] = board[7][5];
 board[7][5] = ' ';
 var move = board[6][6];
 console.log(board.join('\n'));
 console.log(move);
 $(".66").append('<p>' + move + '</p>');
 $(".75").html(" ");
}
else if (count === 8){
 console.log(board.join('\n') + '\n\n');
 board[1][4] = board[0][5];
 board[0][5] = ' ';
 var move = board[1][4];
 console.log(board.join('\n'));
 console.log(move);
 $(".14").append('<p>' + move + '</p>');
 $(".05").html(" ");
}
else if (count === 9){
 console.log(board.join('\n') + '\n\n');
 board[5][5] = board[7][6];
 board[7][6] = ' ';
 var move = board[5][5];
 console.log(board.join('\n'));
 console.log(move);
 $(".55").append('<p>' + move + '</p>');
 $(".76").html(" ");
}

  // console.log(count);
  });
  $(".back").click(function(){
    if (count === 1) {
      board[6][3] = board[4][3];
      board[4][3] = ' ';
      var back = board[6][3]
      $(".63").append('<p>' + back + '</p>');
      $(".43").html(" ");
      count= count-1
      // if (count === 1){
      //   console.log(board.join('\n') + '\n\n');
      //   board[4][3] = board[6][3];
      //   board[6][3] = ' ';
      //   var move = board[4][3];
      //   console.log(board.join('\n'));
      //   console.log(move);
      //   $(".43").append('<p>' + move + '</p>');
      //   $(".63").html(" ");
      // }
    }
  console.log(count);
});
