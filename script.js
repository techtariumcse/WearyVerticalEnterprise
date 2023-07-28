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

  alert("Name : " + name + "\n Author :" + author + "\n Language : " + language + "\n Available : " + available + "\n Published date : " + publisheddate + "\n Languages : " + Languages + "\n Brief description : " + briefdescription + "\n Price in rupees : " + bookprice);
}

