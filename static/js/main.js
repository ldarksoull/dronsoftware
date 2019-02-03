$(function() {

  $("#menu-toggle-handle").click(function(e) { $('#nav').slideToggle('fast'); });
  
  });
  
  function showTime()
  {
      var Digital=new Date()
      var hours=24 - Digital.getHours()
      var minutes=60- Digital.getMinutes()
      var seconds=60-Digital.getSeconds()
      if(hours<=9)
      hours="0"+hours
      if(minutes<=9)
      minutes="0"+minutes
      if(seconds<=9)
      seconds="0"+seconds
      myclock=hours+":"+minutes+":"+seconds;
      document.getElementById("ttime").innerHTML=myclock
      setTimeout("showTime()",1000)
  }
  