window.onload = function() {

  var ajaxBtn = document.getElementById('ajaxBtn');
  ajaxBtn.addEventListener('click' , function() {

      // Fetch flag status
      fetch("http://localhost:5000/test").then(function(resp) {
        // Convert response to JSON
        return resp.json()
      }).then(function(data) {

        // Execute instructions with
        // new flag statuses
        console.log(data)
        if(data.scrollUp === 1) {
          var script = 'window.scrollBy(0,-100);';
          chrome.tabs.executeScript({
            code : script
          });

        } else if(data.scrollDown === 1) {
          var script = "window.scrollBy(0,100);" ;
          chrome.tabs.executeScript({
            code : script
          });

        } else if(data.scrollRight === 1) {
          var script = "window.scrollBy(100,0);" ;
          chrome.tabs.executeScript({
            code : script
          });

        } else if(data.scrollLeft === 1) {
          var script = "window.scrollBy(-100,0);" ;
          chrome.tabs.executeScript({
            code : script
          });

        } else if(data.zoomIn === 1) {
          var queryTab = {
            active : true,
            currentWindow : true
          };

          // Query all tabs in all open windows to find the tab(s)
          // that match the specifications in the queryTab object
          chrome.tabs.query(queryTab , function(tabs) {
            // Get the id of the actve tab in the current window
            var tabId = tabs[0].id;

            chrome.tabs.getZoom(tabId , function(zoomFactor) {
               var newZoom = zoomFactor + 0.25;
               // Set the new zoom for the tab
               chrome.tabs.setZoom(tabId , newZoom , function(){
               });
            });
          });

        } else if(data.zoomOut === 1) {
          var queryTab = {
            active : true,
            currentWindow : true
          };

          // Query all tabs in all open windows to find the tab(s)
          // that match the specifications in the queryTab object
          chrome.tabs.query(queryTab , function(tabs) {
            // Get the id of the actve tab in the current window
            var tabId = tabs[0].id;

            chrome.tabs.getZoom(tabId , function(zoomFactor) {
               var newZoom = zoomFactor - 0.25;
               // Set the new zoom for the tab
               chrome.tabs.setZoom(tabId , newZoom , function(){
               });
            });
          });
        }
      });
  });


  var video = document.getElementById('videoBox');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

  function snapshot() {
  
    console.log("IN snapshot");
    if(localMediaStream) {
      ctx.drawImage(video,0,0);
      console.log("Image Captured");
    }
  }


  navigator.webkitGetUserMedia({video : true}  ,function(stream) {
    video.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
  },(err) => {console.log(err)});

  document.getElementById('btn').addEventListener('click' , function() {
    snapshot();
    var imageURL = canvas.toDataURL();
    $('div').html("World");
    $.ajax({
        type : "POST",
        url : "http://localhost:5000/image",
        crossDomain : true,
        data : {
          image : imageURL
        }
    }).done(function(){
      console.log("Saved")
    });
  });
}
