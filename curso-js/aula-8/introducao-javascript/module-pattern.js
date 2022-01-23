console.log("=== MODULE PATTERN ===");

// IIFE - Immediately Invoked Function Expression
const APP = (function () {
  
  console.log("Starting...");

  const aluraLytics = {
    count: 0
  };

  aluraLytics.addCount = function () {
    return aluraLytics.count += 1;
  };

  aluraLytics.resetCount = function () {
    return aluraLytics.count = 0;
  };

  aluraLytics.getCount = function () {
    return aluraLytics.count;
  };

  console.log(aluraLytics);
  
  // API
  // return aluraLytics;
  return { 
    add: aluraLytics.addCount,
    get: aluraLytics.getCount
  };

})();
