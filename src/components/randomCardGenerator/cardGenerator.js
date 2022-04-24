const axios = require('axios').default;

var ProteinPacks = 5;
var CarbPacks = 5;
var VegPacks = 5;
var ModPacks = 5;
var WildPacks = 5;

async function RandomCardGenerator() {

  try{
    const cards = await axios.get('http://localhost:8080/api');
    console.log(cards.data);
  
    var min = 0;
    var max = 20;

    var randomProtein = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomCarb = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomVeg = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomWild = Math.floor(Math.random() * (max - min + 1)) + min;
    var randomMod = Math.floor(Math.random() * (max - min + 1)) + min;

    // console.log(randomProtein);
    // console.log(randomCarb);
    // console.log(randomVeg);
    // console.log(randomMod);
    // console.log(randomWild);



    if (ProteinPacks <= 5 && ProteinPacks > 0) {
      if (randomProtein <= 9) {
        //Chicken
        console.log("Random Protein = Chicken");
        var card_info = cards.data[0].Cardobject[0];
        var cardname = card_info.Card_Name;
        document.getElementById("randomProtein").value = cardname;
      } else if (randomProtein >= 10 && randomProtein <= 14) {
        //Salmon
        console.log("Random Protein = Salmon");
        var card_info = cards.data[0].Cardobject[1];
        var cardname = card_info.Card_Name;
        document.getElementById("randomProtein").value = cardname;
      } else if (randomProtein >= 15 && randomProtein <= 19) {
        //Turkey
        console.log("Random Protein = Turkey");
        var card_info = cards.data[0].Cardobject[2]; 
        var cardname = card_info.Card_Name;
        document.getElementById("randomProtein").value = cardname;
      } else if (randomProtein >= 20) {
        //Steak
        console.log("Random Protein =  Steak");
        var card_info = cards.data[0].Cardobject[3];
        var cardname = card_info.Card_Name;
        document.getElementById("randomProtein").value = cardname;
      }
    } else {
      document.getElementById("randomProtein").value = "No Protein Packs Left!";
    }

    // console.log("Random Carb = " + randomVeg)
    if (VegPacks <= 5 && VegPacks > 0) {
      if (randomVeg <= 9) {
        //Broccoli
        console.log("Random Veg = Sprouts");
        var card_info = cards.data[1].Cardobject[0];
        var cardname = card_info.Card_Name;
        document.getElementById("randomVeg").value = cardname;
        VegPacks--;
      } else if (randomVeg >= 10 && randomVeg <= 14) {
        //Peas
        console.log("Random Veg = Peas");
        var card_info = cards.data[1].Cardobject[1]; 
        var cardname = card_info.Card_Name;
        document.getElementById("randomVeg").value = cardname;
        VegPacks--;
      } else if (randomVeg >= 15 && randomVeg <= 19) {
        //Carrots
        console.log("Random Veg = Carrots");
        var card_info = cards.data[1].Cardobject[2]; 
        var cardname = card_info.Card_Name;
        document.getElementById("randomVeg").value = cardname;
        VegPacks--;
      } else if (randomVeg >= 20) {
        //Sprouts
        console.log("Random Veg = Broccoli");
        var card_info = cards.data[1].Cardobject[3]; 
        var cardname = card_info.Card_Name;
        document.getElementById("randomVeg").value = cardname;
        VegPacks--;
      }
    } else {
      document.getElementById("randomVeg").value = "No Veg Packs Left!";
    }

    // console.log("Random Veg = " + randomProtein)
    if (CarbPacks <= 5 && CarbPacks > 0) {
      if (randomCarb <= 9) {
        // Potatoes
        console.log("Random Carb = Potatoes");
        var card_info = cards.data[2].Cardobject[0];
        var cardname = card_info.Card_Name;
        document.getElementById("randomCarb").value = cardname;
        CarbPacks--;
      } else if (randomCarb >= 10 && randomCarb <= 14) {
        //Chips
        console.log("Random Carb = Chips");
        var card_info = cards.data[2].Cardobject[1];
        var cardname = card_info.Card_Name;
        document.getElementById("randomCarb").value = cardname;
        CarbPacks--;
      } else if (randomCarb >= 15 && randomCarb <= 19) {
        //Pasta
        console.log("Random Carb = Pasta");
        var card_info = cards.data[2].Cardobject[2];
        var cardname = card_info.Card_Name;
        document.getElementById("randomCarb").value = cardname;
        CarbPacks--;
      } else if (randomCarb >= 20) {
        //Rice
        console.log("Random Carb = Rice");
        var card_info = cards.data[2].Cardobject[3];
        var cardname = card_info.Card_Name;
        document.getElementById("randomCarb").value = cardname;
        CarbPacks--;
      }
    } else {
      document.getElementById("randomCarb").value = "No Carb Packs Left!";
    }

    if (ModPacks <= 5 && ModPacks > 0) {
      if (randomMod <= 9) {
        // Salt and Pepper
        console.log("Random Modifier = Salt and Pepper");
        var card_info = cards.data[3].Cardobject[0];
        var cardname = card_info.Card_Name;
        document.getElementById("randomMod").value = cardname;
        ModPacks--;
      } else if (randomMod >= 10 && randomMod <= 14) {
        //Ketchup
        console.log("Random Modifier = Ketchup");
        var card_info = cards.data[3].Cardobject[1];
        var cardname = card_info.Card_Name;
        document.getElementById("randomMod").value = cardname;
        ModPacks--;
      } else if (randomMod >= 15 && randomMod <= 19) {
        //Gravy
        console.log("Random Modifier = Gravy");
        var card_info = cards.data[3].Cardobject[2];
        var cardname = card_info.Card_Name;
        document.getElementById("randomMod").value = cardname;
        ModPacks--;
      } else if (randomMod >= 20) {
        //Saffron
        console.log("Random Modifier = Saffron");
        var card_info = cards.data[3].Cardobject[3];
        var cardname = card_info.Card_Name;
        document.getElementById("randomMod").value = cardname;
        ModPacks--;
      }
    } else {
      document.getElementById("randomMod").value = "No Modifier Packs Left!";
    }

    if (WildPacks <= 5 && WildPacks > 0) {
      if (randomWild <= 9) {
        //Trip the Chef
        console.log("Random Wildcard = Trip the Chef");
        var card_info = cards.data[4].CardObject[0];
        var cardname = card_info.Card_Name;
        document.getElementById("randomWild").value = cardname;
        WildPacks--;
      } else if (randomWild >= 10 && randomWild <= 14) {
        //Push Your Opponent
        console.log("Random WildCard = Push Your Opponents Food Off The Table");
        var card_info = cards.data[4].CardObject[1];
        var cardname = card_info.Card_Name;
        document.getElementById("randomWild").value = cardname;
        WildPacks--;
      } else if (randomWild >= 15 && randomWild <= 19) {
        //Ramsay Complements
        console.log("Random Wildcard = Ramsay Complements");
        var card_info = cards.data[4].CardObject[2];
        var cardname = card_info.Card_Name;
        document.getElementById("randomWild").value = cardname;
        WildPacks--;
      } else if (randomWild >= 20) {
        //Cooked to Perfection
        console.log("Random Wildcard = Cooked to Perfection");
        var card_info = cards.data[4].CardObject[3];
        var cardname = card_info.Card_Name;
        document.getElementById("randomMod").value = cardname;
        WildPacks--;
      }
    } else {
      document.getElementById("randomMod").value = "No Modifier Packs Left!";
    }
  }
  catch(error){
    console.error(error);
  }
}

export { ProteinPacks, CarbPacks, VegPacks };
export default RandomCardGenerator;
