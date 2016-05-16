var titleInput = document.querySelector("input");
titleInput.focus();

var editId = "d";
var nextId = 0;

var addFunc = function(){
  focFunc();
  
  var title = titleInput.value;
  if(title == "")
    return;
  titleInput.value = "";
  titleInput.focus();
  
  var div = document.createElement("div");
  document.body.appendChild(div);
  div.id = "d" + nextId++;
  
  var editButton = document.createElement("input");
  div.appendChild(editButton);
  editButton.id = "editButton";
  editButton.className = "button";
  editButton.type = "image";
  editButton.src = "img/edit.png";
  
  var titleSpan = document.createElement("span");
  div.appendChild(titleSpan);
  titleSpan.id = "titleSpan";
  titleSpan.textContent = title;
  
  var okButton = document.createElement("input");
  div.appendChild(okButton);
  okButton.id = "okButton";
  okButton.className = "button";
  okButton.type = "image";
  okButton.src = "img/ok.png";
  okButton.style.display = "none";
  
  var delButton = document.createElement("input");
  div.appendChild(delButton);
  delButton.id = "delButton";
  delButton.className = "button";
  delButton.type = "image";
  delButton.src = "img/del.png";
  delButton.style.display = "none";
  
  var editInput = document.createElement("input");
  div.appendChild(editInput);
  editInput.id = "editInput";
  editInput.value = title;
  editInput.style.display = "none";
  
  editButton.onclick = function(){
    focFunc();
    
    editButton.style.display = "none";
    titleSpan.style.display = "none";
    okButton.style.display = "inline";
    delButton.style.display = "inline";
    editInput.style.display = "inline";
    
    editInput.focus();
    editId = div.id;
  };
  
  delButton.onclick = function(){
    document.body.removeChild(div);
    
    titleInput.focus();
    editId = "d";
  };
  
  okButton.onclick = function(){
    okFunc(div);
  };
  
  editInput.onkeypress = function(){
    if(event.keyCode == 13)
      okFunc(div);
  };
};

var addHelp = function(){
  if(event.keyCode == 13)
    addFunc();
};

var okFunc = function(okDiv){
  var editInput = okDiv.querySelector("#editInput");
  var titleSpan = okDiv.querySelector("#titleSpan");
  var editButton = okDiv.querySelector("#editButton");
  var okButton = okDiv.querySelector("#okButton");
  var delButton = okDiv.querySelector("#delButton");
  
  if(editInput.value == "")
    editInput.value = titleSpan.textContent;
  else
    titleSpan.textContent = editInput.value;
  
  editButton.style.display = "inline";
  titleSpan.style.display = "inline";
  okButton.style.display = "none";
  delButton.style.display = "none";
  editInput.style.display = "none";
  
  titleInput.focus();
  editId = "d";
};

var focFunc = function(){
  if(editId != "d"){
    var editDiv = document.querySelector("#" + editId);
    okFunc(editDiv);
    editId = "d";
  }
};
