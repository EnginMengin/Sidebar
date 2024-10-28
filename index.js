const sideBar = document.querySelector(".sidebar-wrapper")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
    sideBar.classList.toggle("open")
})

sideBar.addEventListener("click", (e) =>{
    if (e.target.tagName === "LI") {
        sideBar.querySelectorAll("ul li").forEach(el => {
            el.classList.remove("active")
        })
        e.target.classList.add("active")
    }
})