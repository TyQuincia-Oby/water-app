onEvent("gBottle", "click", function() {
    console.log("Glass bottle clicked");
    const gBottle = document.getElementById('gBottle');
    gBottle.style.position = 'absolute'; // Or 'relative', 'fixed'
    gBottle.style.left = '150px';
    gBottle.style.top = '700px';
});

onEvent("faucet", "click", function() {
   console.log("Faucet clicked");
    setProperty("gBottle", "background-color", "lightblue");
    setImageURL("faucet", "drip.png");
    playSound("water-drip.wav", true)
});

onEvent("pBottle", "click", function() {
    console.log("Plastic bottle clicked");
    setImageURL("pBottle","pBottleno.png" )
    
});