let header =document.getElementById('header');
let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river =document.getElementById('river');
let boat6 =document.getElementById('boat');
let YOUSSEF =document.querySelector('.YOUSSEF');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river.style.top = value* + 'px';
    boat6.style.top = value* + 'px';
    boat6.style.left = value*3 + 'px';
    YOUSSEF.style.fontSize = value + 'px';
    if(scrollY>=67){
        YOUSSEF.style.fontSize = 67 + 'px';
        YOUSSEF.style.position = 'fixed' ;
        if(scrollY>=290.2886047363281){
            YOUSSEF.style.display = 'none' ;

        }else{
            YOUSSEF.style.display = 'block' ;

        }
        if(scrollY >=92.3377914428711){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
            // document.querySelector('.main').style.background ='#2b5abb';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
      
    }
    if(scrollY>=611.5776977539062){
        header.style.display = 'none' ;
    }else{
        header.style.display = 'block' ;
        header.style.position = 'fixed' ;
        header.style.display = 'flex' ;
    }
}
