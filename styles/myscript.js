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

function menuRender(items) {
    document.querySelector('.menuChoices').style = "display: none;";
    document.querySelector('.drinks').style = 'display: Initial;' ;  
    document.querySelector('.foods').style = 'display: none;' ;


    if (items === 'milkshakes') {
        document.querySelector('.drinks').style = "display: Initial;"; 
        document.querySelector('.foods').style = "display: none;";  
        
        document.querySelector('.milkshakes').style = "display: Initial;";
        document.querySelector('.coffee-blends').style = "display: none;";
        document.querySelector('.refreshers').style = "display: none;";
        document.querySelector('.waffles').style = "display: none;";
        document.querySelector('.sandwiches').style = "display: none;";
    } else if (items === 'coffee-blends') {
        document.querySelector('.drinks').style = "display: Initial;"; 
        document.querySelector('.foods').style = "display: none;";  
        
        document.querySelector('.milkshakes').style = "display: none;";
        document.querySelector('.coffee-blends').style = "display: Initial;";
        document.querySelector('.refreshers').style = "display: none;";
        document.querySelector('.waffles').style = "display: none;";
        document.querySelector('.sandwiches').style = "display: none;";
    } else if (items === 'refreshers') {
        document.querySelector('.drinks').style = "display: Initial;"; 
        document.querySelector('.foods').style = "display: none;";  
        
        document.querySelector('.milkshakes').style = "display: none;";
        document.querySelector('.coffee-blends').style = "display: none;";
        document.querySelector('.refreshers').style = "display: Initial;";
        document.querySelector('.waffles').style = "display: none;";
        document.querySelector('.sandwiches').style = "display: none;";
    } else if (items === 'waffles') {
        document.querySelector('.drinks').style = "display: none;"; 
        document.querySelector('.foods').style = "display: Initial;"; 
        
        document.querySelector('.milkshakes').style = "display: none;";
        document.querySelector('.coffee-blends').style = "display: none;";
        document.querySelector('.refreshers').style = "display: none;";
        document.querySelector('.waffles').style = "display: Initial;";
        document.querySelector('.sandwiches').style = "display: none;";
    } else if (items === 'sandwiches') {
        document.querySelector('.drinks').style = "display: none;"; 
        document.querySelector('.foods').style = "display: Initial;";  
        
        document.querySelector('.milkshakes').style = "display: none;";
        document.querySelector('.coffee-blends').style = "display: none;";
        document.querySelector('.refreshers').style = "display: none;";
        document.querySelector('.waffles').style = "display: none;";
        document.querySelector('.sandwiches').style = "display: Initial;";
    } else if (items === 'menu') {
        document.querySelector('.menuChoices').style = "display: Initial;"; 

        document.querySelector('.drinks').style = "display: none;"; 
        document.querySelector('.foods').style = "display: none;";  
        
        document.querySelector('.milkshakes').style = "display: none;";
        document.querySelector('.coffee-blends').style = "display: none;";
        document.querySelector('.refreshers').style = "display: none;";
        document.querySelector('.waffles').style = "display: none;";
        document.querySelector('.sandwiches').style = "display: none;";
    }

}

function redirect(items)
    {
    var url = "menu.html";
    location.href = url;
    
    menuRender(items);
    }