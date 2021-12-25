let startbtn = document.getElementsByClassName('startbtn')[0]
let startmenu = document.getElementsByClassName('startmenu')[0]

startbtn.addEventListener("click", ()=>{
    console.log("Clicked");
    if (startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-792px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
let filebtn = document.getElementsByClassName('filebtn')[0]
let thispcbtn = document.getElementsByClassName('thispcbtn')[0]
let file = document.getElementsByClassName('file')[0]
filebtn.addEventListener("click", ()=>{
    console.log("Clicked");
    if (file.style.bottom == "85px"){
        file.style.bottom = "-792px"
    }
    else{
        file.style.bottom = "85px"
    }
})
let edgebtn = document.getElementsByClassName('edgebtn')[0]
let edgebr = document.getElementsByClassName('edgebr')[0]
edgebtn.addEventListener("click", ()=>{
    console.log("Clicked");
    if (edgebr.style.bottom == "85px"){
        edgebr.style.bottom = "-792px"
    }
    else{
        edgebr.style.bottom = "85px"
    }
})
let searchbtn = document.getElementsByClassName('searchbtn')[0]
let search = document.getElementsByClassName('search')[0]
searchbtn.addEventListener("click", ()=>{
    console.log("Clicked");
    if (search.style.bottom == "50px"){
        search.style.bottom = "-792px"
    }
    else{
        search.style.bottom = "50px"
    }
})
let storebtn = document.getElementsByClassName('storebtn')[0]
let store = document.getElementsByClassName('store')[0]
storebtn.addEventListener("click", ()=>{
    console.log("Clicked");
    if (store.style.bottom == "85px"){
        store.style.bottom = "-792px"
    }
    else{
        store.style.bottom = "85px"
    }
})
