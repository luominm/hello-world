//helper functions

// A) isVowel1

var isVowel1 = function(ch){
    ch = ch.toLowerCase();
    return (ch == 'a' || ch == 'e' || ch == 'i' 
        || ch == 'o' || ch == 'u' || ch == 'y');
};

// B) isVowel2

var isVowel2 = function(ch){
    if (ch = ch. toLowerCase())
  {
    return /[aeiouy]/.test(ch);
  }
};

// C) strReverse1

var strReverse1 = function(s){

 for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

// D) strReverse2

var strReverse2 = function(s){
  var o = [];
  return s.split('').reverse().join('');
}

// E) getMaxWord

var getMaxWord = function(s) {
    var str = s.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}   

// F) filterWords

var filterWords = function(str, n) {
    var str=str.split(" ");
    var word=[];
    for (var i=0; i<str.length; i++){
        if (str[i].length > n){
            word+=str[i]+' ';
        }
    }
    return word;
}



//1. One Ring to Rule Them All
var ring = function() {
    //this keyword is set to the button that fired the event
    console.log(this.id);
    //dispatch on button id
   if (this.id == "btn1"){
        str = $("#inBox1").val();
        console.log(str);
        $("#outDiv").text(isVowel1(str));
    }   
    else if (this.id == "btn2"){
        str = $("#inBox1").val();
        console.log(str);
        $("#outDiv").text(isVowel2(str));
    }
    else if (this.id == "btn3"){
        str = $("#inBox1").val();
        console.log(str);
        $("#outDiv").text(strReverse1(str));
    }
    else if (this.id == "btn4"){
        str = $("#inBox1").val();
        console.log(str);
        $("#outDiv").text(strReverse2(str));
    }
    else if (this.id == "btn5"){
        str = $("#inBox1").val();
        console.log(str);
        $("#outDiv").text(getMaxWord(str));
    }
    else if (this.id == "btn6"){
        str = $("#inBox1").val();
        n = $("#inBox2").val();
        console.log(str);
        $("#outDiv").text(filterWords(str, n));
    }
};
//2. register the onclick handlers after the DOM is complete
$(document).ready(function() {
    //register the handler for all of the buttons
    $("button").on("click", ring);
});