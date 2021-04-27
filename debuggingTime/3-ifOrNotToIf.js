const STOP = 'STOP';
const PROCEED = 'PROCEED';
const CAUTION = 'CAUTION';

const stopLight = {
  state: STOP,
}

function cycleStopLight (stopLight) {
  if (stopLight.state === STOP) {
    stopLight.state = PROCEED;
  }
  else (stopLight.state === PROCEED) {
    stopLight.state = CAUTION;
  }
  else (stopLight.state === CAUTION) {
    stopLight.state = STOP;
  }
}

cycleStopLight(stopLight);
console.log(stopLight);

cycleStopLight(stopLight);
console.log(stopLight);

cycleStopLight(stopLight);
console.log(stopLight);