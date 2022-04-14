var ProteinPacks = 5;
var CarbPacks = 5;
var VegPacks = 5;

function RandomCardGenerator() {
  var min = 0;
  var max = 20;

  var randomProtein = Math.floor(Math.random() * (max - min + 1)) + min;
  var randomCarb = Math.floor(Math.random() * (max - min + 1)) + min;
  var randomVeg = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(randomProtein);
  console.log(randomCarb);
  console.log(randomVeg);

  if (ProteinPacks <= 5 && ProteinPacks > 0) {
    if (randomProtein <= 9) {
      //Chicken
      console.log("Random Protein = Chicken");
      document.getElementById("randomProtein").value = "Chicken";

      ProteinPacks--;
    } else if (randomProtein >= 10 && randomProtein <= 14) {
      //Salmon
      console.log("Random Protein = Salmon");
      document.getElementById("randomProtein").value = "Salmon";
      ProteinPacks--;
    } else if (randomProtein >= 15 && randomProtein <= 19) {
      //Turkey
      console.log("Random Protein = Turkey");
      document.getElementById("randomProtein").value = "Turkey";
      ProteinPacks--;
    } else if (randomProtein >= 20) {
      //Steak
      console.log("Random Protein =  Steak");
      document.getElementById("randomProtein").value = "Steak";
      ProteinPacks--;
    }
  } else {
    document.getElementById("randomProtein").value = "No Protein Packs Left!";
  }

  // console.log("Random Veg = " + randomProtein)
  if (CarbPacks <= 5 && CarbPacks > 0) {
    if (randomCarb <= 9) {
      // Potatoes
      console.log("Random Carb = Potatoes");
      document.getElementById("randomCarb").value = "Potatoes";
      CarbPacks--;
    } else if (randomCarb >= 10 && randomCarb <= 14) {
      //Chips
      console.log("Random Carb = Chips");
      document.getElementById("randomCarb").value = "Chips";
      CarbPacks--;
    } else if (randomCarb >= 15 && randomCarb <= 19) {
      //Pasta
      console.log("Random Carb = Pasta");
      document.getElementById("randomCarb").value = "Pasta";
      CarbPacks--;
    } else if (randomCarb >= 20) {
      //Rice
      console.log("Random Carb = Rice");
      document.getElementById("randomCarb").value = "Rice";
      CarbPacks--;
    }
  } else {
    document.getElementById("randomCarb").value = "No Carb Packs Left!";
  }

  // console.log("Random Carb = " + randomVeg)
  if (VegPacks <= 5 && VegPacks > 0) {
    if (randomVeg <= 9) {
      //Broccoli
      console.log("Random Veg = Broccoli");
      document.getElementById("randomVeg").value = "Broccoli";
      VegPacks--;
    } else if (randomVeg >= 10 && randomVeg <= 14) {
      //Peas
      console.log("Random Veg = Peas");
      document.getElementById("randomVeg").value = "Peas";
      VegPacks--;
    } else if (randomVeg >= 15 && randomVeg <= 19) {
      //Carrots
      console.log("Random Veg = Carrots");
      document.getElementById("randomVeg").value = "Carrots";
      VegPacks--;
    } else if (randomVeg >= 20) {
      //Sprouts
      console.log("Random Veg = Sprouts ");
      document.getElementById("randomVeg").value = "Sprouts";
      VegPacks--;
    }
  } else {
    document.getElementById("randomVeg").value = "No Veg Packs Left!";
  }
}

export { ProteinPacks, CarbPacks, VegPacks };
export default RandomCardGenerator;
