var currentDay = $("#currentDay");
var timeBlockContainer = $("#time-blocks-container");
var dayjsObject = dayjs();
var textarea1 = $("#text-area-1")
var textarea2 = $("#text-area-2")
var textarea3 = $("#text-area-3")
var textarea4 = $("#text-area-4")
var textarea5 = $("#text-area-5")
var textarea6 = $("#text-area-6")
var textarea7 = $("#text-area-7")
var textarea8 = $("#text-area-8")
var textarea9 = $("#text-area-9")
var btn = $("button")
var formattedDate = dayjsObject.format("dddd, MMMM DD, YYYY");
var currentTime =  parseInt(dayjsObject.format("HH" ));
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hour5 = $("#hour-5");
var timeBlock1 = $("#time-block-1");
var timeBlock2 = $("#time-block-2");
var timeBlock3 = $("#time-block-3");
var timeBlock4 = $("#time-block-4");
var timeBlock5 = $("#time-block-5");
var timeBlock6 = $("#time-block-6");
var timeBlock7 = $("#time-block-7");
var timeBlock8 = $("#time-block-8");
var timeBlock9 = $("#time-block-9");
var hour9Value = hour9.value = 9;
var hour10Value = hour10.value = 10;
var hour11Value = hour11.value = 11;
var hour12Value = hour12.value = 12;
var hour1Value = hour1.value = 13;
var hour2Value = hour2. value = 14;
var hour3Value = hour3. value = 15;
var hour4Value = hour4.value = 16;
var hour5Value = hour5.value = 17;

function timeBlock1Color(){
   hour9.html("9")
  if(currentTime === hour9Value)
   timeBlock1.addClass("present");
  else if(currentTime < hour9Value )
    timeBlock1.addClass("future");
  else if(currentTime > hour9Value )
    timeBlock1.addClass("past");
};

function timeBlock2Color(){
    hour10.html("10")
    if(currentTime === hour10Value)
     timeBlock2.addClass("present");
    else if(currentTime < hour10Value )
      timeBlock2.addClass("future");
    else if(currentTime > hour10Value )
      timeBlock2.addClass("past");
};

function timeBlock3Color(){
    hour11.html("11")
    if(currentTime === hour11Value)
     timeBlock3.addClass("present");
    else if(currentTime < hour11Value )
      timeBlock3.addClass("future");
    else if(currentTime > hour11Value )
      timeBlock3.addClass("past");
};

function timeBlock4Color(){
    hour12.html("12")
    if(currentTime === hour12Value)
     timeBlock4.addClass("present");
    else if(currentTime < hour12Value )
      timeBlock4.addClass("future");
    else if(currentTime > hour12Value )
      timeBlock4.addClass("past");
};

function timeBlock5Color(){
    hour1.html("1")
    if(currentTime === hour1Value)
     timeBlock5.addClass("present");
    else if(currentTime < hour1Value )
      timeBlock5.addClass("future");
    else if(currentTime > hour1Value )
      timeBlock5.addClass("past");
};

function timeBlock6Color(){
    hour2.html("2")
    if(currentTime === hour2Value)
     timeBlock6.addClass("present");
    else if(currentTime < hour2Value )
      timeBlock6.addClass("future");
    else if(currentTime > hour2Value )
      timeBlock6.addClass("past");
};

function timeBlock7Color(){
    hour3.html("3")
    if(currentTime === hour3Value)
     timeBlock7.addClass("present");
    else if(currentTime < hour3Value )
      timeBlock7.addClass("future");
    else if(currentTime > hour3Value )
      timeBlock7.addClass("past");
};

function timeBlock8Color(){
    hour4.html("4")
    if(currentTime === hour4Value)
     timeBlock8.addClass("present");
    else if(currentTime < hour4Value )
      timeBlock8.addClass("future");
    else if(currentTime > hour4Value )
      timeBlock8.addClass("past");
};

function timeBlock9Color(){
    hour5.html("5")
    if(currentTime === hour5Value)
     timeBlock9.addClass("present");
    else if(currentTime < hour5Value )
      timeBlock9.addClass("future");
    else if(currentTime > hour5Value )
      timeBlock9.addClass("past");
};

function saveData(){
    var textareaValue = {
        text1: textarea1.val(),
        text2: textarea2.val(),
        text3: textarea3.val(),
        text4: textarea4.val(),
        text5: textarea5.val(),
        text6: textarea6.val(),
        text7: textarea7.val(),
        text8: textarea8.val(),
        text9: textarea9.val(),
    };
    localStorage.setItem("list-item", JSON.stringify(textareaValue))
}
function renderData(){
    var listitem = JSON.parse(localStorage.getItem("list-item"))
if (listitem !== null){
    textarea1.html(listitem.text1);
    textarea2.html(listitem.text2);
    textarea3.html(listitem.text3);
    textarea4.html(listitem.text4);
    textarea5.html(listitem.text5);
    textarea6.html(listitem.text6);
    textarea7.html(listitem.text7);
    textarea8.html(listitem.text8);
    textarea9.html(listitem.text9);
}
else{
    return;
}}

$(function() {
    currentDay.html(formattedDate)
    timeBlock1Color()
    timeBlock2Color()
    timeBlock3Color()
    timeBlock4Color()
    timeBlock5Color()
    timeBlock6Color()
    timeBlock7Color()
    timeBlock8Color()
    timeBlock9Color()
    btn.on('click', function(event){
        event.preventDefault();
        saveData()
        renderData()
});
});
$(document).ready(renderData());
