window.onload = function() {

  /*
  // Scroll Up
  // Get the button object
  var upBtn = document.getElementById('up');
  // Add event listener to scroll on click
  upBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(0,-100);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  // Scroll Down
  // Get the button object
  var downBtn = document.getElementById('down');
  // Add event listener to scroll on click
  downBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(0,100);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  //Scroll Left
  // Get the button object
  var leftBtn = document.getElementById('left');
  // Add event listener to scroll on click
  leftBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(-100,0);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  // Scroll Right
  // Get the button object
  var rightBtn = document.getElementById('right');
  // Add event listener to scroll on click
  rightBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(100,0);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  // Zoom In
  // Get the button object
  var zoomInBtn = document.getElementById('zoomIn');
  // Add event listener to scroll on click
  zoomInBtn.addEventListener('click' , function() {
   // Object with details of the tab we want
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
  });

  // Zoom In
  // Get the button object
  var zoomOutBtn = document.getElementById('zoomOut');
  zoomOutBtn.addEventListener('click' , function() {
   // Object with details of the tab we want
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
  });
  */

  var ajaxBtn = document.getElementById('ajaxBtn');

  ajaxBtn.addEventListener('click' , function() {

    /*var fetchConfig = {
      method : 'GET',
      mode : 'no-cors'
    };*/

    fetch("http://localhost:5000/test" , {mode : 'no-cors'}).then(function(resp) { 
      return resp.json()
    }).then(function(data) {
      console.log(data)
    });

  });

}
