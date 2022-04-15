const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = (passTimes) => {
  for (let passTime of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(passTime.risetime);
    console.log(`Next pass at ${datetime} for ${passTime.duration} seconds!`);
  }
  return;
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });