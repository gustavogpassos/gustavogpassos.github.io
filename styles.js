window.onload = function(){
  var firstElement = document.getElementById('password-gen-content');

  firstElement.style.display = "block";

  var tab = document.getElementById('menu-option-1');

  tab.style.backgroundColor = "#dee2e6";

  var storage = localStorage;

  storage.setItem('active-div','password-gen-content');
};



function showDiv(id){
  var storage = localStorage;

  var theDiv = storage.getItem('active-div');

  var element = document.getElementById(id);


  if (element == 'undefined' || element == null){
      alert('nao achei');
  }else{
      element.style.display="block";

      document.getElementById(theDiv).style.display="none";

      storage.setItem('active-div', id);
  }

  
}