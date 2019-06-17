
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  planets = planets.reverse();
  
  
  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  
  planets.forEach( function(item) { 
    var o = document.createElement("option");
    o.text = item[0];
    o.value = item[0];
    document.getElementById("planets").appendChild(o);
 });


  function calculateWeight(weight, planetName) {
    var result;
    planets.forEach(function(item) {
      if(item[0] === planetName) {
        result = weight * item[1]
      }
    })

    return result;
  }
  
  function handleClickEvent(e) {
    var newWeight;
    var currentWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value
    currentWeight = parseInt(currentWeight, 10);
    if(currentWeight) {
      newWeight = calculateWeight(currentWeight, planetName);
    }
   var output = document.getElementById("output");
   output.innerText = "If you were on " + planetName + ", you would weigh " + newWeight + "lbs!";
  
  }

  document.getElementById("calculate-button").onclick = handleClickEvent
  


  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  // Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)