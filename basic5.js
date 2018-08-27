var prompt=require('prompt')
prompt.start();
prompt.get(['Nvalue'],function(err,result){
    var n=result.Nvalue;
    var res=1;
    if(n>0)
    {
        if(n<31)
        {
            for(i=1;i<=n;i++)
            {
                res=res*2;
                console.log("the power value of 2 power "+i+" is "+res);
            }
                if(res%4==0 && res%100==0 || res%400==0)
                  {
                    console.log(res+" is a leap year");
                  }
                  else
                  {
                   console.log(res+" is not a leap year");
                  }
        }
    }
})