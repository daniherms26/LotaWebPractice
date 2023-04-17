//checker if sidebar is already open
let sidebarShow = false;
//will open/close side bar once click
function sidebar() {
const sidebar = document.querySelector('.sidebar-overlay');
    if (sidebarShow === false) {
        sidebar.style = "width: 70%;"
        sidebarShow = true;
    } else {
        sidebar.style = "width: 0;"
        sidebarShow = false;
    }
    console.log(sidebarShow);
}              
//Will close the sidebar once out of focus
window.onclick = function(event) {
    const click = !event.target.matches('.hamburger-image');
    const sidebar = document.querySelector('.sidebar-overlay');
    if (click){
        sidebar.style = 'width: 0;'
        sidebarShow = false;
    } 
}

