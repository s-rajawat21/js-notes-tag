const mbody =document.querySelector(".m-body")
const home = document.querySelector(".home");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const htmlbody = document.querySelector(".html-body");
const cssbody = document.querySelector(".css-body");
const jsbody = document.querySelector(".js-body");

// part apear afetr click //
htmlbody.classList.add('hidden');
cssbody.classList.add('hidden');
jsbody.classList.add('hidden');



html.addEventListener('click',()=>{
  home.classList.add('hidden');
   html.classList.add('hidden');
    css.classList.add('hidden');
     js.classList.add('hidden');
  htmlbody.classList.remove('hidden');
});

css.addEventListener('click',()=>{
   home.classList.add('hidden');
     html.classList.add('hidden');
    css.classList.add('hidden');
     js.classList.add('hidden');
   cssbody.classList.remove('hidden');
});

js.addEventListener('click',()=>{
    home.classList.add('hidden');
      html.classList.add('hidden');
    css.classList.add('hidden');
     js.classList.add('hidden');
    jsbody.classList.remove('hidden');
});


//html body //

const btn1 = document.querySelector(".btn1");
btn1.addEventListener('click', ()=>{
   home.classList.remove('hidden');
   html.classList.remove('hidden');
    css.classList.remove('hidden');
     js.classList.remove('hidden');
  htmlbody.classList.add('hidden');
});

//  css body //

const btn2 = document.querySelector(".btn2");
btn2.addEventListener('click', ()=>{
   home.classList.remove('hidden');
   html.classList.remove('hidden');
    css.classList.remove('hidden');
     js.classList.remove('hidden');
   cssbody.classList.add('hidden');
});

// js body //

const btn3 = document.querySelector(".btn3");
btn3.addEventListener('click', ()=>{
      home.classList.remove('hidden');
   html.classList.remove('hidden');
    css.classList.remove('hidden');
     js.classList.remove('hidden');
  jsbody.classList.add('hidden');
});