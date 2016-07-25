"use strict"

/*
A) Write a function named isVowel1 that accepts a character
and returns true if it's a vowel, false otherwise. Do not use a
RegExp to solve this problem.
*/

var isVowel1 = function(ch){
	ch = ch. toLowerCase();
	if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'y')
	
		return true;
	else
		return false;
};

/*
B) Write a function isVowel2 that accepts a character and
returns true if it's a vowel, false otherwise. Use a RegExp to
solve this problem.
*/

var isVowel2 = function(ch){
	if (ch = ch. toLowerCase())
  {
    return /[aeiouy]/.test(ch);
  }
};
  
/*
C) Define a function strReverse1 that accepts a string and
returns the reverse. Use a loop to solve this problem.
*/

var strReverse1 = function(s){

 for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

/*
D) Define a function strReverse2 that accepts a string and
returns the reverse. Do not use a loop to solve this problem.
*/

var strReverse2 = function(s){
  var o = [];
  return s.split('').reverse().join('');
}

/*
E) Write a function getMaxWord that accepts a sentence and
returns the length of the longest word in the sentence.
*/

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

/*
F) Write a function filterWords that accepts a sentence and an
integer n, and returns a string of the words that are longer than
n.
*/

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


