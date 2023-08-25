// Good Luck 💪🏾
function brokenKeys(correct, typed) {
    // create an empty set to store the broken keys
    let broken = new Set();
    // loop through the correct phrase
    for (let i = 0; i < correct.length; i++) {
      // check if the corresponding character in the typed phrase is different
      if (correct[i] !== typed[i]) {
        // add the correct character to the broken set
        broken.add(correct[i]);
      }
    }
    // return the broken set as an array
    return [...broken];
  }
  console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp"))
  console.log(brokenKeys("good night", "gppd night"))