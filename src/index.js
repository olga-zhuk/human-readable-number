module.exports = function toReadable (number) {
 let numberList = [
        {value: 1000, str: "thousand"},
        {value: 100, str: "hundred"},
        {value: 90, str: "ninety"},
        {value: 80, str: "eighty"},
        {value: 70, str: "seventy"},
        {value: 60, str: "sixty"},
        {value: 50, str: "fifty"},
        {value: 40, str: "forty"},
        {value: 30, str: "thirty"},
        {value: 20, str: "twenty"},
        {value: 19, str: "nineteen"},
        {value: 18, str: "eighteen"},
        {value: 17, str: "seventeen"},
        {value: 16, str: "sixteen"},
        {value: 15, str: "fifteen"},
        {value: 14, str: "fourteen"},
        {value: 13, str: "thirteen"},
        {value: 12, str: "twelve"},
        {value: 11, str: "eleven"},
        {value: 10, str: "ten"},
        {value: 9, str: "nine"},
        {value: 8, str: "eight"},
        {value: 7, str: "seven"},
        {value: 6, str: "six"},
        {value: 5, str: "five"},
        {value: 4, str: "four"},
        {value: 3, str: "three"},
        {value: 2, str: "two"},
        {value: 1, str: "one"}
      ];

      if (number === 0) return 'zero';

      let result = '';

      for (let num of numberList) {
        if (number >= num.value){
          if (number <= 20){
            result += num.str;
            number -= num.value;
            if(number > 0) result += ' ';
          } else if (number <=99){
            let d = number % num.value;
            if ( d > 0 ){
                return num.str + ' ' + toReadable(d);
              } else {
                return num.str;
              }
          } else {
            let t =  Math.floor(number / num.value);
            let d = number % num.value;
            if ( d > 0 ){
              return toReadable(t) + ' ' + num.str + ' ' + toReadable(d);
            } else {
              return toReadable(t) + ' ' + num.str;
            }

          }
        }
      }
      return result;
} 
  
 
