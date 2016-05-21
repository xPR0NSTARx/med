var editId = "d";
var linkId = "d";
var nextId = 0;

var okFunc = function(okDiv, myInput){
  var editInput = okDiv.querySelector("#editInput");
  var editLink = okDiv.querySelector("#editLink");
  var clearButton = okDiv.querySelector("#clearButton");
  var titleSpan = okDiv.querySelector("#titleSpan");
  var editButton = okDiv.querySelector("#editButton");
  var okButton = okDiv.querySelector("#okButton");
  var delButton = okDiv.querySelector("#delButton");
  var linkButton = okDiv.querySelector("#linkButton");
  var linkText = okDiv.querySelector("#linkText");
  
  if(editInput.value == "")
    editInput.value = titleSpan.textContent;
  else
    titleSpan.textContent = editInput.value;

  linkText.textContent = "IMDb/" + editLink.value;
  linkText.href = "http://www.imdb.com/title/tt" + editLink.value;
  var hasLink = false;

  if(editLink.value == "")
    linkButton.style.visibility = "hidden";
  else
    linkButton.style.visibility = "visible";
  
  editButton.style.display = "inline";
  titleSpan.style.display = "inline";
  linkButton.style.display = "inline";
  okButton.style.display = "none";
  delButton.style.display = "none";
  editInput.style.display = "none";
  editLink.style.display = "none";
  clearButton.style.display = "none";
  
  myInput.focus();
  editId = "d";
};

var focFunc = function(myInput){
  if(editId != "d"){
    var editDiv = document.querySelector("#" + editId);
    okFunc(editDiv, myInput);
    editId = "d";
  }
  
  if(linkId != "d"){
    var linkDiv = document.querySelector("#" + linkId);
    var linkText = linkDiv.querySelector("#linkText");
    
    linkText.style.display = "none";
    linkId = "d";
  }
};

var focFuncTitle = function(){
  var titleInput = document.querySelector("#titleInput");
  focFunc(titleInput);
};

var focFuncLink = function(){
  var linkInput = document.querySelector("#linkInput");
  focFunc(linkInput);
};

var addFunc = function(){
  focFuncTitle();
  var hasLink = true;
  
  var titleInput = document.querySelector("#titleInput");
  var title = titleInput.value;
  var linkInput = document.querySelector("#linkInput");
  var link = linkInput.value;

  if(title == ""){
    titleInput.focus();
    return;
  }
  else if(link == ""){
    hasLink = false;
  }

  titleInput.focus();
  titleInput.value = "";
  linkInput.value = "";
  
  var div = document.createElement("div");
  document.body.appendChild(div);
  div.id = "d" + nextId++;
  
  var editButton = document.createElement("input");
  div.appendChild(editButton);
  editButton.id = "editButton";
  editButton.className = "button";
  editButton.type = "image";
  editButton.src = "img/edit.png";
  editButton.title = "Edit";
  
  var linkButton = document.createElement("input");
  div.appendChild(linkButton);
  linkButton.id = "linkButton";
  linkButton.className = "button";
  linkButton.type = "image";
  linkButton.src = "img/link.png";
  linkButton.title = "Link";
  if(!hasLink)
    linkButton.style.visibility = "hidden";
  
  var titleSpan = document.createElement("span");
  div.appendChild(titleSpan);
  titleSpan.id = "titleSpan";
  titleSpan.textContent = title;
  
  var linkText = document.createElement("a");
  div.appendChild(linkText);
  linkText.id = "linkText";
  linkText.href = "http://www.imdb.com/title/tt" + link;
  linkText.textContent = "IMDb/" + link;
  linkText.style.display = "none";
  
  var okButton = document.createElement("input");
  div.appendChild(okButton);
  okButton.id = "okButton";
  okButton.className = "button";
  okButton.type = "image";
  okButton.src = "img/ok.png";
  okButton.title = "OK";
  okButton.style.display = "none";
  
  var delButton = document.createElement("input");
  div.appendChild(delButton);
  delButton.id = "delButton";
  delButton.className = "button";
  delButton.type = "image";
  delButton.src = "img/del.png";
  delButton.title = "Delete";
  delButton.style.display = "none";
  
  var editInput = document.createElement("input");
  div.appendChild(editInput);
  editInput.id = "editInput";
  editInput.value = title;
  editInput.placeholder = "Title";
  editInput.style.display = "none";
  
  var editLink = document.createElement("input");
  div.appendChild(editLink);
  editLink.id = "editLink";
  editLink.value = link;
  editLink.placeholder = "IMDb #";
  editLink.style.display = "none";
  
  var clearButton = document.createElement("input");
  div.appendChild(clearButton);
  clearButton.id = "clearButton";
  clearButton.className = "button";
  clearButton.type = "image";
  clearButton.src = "img/clear.png";
  clearButton.title = "Delete Link";
  clearButton.style.display = "none";
  
  editButton.onclick = function(){
    focFuncTitle();
    titleInput.value = "";
    linkInput.value = "";
    
    editButton.style.display = "none";
    titleSpan.style.display = "none";
    linkButton.style.display = "none";
    okButton.style.display = "inline";
    delButton.style.display = "inline";
    editInput.style.display = "inline";
    editLink.style.display = "inline";
    
    if(editLink.value == "")
      clearButton.style.display = "none";
    else
      clearButton.style.display = "inline";
    
    editInput.focus();
    editId = div.id;
  };
  
  okButton.onclick = function(){
    okFunc(div, titleInput);
  };
  
  editInput.onkeypress = function(){
    if(event.keyCode == 13)
      okFunc(div, titleInput);
  };
  
  editLink.onkeypress = function(){
    if(event.keyCode == 13)
      okFunc(div, titleInput);
  };
  
  editLink.onkeyup = function(){
    if(editLink.value == "")
      clearButton.style.display = "none";
    else
      clearButton.style.display = "inline";
  };

  delButton.onclick = function(){
    document.body.removeChild(div);
    
    editId = "d";
    titleInput.focus();
  };
  
  linkButton.onclick = function(){
    titleInput.value = "";
    linkInput.value = "";
    
    var save = false;
    
    if(linkId == div.id){
      linkText.style.display = "none";
      save = false;
    }else{
      linkText.style.display = "inline";
      save = true;
    }
    
    focFuncTitle();
    
    linkButton.focus();
    linkButton.blur();
    
    if(save)
        linkId = div.id;
    else
        linkId = "d";
  };
  
  clearButton.onclick = function(){
    editLink.value = "";
    editLink.focus();
    clearButton.style.display = "none";
  };
};

var addHelp = function(){
  if(event.keyCode == 13)
    addFunc();
};

var titleInput = document.querySelector("#titleInput");
titleInput.focus();
