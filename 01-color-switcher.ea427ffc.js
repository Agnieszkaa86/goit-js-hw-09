const startBtn=document.querySelector("[data-start]"),stopBtn=document.querySelector("[data-stop]"),body=document.querySelector("body");let timerId=null,isEnabled=!0;function getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}startBtn.addEventListener("click",(()=>{isEnabled?timerId=setInterval((()=>{body.style.backgroundColor=getRandomHexColor()}),1e3):isEnabled=!1,startBtn.disabled=!0,stopBtn.disabled=!1})),stopBtn.addEventListener("click",(()=>{clearInterval(timerId),isEnabled=!0,stopBtn.disabled=!0,startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ea427ffc.js.map
