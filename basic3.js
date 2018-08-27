
var prompt=require('prompt')
function coin(not)
var head=0,tail=0;
{
    for(i=1;i<=not;i++)
    {
        var random=Math.random();
        if(random<0.5)
        {
            tail++;
        }
        else
        {
            head++;
        }
    }

 var perofhead=(head/not)*100;
 var peroftail=(tail/not)*100;
 var perofheadvstail=(head/tail)*100;
 console.log("percentage of head is "+perofhead+"%");
 console.log("percentage of tail is "+peroftail+"%");
 console.log("percentage of headvstail is "+perofheadvstail+"%");
}
 prompt.start();
 prompt.get(['flipno'],function(err,result){
     coin(result.flipno);
 });