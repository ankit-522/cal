let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let Result = document.getElementById('Result');
let button = document.getElementsByTagName('button');

// let number1 = input1.value
// let number2 = input2.value


button[0].onclick = function(){
    Result.innerHTML = "Result:" + (parseInt(input1.value) + parseInt(input2.value));
}
button[1].onclick = function(){
    Result.innerHTML = "Result:" +(parseInt(input1.value) - parseInt(input2.value));
}
button[2].onclick = function(){
    Result.innerHTML = "Result:" +(parseInt(input1.value) * parseInt(input2.value));
}
button[3].onclick = function(){
    Result.innerHTML = "Result:" +(parseInt(input1.value) / parseInt(input2.value));
}
button[4].onclick = function(){
    Result.innerHTML =  input1.value + ' ' + input2.value;
}