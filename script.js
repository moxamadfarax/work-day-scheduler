// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var dayjsObject = dayjs()
var formattedDate = dayjsObject.format("dddd, MMMM DD, YYYY") 


function newTimeBlocks(){
}

$(function() {
    currentDay.html(formattedDate)

    for(var i = 0; i< 12; i++ ){
        console.log('poooo')
        
        }

  });
  