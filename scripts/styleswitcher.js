var delimiter = "---";
var activeSize = "default";
var dayOrNight = "sun";
var curLang = "en_US";
//alert("defalts loaded")
//str = "default---sun---en_US";
//createCookie("styleAndLang",str);

function setActiveStyleSheet(title) {
//alert("setActiveStyleSheet called with " + title)
    activeSize = title;
    var str = activeSize + delimiter + dayOrNight + delimiter + curLang;
    createCookie("styleAndLang",str);
   
    
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {      
    curTitle=a.getAttribute("title");      
    if(a.getAttribute("rel").indexOf("style") != -1 && curTitle) {
        a.disabled = true;
      if(curTitle == title) a.disabled = false;
      else $("#" + curTitle).removeClass("active");
    }
  }
  $("#" + title).addClass("active");
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "" + date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
    //alert("create cookie: " +value);
    
}

function readCookie(name) {
        
    var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) 
    {
        c = c.substring(nameEQ.length,c.length);
  //alert("in read cookie. got: " + c);
        var parts = c.split(delimiter);
        if (parts.length > 2) {
            curLang = parts[2];
        }
        if (parts.length > 1 ) {
            dayOrNight = parts[1];
        }
        if (parts.length  > 0) {
            //alert("read from cookie:" + parts[0]);
            activeSize = parts[0];
        }
        
    }
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("styleAndLang");
  //var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(activeSize);  
  setNightStyleSheet(dayOrNight); 
    
  
}

window.onunload = function(e) {
  //var title = getActiveStyleSheet();
  //createCookie("style", title, 365);
}

  var cookie = readCookie("styleAndLang");
  //var title = cookie ? cookie : getPreferredStyleSheet();
  


function setNightStyleSheet(title) {


    dayOrNight = title;
    var str = activeSize + delimiter + dayOrNight + delimiter + curLang;
    createCookie("styleAndLang",str);
   
    
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {       
    curTitle = a.dataset.title;
    if(a.getAttribute("rel").indexOf("style") != -1 && curTitle) {
        a.disabled = true;
      if(curTitle == title) a.disabled = false;
      else $("#" + curTitle).removeClass("active");
    }
  }

  
  if (title == "sun") {
          $("#logoImage").attr("src","images/newlogo.png");          
            $("#sun").addClass("active");
      } else {          
          $("#logoImage").attr("src","images/logoblk.jpg");
          $("#night").addClass("active");
      }
}

function toggleLanguage(newLang) {
    curLang = newLang;    
    var str = activeSize + delimiter + dayOrNight + delimiter + curLang;
    createCookie("styleAndLang",str);
    location.reload(true);
}
