//alert('hello');
//console.log("hi");

function ageIn() {
  var yearOfBirth = prompt("What year you were born?");
  var ageInDays = (2020 - yearOfBirth) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old!!!');
  h1.setAttribute('id', 'totalDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  //console.log(ageInDays);
}

function reset (){
    document.getElementById('totalDays').remove();
}