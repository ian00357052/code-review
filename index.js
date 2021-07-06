$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
})

//圖片放大
$(function () {
    $('.img').on('click', function () {
        var src = $(this).attr('src');
        $('.imgPreview img').attr('src', src);
        $('.imgPreview').show()
    });
    $('.imgPreview').on('click', function () {
        $('.imgPreview').hide()
    });
})


changeword = () => {
    var text = "";
    text = document.getElementById("change").innerHTML.replace(/websiet/i, "website");
    document.getElementById('change').innerHTML = text;
}

varFunc = () => {
    var x = parseFloat(document.getElementById("inputx").value);
    var y = parseFloat(document.getElementById("inputy").value);
    var select = document.getElementById("sel1").value;
    var result = 0;
    switch (select) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "x":
            result = x * y;
            break;
        case "÷":
            result = x / y;
            break;
    }
    document.getElementById("result").innerHTML = "X " + select + " Y = " + result;

}


search = () => {
    const txt = [
        { "name": "John", "age": 30, "city": "New York" },
        { "name": "Mary", "age": 20, "city": "Tokyo" },
        { "name": "July", "age": 18, "city": "Taipei" }
    ];

    var input = document.getElementById("search").value;
    for (let i in txt) {
        if (input == txt[i].name) {
            document.getElementById("jsonResult").innerHTML = txt[i].name + " 年齡: " + txt[i].age + " 城市:" + txt[i].city;
            break;
        }
        else {
            document.getElementById("jsonResult").innerHTML = "查無此人";
        }
    }
    // document.getElementById("jsonResult").innerHTML =input;

}

function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      const xmlDoc = xhttp.responseXML;
      const cd = xmlDoc.getElementsByTagName("CD");
      myFunction(cd)
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
  }
  
  function myFunction(cd) {
    let table="<tr><th style='width: 150px'>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < cd.length; i++) { 
      table += "<tr><td>" +
      cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }