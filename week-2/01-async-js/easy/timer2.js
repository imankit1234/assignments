let n = 0;

function timer() {
  console.log(n++);
 
    setTimeout(timer, 1000);
  
}

// Start the timer
timer();
