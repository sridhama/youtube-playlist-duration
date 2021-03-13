url = window.location['href']
// if(url.indexOf("disable_polymer=true") == -1 && url.indexOf("/playlist?list=") != -1){
    // window.location = url+"&disable_polymer=true";
// }else if(url.indexOf("disable_polymer=true") != -1 && url.indexOf("/playlist?list=") != -1){
if (url.indexOf("/playlist?list=") != -1) {

// TODO: first load all videos in playlist and then calculate duration!


// WIP
//Clicks the 'Load More' button
// function loadMore() {
//     //loadButton = document.querySelector('.load-more-button');
//     num_videos = document.querySelector('.style-scope ytd-playlist-sidebar-primary-info-renderer').innerText.replace(/\n/ig, 'TEMP').split(' videos')[0].split('TEMP')
//     var num_videos = parseInt(num_videos[num_videos.length - 1])

//     do {
//         window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
//         var num_videos_loaded = document.querySelectorAll('#index-container').length
//         wait(1000);
//     } while (num_videos_loaded < num_videos);

//     // while(num_videos_loaded < num_videos){
//     //     window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

//     // }

//     // if(loadButton != undefined) {
//     //     // loadButton.click();
//     //     //window.scrollTo(0,0);
//     //     window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
//     //     wait(1000);
//     // }
//     // else {
//     //     clearInterval(callback);
//     //     proceed();
//     // }
//     return;
// }



  //Clicks the 'Load More' button
//   function loadMore() {
//       loadButton = document.querySelector('.load-more-button');
//       if(loadButton != undefined) {
//           loadButton.click();
//           window.scrollTo(0,0);
//       }
//       else {
//           clearInterval(callback);
//           proceed();
//       }
//       return;
//   }
//   //Load the entire playlist by clicking the 'Load More' button repeatedly
//   var loadButton;
//   var callback = setInterval(loadMore, 250);
setTimeout(() => { proceed(); }, 2000);
  function proceed() {
  function getDuration() {
      var timeStamp = document.querySelectorAll('.style-scope ytd-thumbnail-overlay-time-status-renderer'),
          totalDurationInSeconds = 0,
          hours, minutes, seconds;
      //Runs the loop and fetches the total duration in seconds
      for (var i = 0; i < timeStamp.length; i++) {
          var timeString = timeStamp[i].innerText;
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

      var parentElement = document.getElementById('page-manager')
      var firstChildElement = parentElement.firstChild;

      //Create div and style it
      function createDiv() {
          var timeStampDiv = document.createElement('div');
          var HMSDuration = getDuration();
          var textNodeText = document.createTextNode(HMSDuration);
          var headerPara = document.createElement('p');
          var headerText = document.createTextNode('Playlist Duration');
          var durationSpan = document.createElement('span');
          timeStampDiv.style.cssText = 'right: 0px; font-size: small;color: #000000; position: fixed; float: right; display: inline-block; z-index: 1; padding: 3px; text-align: center; border-style: dotted; background-color: rgba(249, 249, 249, 0.74902);';
          timeStampDiv.onclick = function () {
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
}else{}
