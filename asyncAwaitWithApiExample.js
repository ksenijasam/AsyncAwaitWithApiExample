function promiseWith4000Timeout(correct = true) {
    try{
      // rrr;
      return new Promise((resolve, reject) => {
          if(correct) {
            setTimeout(() => resolve('done4000'), 4000);
          }

          setTimeout(() => reject('greska'), 4000);
      });
    }
    catch(e) {
      console.log('Error4000');
    }
}

function promiseWith5000Timeout() {
    try {
      return new Promise((resolve) => {
        setTimeout(() => resolve('done5000'), 5000);
      });
    }
    catch(e) {
      console.log('Error5000')
    }
}

function promiseWith9000Timeout() {
    try {
      return new Promise((resolve) => {
        setTimeout(() => resolve('done9000'), 9000);
      });
    }
    catch(e) {
      console.log('Error9000')
    }
}

function randomMusicGenreGenerator() {
  fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/4") // random music genres generator
   .then((response) => response.json())
   .then((result) => {
      console.log('Random genres: ' + result);
    })
    .catch('Something went wrong.');
  }

  async function advice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice"); //advices generator
    const result = await response.json();
    console.log("Advice:", result.slip.advice);
  } catch (error) {
    console.error("Nema savjeta danas.");
  }
}

async function testingAsyncCode() {
  try {
    console.log('prije')

    promiseWith9000Timeout().then((value) => {
      console.log(value);
    });

    randomMusicGenreGenerator();
    advice();
    
    let awaitedCode = await promiseWith4000Timeout(false);
    console.log(awaitedCode);
    let awaitedCode2 = await promiseWith5000Timeout();
    console.log(awaitedCode2);

    console.log('poslije');
  }
  catch(e) {
    console.log(e);
  }
  
}

testingAsyncCode();
