let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked. Yayy!!")
    document.querySelector(".box").innerHTML =
    "<b> Yayy you are clicked</b> Enjoy your click"
});

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by using right click")
});

document.addEventListener("keydown", (e)=>{
    console.log(e,e.key, e.keycode)
});