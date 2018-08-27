var prompt = require('prompt')
  prompt.start();
  prompt.get(['Nvalue'], function (err,result) {
      var N=result.Nvalue;
      var sum=0;
      var r;
      if(N>0)
      {
          for(i=1;i<=N;i++)
          {
             r=1/i;
             sum=sum+r;
          }
             console.log("The harmonic value is "+sum);
          
      }
  })