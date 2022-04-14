const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP('209.50.36.216', (error, coordinates) =>{
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked!", coordinates);
// });

// fetchISSFlyOverTimes({
//   latitude: 45.4995,
//   longitude: -73.5848
// }, (error, arrayOfFlyOvers) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked!', arrayOfFlyOvers);
// });

const printOutPassTimes = (passTimes) => {
  for (let passTime of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(passTime.risetime);
    console.log(`Next pass at ${datetime} for ${passTime.duration} seconds!`);
  }
  return;
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printOutPassTimes(passTimes);
  return;
});
