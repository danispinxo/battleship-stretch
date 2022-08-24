const placeShips = (object) => {
  const rawCarrierSquares = object['carrier-squares'].toUpperCase().split(',');
  const carrierSquares = rawCarrierSquares.map(x => x.trim());
  const rawBattleshipSquares = object['battleship-squares'].toUpperCase().split(',');
  const battleshipSquares = rawBattleshipSquares.map(x => x.trim());
  const rawCruiserSquares = object['cruiser-squares'].toUpperCase().split(',');
  const cruiserSquares = rawCruiserSquares.map(x => x.trim());
  const rawSubmarineSquares = object['submarine-squares'].toUpperCase().split(',');
  const submarineSquares = rawSubmarineSquares.map(x => x.trim());
  const rawDestroyerSquares = object['destroyer-squares'].toUpperCase().split(',');
  const destroyerSquares = rawDestroyerSquares.map(x => x.trim());

  if (carrierSquares.length != 5 || battleshipSquares.length != 4 || cruiserSquares.length != 3 || submarineSquares.length != 3 || destroyerSquares.length != 2) {
    $("#incorrect-size-msg").slideDown("slow");
    return;
  }

  for (let square of carrierSquares) {
    for (let batSquare of battleshipSquares) {
      if (square === batSquare) {
        $("#incorrect-size-msg").hide();
        $("#square-overlap-msg").slideDown("slow");
        return;
      }
      for (let cruSquare of cruiserSquares) {
        if (square === cruSquare || batSquare === cruSquare) {
          $("#incorrect-size-msg").hide();
          $("#square-overlap-msg").slideDown("slow");
          return;
        }
        for (let subSquare of submarineSquares) {
          if (square === subSquare || batSquare === subSquare || cruSquare === subSquare) {
            $("#incorrect-size-msg").hide();
            $("#square-overlap-msg").slideDown("slow");
            return;
          }
          for (let desSquare of destroyerSquares) {
            if (square === desSquare || batSquare === desSquare || cruSquare === desSquare || subSquare === desSquare) {
              $("#incorrect-size-msg").hide();
              $("#square-overlap-msg").slideDown("slow");
              return;
            }
          }
        }
      }
    }
  }

  for (let square of carrierSquares) {
    square = square.trim();
    $(`#p${square}`).addClass('player-occupied');
  }
  for (let square of battleshipSquares) {
    square = square.trim();
    $(`#p${square}`).addClass('player-occupied');
  }
  for (let square of cruiserSquares) {
    square = square.trim();
    $(`#p${square}`).addClass('player-occupied');
  }
  for (let square of submarineSquares) {
    square = square.trim();
    $(`#p${square}`).addClass('player-occupied');
  }
  for (let square of destroyerSquares) {
    square = square.trim();
    $(`#p${square}`).addClass('player-occupied');
  }
  $("#incorrect-size-msg").hide();
  $("#square-overlap-msg").hide();
  $('#placement-form').hide();
  $('#attack-input').toggle();
  placeOpponentShips();
};

