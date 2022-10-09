function join() {
    console.log("workin")
}
function tst() {
    console.log("disc")
}

var header = document.getElementById('header');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  
  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / 110;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

function cpu() {
  document.getElementById("tit1desc").innerText = 'This tab shows your Processors Specifications in a detailed and easy way so you dont have to bother with the trouble to find the information you need ralating to the processor and waste time. We made it so that all necessary information is displayed in one tab which refreshes every second so you dont miss out anything'

  return false;
}
function mem() {
  document.getElementById("tit1desc").innerText = 'This tab shows your Memory Specifications (Ram) in a detailed way so you can easily get to know what type of RAM your pc has and how fast are those rams. All the necessary information is in one tab so you dont have to wander around and use third party applications'

  return false;
}
function disk() {
  document.getElementById("tit1desc").innerText = 'This tab shows your Disk Partition Specifications in a detailed way with a refresh button so you dont have to relaunch app.It has a cool animation when rendering the information to the tab and everything you need to know relating your drive is shown in this tab in a detailed and understandable way'

  return false;
}
function os() {
  document.getElementById("tit1desc").innerText = 'This tab shows your operating system info straight forward without redirecting you to any other useless information section, Everything you need to know about your operating system is displayed here along with the serial number. Your PC name is also shown so you can remember it when you need it'

  return false;
}
function gpu() {
  document.getElementById("tit1desc").innerText = 'This tab shows your Graphics Controllers(Adapters) along with displays. Both controllers useful Information can be found in this tab and the Displays itself are shown in a detailed way.Both controllers and Displays vendor along with Vram(Video random access memory) can be found here'

  return false;
}
function net() {
  document.getElementById("tit1desc").innerText = 'This tab shows your Network specifications and updates it in realtime so you dont have to relaunch the app again. The MAC adress here is the adress of your PC so you dont have to suffer in order to find it. The WIFI adapters model can also be found here along with its name'

  return false;
}