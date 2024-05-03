
document.addEventListener("DOMContentLoaded", function() {
  let countButton = document.getElementById("countButton");
  let resetButton = document.getElementById("resetButton");
  let counter = 0;

  countButton.addEventListener("click", function() {
    if (counter < 10){
      counter += 1;
      document.getElementById("result").innerHTML = counter;
    }else{
      counter = 0;
      document.getElementById("result").innerHTML = counter;

    }

  });

  resetButton.addEventListener("click", function() {
    counter = 0;
    document.getElementById("result").innerHTML = counter;
  });
});
