// Source - https://stackoverflow.com/a
// Posted by JavaAndCSharp, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-28, License - CC BY-SA 4.0

var Small = { 
  'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 
  'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 
  'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90 }; 

var Magnitude = {
  'thousand': 1000,
  'million': 1000000,
  'billion': 1000000000,
  'trillion': 1000000000000,
  'quadrillion': 1000000000000000,
  'quintillion': 1000000000000000000,
  'sextillion': 1000000000000000000000,
  'septillion': 1000000000000000000000000,
  'octillion': 1000000000000000000000000000,
  'nonillion': 1000000000000000000000000000000,
  'decillion': 1000000000000000000000000000000000,
};

var a, n, g;

function text2num(s) {
  a = s.toString().split(/[\s-]+/);
  n = 0;
  g = 0;
  a.forEach(feach);
  return n + g;
}

function feach(w) {
  var x = Small[w];
  if (x != null) {
    g = g + x;
  } else if (w == "hundred") {
    g = g * 100;
  } else {
    x = Magnitude[w];
    if (x != null) {
      n = n + g * x
      g = 0;
    } else {
      console.log("Unknown number: " + w);
    }
  }
}

/* console.log(text2num("one thousand two hundred fifteen")); // Outputs: 1215
console.log(text2num("one thousand fifteen")); // Outputs: 1015
console.log(text2num("fifteen")); // Outputs: 15 */
