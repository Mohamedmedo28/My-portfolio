let menu =document.getElementById('menu-bars')

let header =document.querySelector('header')

menu.onclick =()=>{
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}
window.onscroll =()=>{
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}

let cursor1 =document.querySelector('.cursor-1')
let cursor2 =document.querySelector('.cursor-2')




// document.addEventListener('mousemove',function(e){
//     cursor1.style.left=e.clientX
//     demo.style.top=e.clientY
// })


window.onmousemove =(e)=>{
    cursor1.style.top = e.pageY + 'px'
    cursor1.style.left = e.pageX + 'px'
    cursor2.style.top = e.pageY + 'px'
    cursor2.style.left = e.pageX + 'px'
}

///
document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter =()=>{
        cursor1.classList.add('active')
        cursor2.classList.add('active')
    }
    links.onmouseleave =()=>{
        cursor1.classList.remove('active')
        cursor2.classList.remove('active')
    }
})





///
VanillaTilt.init(document.querySelector(".tilt"), {
    max: 15,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".tilt"));