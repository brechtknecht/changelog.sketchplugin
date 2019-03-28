import sketch from 'sketch'
import UI from 'sketch/ui'
import utils from './utils.js'

// documentation: https://developer.sketchapp.com/reference/api/


export default function() {
  utils.getLayerFromArtboardByName('Rectangle','Changelog').then(result => {
    console.log(result);
  })



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



