const display = document.querySelector("#display-menu");


for (let child of display.childNodes) {
    child.addEventListener("click", (e) => {
        e.target.classList.add("visualy-hiden");
        setTimeout(() => {
            child.classList.add("hide")
        }, 300);

        setTimeout(() => {
            child.classList.remove("hide");

            setTimeout(()=> {
                child.classList.remove("visualy-hiden");
            }, 100);
            
        }, 1000)
    })
}