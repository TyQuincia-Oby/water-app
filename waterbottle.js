var score = 0;
onEvent("gBottle", "click", function() {
    console.log("Glass bottle clicked");
    const gBottle = document.getElementById('gBottle');
    gBottle.style.position = 'absolute'; // Or 'relative', 'fixed'
    gBottle.style.left = '150px';
    gBottle.style.top = '700px';
    score = score + 1;
    setText("scoreLabel", score);
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
    score = score - 1;
    setText("scoreLabel", score);
});

setProperty("Score", "font-size", "30px");
setProperty("Score", "font-weight", "bold");
setProperty("Score", "color", "blue");
setProperty("scoreLabel", "font-size", "24px");
setProperty("scoreLabel", "font-weight", "bold");
setProperty("scoreLabel", "color", "orange");