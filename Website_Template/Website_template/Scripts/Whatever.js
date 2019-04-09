
var el = document.getElementById("add");
el.addEventListener("click", function(){
  var new_row = document.createElement('div'); 
  new_row.className = "square_e";
  document.getElementById("plu").appendChild(new_row);
  console.log("whatevr");
});