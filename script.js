function myFunction() {
  alert("Comming Soon !");
}
function myFunction1() {
  var name = document.getElementById("bookname").value;
  var author = document.getElementById("author").value;
  var language = document.getElementById("language").value;
  var publisheddate = document.getElementById("publisheddate").value;
  var available = document.getElementById("Available").value;
  var Languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(el => el.value);
  var briefdescription = document.getElementById("briefdescription").value;
  var bookprice = document.getElementById("bookprice").value;

  let date1 = new Date(publisheddate).getTime();
  let date2 = new Date().getTime();
  
  if(name === ""){
    alert("Name cannot be null");
  }else if(author === ""){
     alert("Author cannot be null");
  }else if(date1 > date2){
    alert("Makes sure that the published date is in the past");
    
  }else if(briefdescription.length > 250){
    alert("Makes sure that the description is less than 250 characters");
  }else if(bookprice < 0){
    alert("Book price can't be negative");
  }
  else{
    alert("Name : " + name + "\n Author :" + author + "\n Language : " + language + "\n Available : " + available + "\n Published date : " + publisheddate + "\n Languages : " + Languages + "\n Brief description : " + briefdescription + "\n Price in rupees : " + bookprice);
  }

  document.getElementById("myText").innerHTML = name;
   document.getElementById("myText1").innerHTML = author;
   document.getElementById("myText2").innerHTML = bookprice;
   document.getElementById("myText3").innerHTML = language;
}

function myFunction2(){
   document.getElementById("myText").innerHTML = null;
   document.getElementById("myText1").innerHTML = null;
   document.getElementById("myText2").innerHTML = null;
   document.getElementById("myText3").innerHTML = null;
  
}

