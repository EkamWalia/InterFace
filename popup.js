window.onload = function() {

  // Scroll Up
  var upBtn = document.getElementById('up');
  upBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(0,-100);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  // Scroll Down
  var downBtn = document.getElementById('down');
  downBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(0,100);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  //Scroll Left
  var leftBtn = document.getElementById('left');
  leftBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(-100,0);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

  // Scroll Right
  var rightBtn = document.getElementById('right');
  rightBtn.addEventListener('click' , function() {
    var script = "window.scrollBy(100,0);" ;
    chrome.tabs.executeScript({
      code : script
    });
  });

}
