//Longest Substring Without Repeating Characters Solution

function longestSubstringWithoutDuplication(str) {
      var max = 0;

     
      if (str.length === 0){
        return 0;
      } else if (str.length === 1){ 
        return 1;
      }

      var currentChar,
          map = {},
          counter = 0; 
      for (var i=0; i< str.length ; i++){
        currentChar = str.charAt(i);

        
        if (map[currentChar]  == undefined){
          
              map[currentChar] = i;
              if (Object.keys(map).length > max){
                 max = Object.keys(map).length;
              }
        } else {
          
          if (Object.keys(map).length > max){
            max = Object.keys(map).length;
          }
          counter = 0; 
          i = map[currentChar]; 
          map = {}; 
        }
      }