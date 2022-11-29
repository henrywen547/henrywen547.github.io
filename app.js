document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault();
    let form = document.forms["add_list"];
    let todo_card = document.createElement("div");
    let title = document.createElement("p");
    let time = document.createElement("p"); // 另一個 p 
    todo_card.classList.add("todo");
    title.classList.add("todo_title");
    time.classList.add("todo_time"); // 在 classList 中加入 todo_time
    title.innerText = form.elements["todo_title"].value;
    time.innerText = form.elements["month"].value+"/"+form.elements["date"].value;
    todo_card.appendChild(title);
    todo_card.appendChild(time);  // 把 title、time 掛到 div 下
    
    let section = document.getElementById("Insert_section");
    section.insertBefore(todo_card, section.firstChild);
    form.reset();
    }
);