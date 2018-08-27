  var prompt = require('prompt')
    function name(value) {
    if(value.length >=3){
        console.log('hii ' + value +' how r u ');
     }
     else
     {
         console.log("invalid username");
     }
    }
  prompt.start();
  prompt.get(['username'], function (err,result) {
      name(result.username);
  });