const MenuBtn =document.querySelector("#menubtn");
const body =document.querySelector("body");
MenuBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    body.classList.toggle('sider-toggled');
})