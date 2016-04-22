//Clicks the 'Load More' button
function loadMore() {
    loadButton = document.querySelector('.load-more-button');
    if(loadButton != undefined) {
        loadButton.click();
        window.scrollTo(0,0);
    }
    else {
        clearInterval(callback);
        proceed();
    }
    return;
}
//Load the entire playlist by clicking the 'Load More' button repeatedly
var loadButton;
var callback = setInterval(loadMore, 250);

function proceed() {
function getDuration() {
    var timeStamp = document.querySelectorAll('.timestamp span'),
        totalDurationInSeconds = 0,
        hours, minutes, seconds;
    //Runs the loop and fetches the total duration in seconds
    for (var i = 0; i < timeStamp.length; i++) {
        var timeString = timeStamp[i].innerHTML;
        var HMS = timeString.split(':');
        if(HMS.length === 3) {
            hours   = parseInt(HMS[0]);
            minutes = parseInt(HMS[1]);
            seconds = parseInt(HMS[2]);
        }
        else {
            hours   = 0;
            minutes = parseInt(HMS[0]);
            seconds = parseInt(HMS[1]);
        }
        totalDurationInSeconds += hours*3600 + minutes*60 + seconds;
    }
    //Converting Seconds to HH MM SS
    function secondsToHMS(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return ((h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s);
    }

    totalDuration = secondsToHMS(totalDurationInSeconds);
    return totalDuration;
}

var parentElement = document.getElementById('masthead-appbar-container');
var firstChildElement = parentElement.firstChild;

//Create div and style it
function createDiv(){
    var timeStampDiv = document.createElement('div');
    var HMSDuration  = getDuration();
    var textNodeText = document.createTextNode(HMSDuration);
    var headerPara   = document.createElement('p');
    var headerText   = document.createTextNode('Playlist Duration');
    var durationSpan = document.createElement('span');
    timeStampDiv.style.cssText = 'right: 0px; height: 32px;color: #767676; position: fixed; float: right; display: inline-block; z-index: 1; padding: 3px; text-align: center; border-radius: 2px; border-style: dotted; background-color: rgba(255, 255, 255, 0.74902);';
    timeStampDiv.onclick = function() {
       timeStampDiv.style.display = 'none';
    };
    headerPara.appendChild(headerText);
    headerPara.style.cssText = 'font-weight: 500; color: #404040;';
    durationSpan.appendChild(textNodeText);
    timeStampDiv.appendChild(headerPara);
    timeStampDiv.appendChild(durationSpan);
    parentElement.insertBefore(timeStampDiv, firstChildElement);
}

createDiv();
};