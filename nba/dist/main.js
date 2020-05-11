// refreshing dream team arry
const refresh = function(){$.post("refreshDreamTeam");}
refresh()

//event listener

$(".button").on("click", function () {
  getPlayers();
   /*  $('.remove').attr('disabled', true);  */
});

$(".result").on("click", "img", function () {
  Id = $(this).closest(".box").find("p").data().id;
  const playerId = { id: Id };
  peackPlayers(playerId);
});

$(".result").on("click", ".remove", function () {
  Id = $(this).closest(".box").find("p").data().id;
  const playerId = { id: Id };
  console.log( playerId)
  removePlayers(playerId);
  getDreamTeam();
});

$(".button2").on("click", function () {
  getDreamTeam();
  /* $('.remove').prop('disabled', false); */
});




//comunication with server(api)

const getPlayers = function () {
  const value =
    $(".input").val().charAt(0).toUpperCase() + $(".input").val().slice(1);
  $.get(`teams/${value}`, function (data) {
    const players = data;
    
    render.renderPlayers(players);
  });
};


const peackPlayers = function (playerId) {
  $.post(`dreamTeam`,playerId ,function (data) {
    alert(data)
  });
};

const removePlayers = function (playerId) {
  $.post(`removePlayers`,playerId ,function (data) {
    
  });
};

 const getDreamTeam = function (){$.get('dreamTeam',  function (data) {
   const players = data
   render.renderPlayers(players)
  })} 

 