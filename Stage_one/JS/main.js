    // JavaScript code
    document.addEventListener('DOMContentLoaded', function() {
      // Get current day of the week
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var currentDate = new Date();
      var currentDay = days[currentDate.getDay()];
      document.getElementById('currentDay').textContent = currentDay;
      
      // Get current UTC time
      var currentUTC = Date.now();
      document.getElementById('currentUTC').textContent = currentUTC;
    });