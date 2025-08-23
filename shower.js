onEvent("5timer", "click", function() {
    console.log("Timer clicked");
    setImageURL("5timer", "zerotimer.png");
    setImageURL("shower", "duck.png");
    playSound("timer.wav", false);
});