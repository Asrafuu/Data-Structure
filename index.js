window.onload=()=>{
    main();
}


function main(){
  const root=document.getElementById("root");
  const changeBtn=document.getElementById("changeBtn");

  changeBtn.addEventListener("click",()=>{
    const colorfun=RGBColorGenarator();
    root.style.background=colorfun;
  })
}


function RGBColorGenarator(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}