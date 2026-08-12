function createCard(title,cName, views, monthsOld, duration, thumbnail){
    // finish this function
    if(views<1000000){
        viewStr = views/1000 + "K";
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K"
    }
    let html = `<div class="card">
            <div class="image"><img
                    src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p> ${cName} . ${viewStr}views . ${monthsOld}</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML + html

}


createCard("Installing VS Code & How Websites Work | Sigma Web Development Course #1", "Code With Harry",56000,2,"31:01",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")