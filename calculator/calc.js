var s=0;
var place=10;
var x=0;
var sec_flag =0;
var operate;
function get_number(a)
{
    sec_flag=0;
    var ref = document.getElementById(a);
    var ref1 = document.getElementById("result");
    document.getElementById("result").value=ref1.value+ref.value;
    s = parseInt(ref.value)+(s*place);
    count+=1;
    place = place*10;
}
function operator(op)
{
    var ref = document.getElementById(op);
    var ref1 = document.getElementById("result");
    document.getElementById("result").value=ref1.value+ref.value;   
    operate=op;
    x = s;
    s=0;
    sec_flag=1;
    place=10;
    
}
function result()
{
    if(sec_flag==1)
        alert("Enter the second digit to perform operation");
    else
    {
        var result = 0;
        if(document.getElementById(operate).value=='+')
            result = s+x;
        else if(document.getElementById(operate).value=='-')
            result = x-s;
        else if(document.getElementById(operate).value=='*')
            result = x*s;
        else{
            if(s==0)
                alert("Cannot divide by zero");
            else
                result = x/s;
        }
    }
    s=result;
    x=0.0;
    document.getElementById("result").value=result.toString();
}
function reset()
{
    s=0;
    x=0;
    document.getElementById("result").value="";
}