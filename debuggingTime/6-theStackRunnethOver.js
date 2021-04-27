function lookInTheBox (box) {
  if (box.innerBoxes) {
    box.innerBoxes.forEach(aBox => lookInTheBox(box))
  }
  else {
    console.log(`Found this in the box: ${theBox}`)
  }
}

const theBox = {
  innerBoxes: [{
    innerBoxes: [{
      innerBoxes: []
    }],
  }, {
    innerBoxes: [{
      hey: "this is what's in the box!",
    }]
  }]
};

lookInTheBox(theBox)