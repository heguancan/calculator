   var getmun=document.getElementById('screen');
   var str=''; //窗口的内容
   var symbol=0; //运算符号
   var dot=0; //点

   function backzero(){   //清零
     getmun.innerHTML=0;
     symbol=0;
     dot=0;
   }

   function backspace(){   //退格
     str=getmun.innerHTML;
     console.log(str.length);
     var aa=str.charAt(str.length-1);
     if(aa=='.'){
            getmun.innerHTML=str.substring(0,(str.length-1));
            dot=dot-1;
            if(getmun.innerHTML==''){
              getmun.innerHTML=0;
            }
        }else if(aa=='+'||aa=='-'||aa=='*'||aa=='/'||aa=='%'){
            getmun.innerHTML=str.substring(0,(str.length-1));
            symbol=symbol-1;
            if(getmun.innerHTML==''){
              getmun.innerHTML=0;
            }

        }else{
        getmun.innerHTML=str.substring(0,(str.length-1));
          if(getmun.innerHTML==''){
            getmun.innerHTML=0;
          }
      }
   }



   function appContent(a){

    str=getmun.innerHTML; //获取屏幕的值

    if(str=='0'&&a!='.'){
      if(a=='00'){
        str=0;
        getmun.innerHTML=str;
      }else if(a=='+'||a=='-'||a=='*'||a=='/'||a=='%'){
        str='0'+a;
        getmun.innerHTML=str;

      }else{
        str=a;
        getmun.innerHTML=str;
      }
    }else{
      if(a=='.'){
        console.log(symbol);
        console.log(dot);
        var rr=str.charAt(str.length-1);

        if(dot<(symbol+1)&&rr!='+'&&rr!='-'&&rr!='*'&&rr!='/'&&rr!='%'){
          str=str+a;
          getmun.innerHTML=str;
          dot=dot+1;
        }else{
          str=str;
          getmun.innerHTML=str;
        }
      

    }else{
       
      var rr=str.charAt(str.length-1);

      if(rr=='+'||rr=='-'||rr=='*'||rr=='/'||rr=='%'||rr=='.'){

        if(a=='+'||a=='-'||a=='*'||a=='/'||a=='%'){
          getmun.innerHTML=str;
        }else{
          str=str+a;
          getmun.innerHTML=str;
        }
      }else{
        if(a=='+'||a=='-'||a=='*'||a=='/'||a=='%'){
          str=str+a;
          symbol=symbol+1;
          if(dot<symbol){
            dot=dot+1;
          }
          getmun.innerHTML=str;
        }else{
          str=str+a;
          getmun.innerHTML=str;
        }
      }

    }


   }
  }

  function result(){
    getmun.innerHTML=eval(getmun.innerHTML);

  }