const placeOpponentShips = () => {

  const opponentBoards = [
    {
      carrierSquares: ['C6', 'D6', 'E6', 'F6', 'G6'],
      battleshipSquares: ['G1', 'G2', 'G3', 'G4'],
      cruiserSquares: ['B3', 'B4', 'B5'],
      submarineSquares: ['I4', 'I5', 'I6'],
      destroyerSquares:['I10', 'J10']
    },
    {
      carrierSquares: ['A6', 'B6', 'C6', 'D6', 'E6'],
      battleshipSquares: ['G1', 'G2', 'G3', 'G4'],
      cruiserSquares: ['B2', 'B3', 'B4'],
      submarineSquares: ['I4', 'I5', 'I6'],
      destroyerSquares:['I9', 'I10']
    },
    {
      carrierSquares: ['A1', 'A2', 'A3', 'A4', 'A5'],
      battleshipSquares: ['G1', 'G2', 'G3', 'G4'],
      cruiserSquares: ['B2', 'B3', 'B4'],
      submarineSquares: ['F8', 'G8', 'H8'],
      destroyerSquares:['D5', 'E5']
    },
    {
      carrierSquares: ['J1', 'J2', 'J3', 'J4', 'J5'],
      battleshipSquares: ['B1', 'B2', 'B3', 'B4'],
      cruiserSquares: ['F2', 'F3', 'F4'],
      submarineSquares: ['E8', 'F8', 'G8'],
      destroyerSquares:['A5', 'B5']
    },
  ];

  const randomBoardSelection = Math.floor(Math.random() * opponentBoards.length);

  const opponentShipSquares = opponentBoards[randomBoardSelection];
  const carrierSquares = opponentShipSquares.carrierSquares;
  const battleshipSquares = opponentShipSquares.battleshipSquares;
  const cruiserSquares = opponentShipSquares.cruiserSquares;
  const submarineSquares = opponentShipSquares.submarineSquares;
  const destroyerSquares = opponentShipSquares.destroyerSquares;

  for (let square of carrierSquares) {
    square = square.trim();
    $(`#o${square}`).addClass('opponent-occupied');
  }
  for (let square of battleshipSquares) {
    square = square.trim();
    $(`#o${square}`).addClass('opponent-occupied');
  }
  for (let square of cruiserSquares) {
    square = square.trim();
    $(`#o${square}`).addClass('opponent-occupied');
  }
  for (let square of submarineSquares) {
    square = square.trim();
    $(`#o${square}`).addClass('opponent-occupied');
  }
  for (let square of destroyerSquares) {
    square = square.trim();
    $(`#o${square}`).addClass('opponent-occupied');
  }

};

const squareOccupationCheck = (square) => {
  square = square.toUpperCase();

  const squareClasses = $(`#o${square}`).attr('class');

  if (squareClasses === 'opponent-square opponent-occupied') {
    $(`#o${square}`).addClass('hit-opponent');
    $(`#o${square}`).text('X');
    return "Hit!";
  } else if (squareClasses === 'opponent-square') {
    $(`#o${square}`).addClass('missed-opponent');
    $(`#o${square}`).text('O');
    return "Miss!";
  }
}

let remainingSquares = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'];

const opponentGuessCheck = () => {

  let randomSquareChoice = Math.floor(Math.random() * remainingSquares.length - 1);
  let attackedPlayerSquare = remainingSquares[randomSquareChoice];
  console.log('Opponent attacks: ', attackedPlayerSquare);

  remainingSquares.splice(randomSquareChoice, 1);
  console.log(remainingSquares);

  const squareClasses = $(`#p${attackedPlayerSquare}`).attr('class');

  if (squareClasses === 'player-square player-occupied') {
    $(`#p${attackedPlayerSquare}`).addClass('hit-player');
    $(`#p${attackedPlayerSquare}`).text('X');
    return "Hit!";
  } else if (squareClasses === 'player-square') {
    $(`#p${attackedPlayerSquare}`).addClass('missed-player');
    $(`#p${attackedPlayerSquare}`).text('O');
    return "Miss!";
  }
}

$(document).ready(function() {
  $(function() {
    const $form = $("#placement-form");
    $form.submit(function(event) {
      // prevents default post activity
      event.preventDefault();
      // serializing the input for post request
      const placement = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/place/",
        data: placement,
        success: function(res) {
          console.log(res);
        },
        error: function(error) {
          console.error(error);
        },
      })
        .then((response) => {
          const placementObject = response;
          placeShips(placementObject);
        });
    });
  });
});

$(document).ready(function() {
  $(function() {
    const $form = $("#guess-form");
    $form.submit(function(event) {
      // prevents default post activity
      event.preventDefault();
      // serializing the input for post request
      const guess = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "/guess/",
        data: guess,
        success: function(res) {
          console.log(res);
        },
        error: function(error) {
          console.error(error);
        },
      })
        .then((response) => {
          console.log(squareOccupationCheck(response['attack-guess']));
          opponentGuessCheck();
        });
    });
  });
});