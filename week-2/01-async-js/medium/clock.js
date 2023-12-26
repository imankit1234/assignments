function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Format time as HH:MM:SS
    const formattedTime = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
  
    // Format time as HH:MM:SS AM/PM
    const formattedTimeWithAMPM = padZero(hours % 12 || 12) + ':' + padZero(minutes) + ':' + padZero(seconds) + ' ' + ampm;
  
    // Log the formatted time to the console (you can replace this with your own display logic)
    console.log('24-Hour Format:', formattedTime);
    console.log('12-Hour Format:', formattedTimeWithAMPM);
  }
  
  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial update
  updateClock();
  