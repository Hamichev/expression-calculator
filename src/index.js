function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr=expr.split(''),N="";
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i]==" ") {arr.splice(i,1);}
  }
  for (let i=0,min_number=0;i<arr.length;i++)
  {
    if (/\d/.test(arr[i])) 
    {
      min_number=i;
      while (/\d/.test(arr[i]))
      {
        N+=arr[i];i++;
      }
      arr.splice(min_number+1,i-1-min_number);
      i=min_number;
      arr[i]=N;
      N="";
    }
  }

  for (let i=0,min_bracket=0,max_bracket=0;i<arr.length;i++)
  {
    if (arr[i]==")") 
    {
      max_bracket=i;
      for (let j=i;j>0;j--)
      {
        if (arr[j]=="(") 
        {
          min_bracket=j;

          for (let k=j,S=0;k<max_bracket;k++)
          {
            if (arr[k]=="*") {S=(+arr[k-1])*(+arr[k+1]);k-=1;arr[k]=S;arr.splice(k+1,2);max_bracket-=2;}
            if (arr[k]=="/") {S=(+arr[k-1])/(+arr[k+1]);k-=1;arr[k]=S;arr.splice(k+1,2);max_bracket-=2;}
          }
          for (let k=j,S=0;k<max_bracket;k++)
          {
            if (arr[k]=="+") {S=(+arr[k-1])+(+arr[k+1]);k-=1;arr[k]=S;arr.splice(k+1,2);max_bracket-=2;}
            if (arr[k]=="-") {S=(+arr[k-1])-(+arr[k+1]);k-=1;arr[k]=S;arr.splice(k+1,2);max_bracket-=2;}
          }
          break;
        }
      }
      i=min_bracket;
      arr[i]=arr[i+1];
      arr.splice(i+1,2);
    }
  }
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i]=="*") {S=(+arr[i-1])*(+arr[i+1]);i-=1;arr[i]=S;arr.splice(i+1,2);}
    if (arr[i]=="/") {S=(+arr[i-1])/(+arr[i+1]);i-=1;arr[i]=S;arr.splice(i+1,2);}
  } 
  for (let i=0;i<arr.length;i++)
  {
    if (arr[i]=="+") {S=(+arr[i-1])+(+arr[i+1]);i-=1;arr[i]=S;arr.splice(i+1,2);}
    if (arr[i]=="-") {S=(+arr[i-1])-(+arr[i+1]);i-=1;arr[i]=S;arr.splice(i+1,2);}
  }
   let result=+arr;
   result= Math.round(result*10000);
   result/=10000;
  return result;
}

module.exports = {
    expressionCalculator
}
