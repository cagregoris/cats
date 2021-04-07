const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  
  fs.readFile(`./data/${breed}.txt`, `utf8`, (error, data) => {
    
    console.log("In readFile's Callback: it has the data.");
    
    //ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if(!error) functionToRunWhenThingsAreDone(data); // call back function has a very descriptive name to make it clear that it is a callback function to be run when things are done.
  });
  //ISSUE: Attempting to return data out here will also not work.
  // Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};


// we try to get the return value
//const bombay = breedDetailsFromFile('Bombay');
//console.log('Return Value ', bombay) // will NOT print out the details, instead we will see undefined.

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed)
};

breedDetailsFromFile('bombay', printOutCatBreed)