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
};

const placeOpponentShips = () => {

  let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let randomRow = Math.floor(Math.random() * letterArray.length);

  
};

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
          const guess = response;
          console.log("Guess is: ", guess)
        });
    });
  });
});