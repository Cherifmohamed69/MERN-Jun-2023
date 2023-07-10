function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// console.log(tossCoin());

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function tossCoinPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tossCoin());
    }, 1000);
  });
}
function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    function flipCoin() {
      attempts++;
      tossCoinPromise()
        .then((result) => {
          console.log(`${result} was flipped`);
          if (result === "heads") {
            headsCount++;
          } else {
            headsCount = 0;
          }
          if (headsCount === 5) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
          } else {
            flipCoin();
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
    flipCoin();
  });
}
fiveHeads()
  .then((result) => {
    console.log(result);
    console.log("This is run after the fiveHeads function completes");
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
