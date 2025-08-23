setProperty("WaterAppTitle", "color", "navy");
setProperty("ptag", "background-color", "lightblue");

onEvent("spanishBtn", "click", function() {
    setText("WaterAppTitle", "Consejos de Conservación de Agua");
    setText("ptag", "Es importante que todos hagamos nuestra parte para usar menos");
});

onEvent("englishBtn", "click", function() {
    setText("WaterAppTitle", "Water Conservation Tips");
    setText("ptag", "It's important that we all do our part to use less water.");
});