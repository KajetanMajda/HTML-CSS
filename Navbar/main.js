// let list = document.querySelectorAll(".list");
// function activeLink(){
//     list.forEach((item) => item.setAttribute("class", "list"));
//     onclick.item.setAttribute("class", "list active");
// }
// list.forEach((item)=> item.addEventListener("click", activeLink));

const l = document.querySelectorAll(".list")
l.forEach((item) => {
    item.addEventListener("click", function(e) {
        console.log(e.target.id);
        console.log("ddd");
    })
})
