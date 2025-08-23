onEvent("gBottle", "click", function() {
    console.log("Glass bottle clicked");
    const gBottle = document.getElementById('gBottle');
    gBottle.style.position = 'absolute'; // Or 'relative', 'fixed'
    gBottle.style.left = '170px';
    gBottle.style.top = '800px';
});

onEvent("faucet", "click", function() {
   console.log("Faucet clicked");
    setProperty("gBottle", "background-color", "lightblue");
});

onEvent("pBottle", "click", function() {
    console.log("Plastic bottle clicked");
    setProperty("pBottle", "background-color", "red");
});