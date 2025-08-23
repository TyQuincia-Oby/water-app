setProperty("WaterAppTitle", "color", "navy");
setProperty("ptag", "background-color", "lightblue");
setProperty("ptag", "padding", "10px");

onEvent("spanishBtn", "click", function() {
    console.log("Spanish button clicked");
    setText("WaterAppTitle", "Consejos de Conservación de Agua");
    setText("ptag", "Es importante que todos hagamos nuestra parte para usar menos");
});

onEvent("englishBtn", "click", function() {
    console.log("English button clicked");
    setText("WaterAppTitle", "Water Conservation Tips");
    setText("ptag", "It's important that we all do our part to use less water.");
});