$(document).ready(function(e) {

  if ($(window).width() > 1023) {
    $(".searchInput").addClass("searchActive");
    $(".overlay").addClass("overlayDesk");
    $(".pokemonBar").remove();
  }

  document.getElementById('pokeAudio').muted = true;
  $(".evolContainer").on("click", function(e) {
    addStatsData();
  });

  $(document).on("contextmenu", function(e) {
    if (e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA")
      e.preventDefault();
  });

  var soundButton = false;
  $("#soundButton").on("click", function() {
    if (soundButton === false) {
      document.getElementById('pokeAudio').muted = false;
      $("#soundButton").css("background-image", "url('assets/musicOnBtn.png')");
      $(".pokeAudioTag").attr("src", "assets/sounds/pika1.wav");
      $(".pokeAudioTag")[0].play();
      soundButton = true;
    } else {
      document.getElementById('pokeAudio').muted = true;
      $("#soundButton").css("background-image", "url('assets/musicOffBtn.png')");
      soundButton = false;
    }
  });

  $(".cpCalcBar").on("click", function(e) {
    e.preventDefault();
    $(".pkmnInfo").animate({
      scrollTop: $($(".evolutionBar").children().attr('href')).offset().top
    }, 300);
    if ($(".cpCalc").is(":visible")) {
      $(".cpCalc").slideUp();
      $(".cpResults").hide();
    } else {
      $(".cpCalc").slideDown();
      $(".cpResults").show();

    }
  });

  var checkText = false;
  var pokemonNumbers = [];

  for (var i = 1; i < pokemonNames.length + 1; i++) {
    if (i < 10) {
      pokemonNumbers.push("00" + i);
    } else if (i < 100) {
      pokemonNumbers.push("0" + i);
    } else {
      pokemonNumbers.push(i)
    }
  }

  var pokemonSquares = [];
  for (var i = 0; i < pokemonNames.length; i++) {
    pokemonSquares.push($("<div>").addClass("pokeSquare").attr("id", pokemonNames[i]).append($("<img>").attr("id", [i + 1] + ".wav").attr("src", "assets/" + pokemonNumbers[i] + ".png").addClass("pokeImage").addClass(pokemonNames[i] + "pic")).append($("<p>").addClass("bold").text(pokemonNames[i])));
  }

  function reset(e) {
    $(".pokemonContainer").append(pokemonSquares);
  }

  reset();

  var buttonPress = false;

  $(".searchButton").on("click", function() {
    if ($(window).width() < 1024) {
      if (buttonPress === true && $(".searchInput").val() !== "") {
        $(".searchBar .btn").click();
      } else if (buttonPress === false) {
        $(".searchInput").addClass("searchActive");
        buttonPress = true;
      } else if (buttonPress === true) {
        $(".searchInput").removeClass("searchActive");
        buttonPress = false;
      }
    }
  });

  $(".searchBar").on("submit", function(e) {
    return false;
  });

  $(".pokeImage").on("click", function() {
    var randomSound = Math.floor(Math.random() * 7);
    if ($(this).attr("id") === "25.wav") {
      console.log(randomSound);
      $(".pokeAudioTag").attr("src", "assets/sounds/" + "pika" + [randomSound] + ".wav");
    } else {
      $(".pokeAudioTag").attr("src", "assets/sounds/" + $(this).attr("id"));
      console.log($(".pokeAudioTag").attr("src"));
    }
    $(".pokeAudioTag")[0].play();
    $("#Nidoran♀").removeClass("selected");
    $("#Nidoran♂").removeClass("selected");
  });

  function filterPokemon() {
    var query = $.trim($(this).prevAll('.search-query').val().toLowerCase());
    $(".bold").each(function() {
      var $this = $(this);
      if ($this.text().toLowerCase().indexOf(query) === -1) {
        $this.closest('div.pokeSquare').fadeOut();
        checkText = true;
      } else {
        $this.closest('div.pokeSquare').fadeIn();
        checkText = false;
      }
    });
  }

  $('.searchBar .btn').on('click', filterPokemon);

  // $(".evolSquare").on("click",function () {
  // 	console.log("work!!");
  // 	var infoArray = [];
  // 	infoArray.push($(this).clone().addClass("lgPokeSquare"));

  // 	$(".overlay").remove("lgPokeSquare");
  // 	$(".overlay").append(infoArray);
  // 	$(".pkmnInfo").data("currentName",$(this).attr("id"));

  // });

  $(".pokeSquare").on("click", function(e) {
    // needed pokemons to fade in because search fades out and it wouldnt show on evolve button

    var infoArray = [];
    $(".searchContainer").hide();
    infoArray.push($(this).clone(true).addClass("lgPokeSquare"));

    if ($(".overlay").is(":visible")) {
      $(".lgPokeSquareContainer").empty();
      $(".lgPokeSquare").replaceWith($(this));
    }

    $("div.mainContainer").css("overflow", "hidden");
    $(".overlay").show();
    $("#pokedex").show();
    $(".xIcon").show();
    $("#soundButton").hide();
    $(".headBar").hide();
    $(".pokemonContainer").css("visibility", "hidden");
    $(".lgPokeSquareContainer").append(infoArray);
    $(".pkmnInfo").data("currentName", $(this).attr("id")).data("nextEvolution", $(this).next().attr("id"));
    var currentPokemon = $(".pkmnInfo").data("currentName");
    console.log($(this).attr("id"));
    if (currentPokemon === $(this).attr("id")) {
      $("#" + currentPokemon).addClass("selected");
    }
    evolveFunction();
    addStatsData();
    $("div.pokeSquare.evolSquare").show();

  });

  $(".xIcon").on("click", function(e) {
    if ($(".searchInput").val() !== "") {
      document.getElementById("myForm").submit();
    }
    $("div.mainContainer").css("overflow", "scroll");
    $(".cpResults").empty();
    $(".cpCalc").slideUp();
    $(".overlay").children().remove(".pokeSquare", ".pkmnInfo");
    $(".pokemonContainer").css("visibility", "visible").fadeIn("slow");
    $(".searchContainer").show();
    $(".headBar").show();
    $(".overlay").fadeOut("slow");
    $("#pokedex").fadeOut();
    $(".xIcon").hide();
    $("#soundButton").show();
    $(".statsInfo").empty();
    $(".cpInput").val("");
    $(".evolContainer").empty();
    $(".lgPokeSquareContainer").empty();
    $("#Nidoran♀").removeClass("selected");
    $("#Nidoran♂").removeClass("selected");

  });

  function calculateCP() {
    var results = [];
    $(".cpResults").empty();
    var currentPokemon = $(".pkmnInfo").data("currentName");
    var nextEvolution = $(".pkmnInfo").data("nextEvolution");
    var resultMsg = " ";
    var currentCP = $(".cpInput").val();
    var evolvedPkmn = "";
    var avgCP = 0;
    var cpEntered = " ";
    var multipliers = " ";
    var avgMsg = " ";
    results.push($("<h2>").text("This Pokemon has no Evolutions!"));
    var cpPokemon = pokeCP.pokemon;
    for (var i = 0; i < cpPokemon.length; i++) {
      if (cpPokemon[i].Name === currentPokemon) {
        if (currentPokemon === "Vaporeon" || currentPokemon === "Jolteon" || currentPokemon === "Flareon") {

        } else if (currentPokemon === "Eevee") {
          results = [];
          evolvedPkmn = $("<h2>").text("Your " + cpPokemon[i].Name + " will evolve into: Vaporeon, Jolteon, or Flareon");
          results.push(evolvedPkmn);
          for (var x = 1; x < 4; x++) {
            var eevEvo = $("<h2>").text(cpPokemon[i + x].Name);
            cpEntered = $("<h3>").text("CP Entered: " + currentCP);
            avgCP = Math.floor(((Math.round(cpPokemon[i + x].minCP * 100) / 100) + (Math.round(cpPokemon[i + x].maxCP * 100) / 100)) / 2 * currentCP);
            resultMsg = $("<h3>").text("New CP: " + Math.round(cpPokemon[i + x].minCP * currentCP) + " - " + Math.round(cpPokemon[i + x].maxCP * currentCP));
            avgMsg = $("<h3>").text("CP Avg: " + avgCP);
            multipliers = $("<h3>").text("CP Multipliers: " + cpPokemon[i + x].minCP + " - " + cpPokemon[i + x].maxCP);
            results.push(eevEvo, cpEntered, resultMsg, multipliers);
          }
        } else {
          results = [];
          evolvedPkmn = $("<h2>").text("Your " + cpPokemon[i].Name + " will evolve into: " + nextEvolution);
          avgCP = Math.floor(((Math.round(cpPokemon[i].minCP * 100) / 100) + (Math.round(cpPokemon[i].maxCP * 100) / 100)) / 2 * currentCP);
          cpEntered = $("<h3>").text("CP Entered: " + currentCP);
          resultMsg = $("<h3>").text("New CP: " + Math.round(cpPokemon[i].minCP * currentCP) + " - " + Math.round(cpPokemon[i].maxCP * currentCP));
          avgMsg = $("<h3>").text("CP Avg: " + avgCP);
          multipliers = $("<h3>").text("CP Multipliers: " + cpPokemon[i].minCP + " - " + cpPokemon[i].maxCP);
          results.push(evolvedPkmn, cpEntered, avgMsg, resultMsg, multipliers);
          $(".cpInput").val(avgCP);
        }

      }

    }

    $(".cpResults").append(results);

    $("div#" + nextEvolution + ".pokeSquare.evolSquare").click();

  }

  function addStatsData() {
    $(".statsInfo").empty();
    var statsArray = [];
    var currentPokemon = $(".pkmnInfo").data("currentName");
    for (var i = 0; i < pokemon.length; i++) {
      if (pokemon[i].Name === currentPokemon) {
        statsArray.push($("<h4>").addClass("statHeading").text("General"));
        for (var key in pokemon[i]) {
          if (key === "Id" || key === "Name" || key === "Types") {
            statsArray.push($("<h5>").addClass("generalStats").text(key + " : " + pokemon[i][key]));
          }
        }
        statsArray.push($("<h4>").addClass("statHeading").text("Encounters"));
        for (var encounters in pokemon[i].Encounter) {
          statsArray.push($("<h5>").addClass("encountersStats").text(encounters + " : " + pokemon[i].Encounter[encounters]));
        }
        statsArray.push($("<h4>").addClass("statHeading").text("Base Stats"));
        for (var stats in pokemon[i].Stats) {
          statsArray.push($("<h5>").addClass("baseStats").text(stats + " : " + pokemon[i].Stats[stats]));
        }
        statsArray.push($("<h4>").addClass("statHeading").text("Evolutions"));
        for (var evolutions in pokemon[i].Evolutions) {
          for (var evolutions2 in pokemon[i].Evolutions[evolutions]) {
            statsArray.push($("<h5>").addClass("generalStats").text(evolutions2 + " : " + pokemon[i].Evolutions[evolutions][evolutions2]));
          }

        }
      }
    }

    $(".statsInfo").append(statsArray);
  }

  $(".statsBar").on("click", function(e) {
    e.preventDefault();
    $(".pkmnInfo").animate({
      scrollTop: $($(this).children().attr('href')).offset().top
    }, 300);
    if ($(".statsInfoContainer").is(":visible")) {

      $(".statsInfoContainer").slideUp();

    } else {
      addStatsData();
      $(".statsInfoContainer").slideDown();

    }
  });

  $(".evolveButton").on("click", calculateCP);

  function evolveFunction() {
    $(".evolContainer").empty();
    var currentPokemon = $(".pkmnInfo").data("currentName");
    var evolutionsArray = [];
    for (var i = 0; i < pokemon.length; i++) {
      if (pokemon[i].Name === currentPokemon) {
        for (var evolutions in pokemon[i].Evolutions) {
          for (var evolutions2 in pokemon[i].Evolutions[evolutions]) {
            evolutionsArray.push($("#" + pokemon[i].Evolutions[evolutions][evolutions2]).clone(true).addClass("evolSquare").removeClass("lgPokeSquare"));

          }

        }
      }
    }

    evolutionsArray[1].splice(1, 1);
    $(".evolContainer").append(evolutionsArray);

  }

  $(".evolutionBar").on("click", function(e) {
    e.preventDefault();
    if ($(".evolContainer").is(":visible")) {
      $(".evolContainer").slideUp();
    } else {
      $(".evolContainer").slideDown();

    }
  });

  $(".pokemonBar").on("click", function() {
    if ($(".lgPokeSquareContainer").is(":visible")) {
      $(".lgPokeSquareContainer").slideUp();
    } else {
      $(".lgPokeSquareContainer").slideDown();
    }
  });

});

// $( "input" )
// .keyup(function(e) {
//   var value = $( this ).val();

//  console.log(value);
// })
// .keyup();