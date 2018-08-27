var prompt = require('prompt')
  prompt.start();
  prompt.get(['year'], function (err,result){
      var y=result.year;
      var l=result.year.length;
      if(l<4)
      {
          console.log("not a valid year");
      }
      else
      {
          if(y%4==0 && y%100!==0 || y%400==0)
          {
              console.log(y+" is a leap year");
          }
          else
          {
            console.log(y+" is  not a leap year");
          }
        }
  })