import sketch from 'sketch'
import UI from 'sketch/ui'
import utils from './utils.js'

let document = sketch.fromNative(context.document);
var Artboard = require('sketch/dom').Artboard

// documentation: https://developer.sketchapp.com/reference/api/


function updateChangelog () {
  let frame = document.selectedPage.frame;
}

function createChangelog() {
  let frame = document.selectedPage.frame;

  frame.width  = 600;
  frame.height = 800;

  var artboard = new Artboard({
    name: 'Changelog',
    frame: frame
  })
  document.selectedPage.layers.push(artboard);
}

export default function() {
  utils.getArtboardByName('Changelog').then(artboard => {
    // If there is a Artboard called 'Changelog' update the existing one
    console.log('Changelog Artboard already exists – updating the current view');
    updateChangelog(artboard);

  }).catch(error => {
    // If there is no Artboard called 'Changelog' create a new one
    console.log('There is no Artboard called Changelog – creating a new one');
    createChangelog();
  });



  // UI.getInputFromUser(
  //   "What did you change?",
  //   {
  //     initialValue: 'Some Change here…',
  //   },
  //   (err, value) => {
  
  //     if (err) {
  //       // most likely the user canceled the input
  //       return
  //     }
  //   }
  // )

}



