document.querySelectorAll(".box").forEach(box =>{
    let r = Math.floor(Math.random()*256);
    let g =Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${r} ,${g},${b})`;//background color
    box.style.color = `rgb(${r} ,${g},${b})`;//text color
});