import React from "react";



function NavBar(){
    return(
        <div class="flex items-center justify-between  ">
    

          
        <div class=" md:flex space-x-16 mt-2 font-bold">
            <a href="home" class="hover:text-green-400">HOME</a>
            <a href="about"  class="hover:text-green-400">ABOUT</a>
            <a href="contact"  class="hover:text-green-400">CONTACT</a>
            <a href="gallery"  class="hover:text-green-400">Gallery</a>
            <a href="services"  class="hover:text-green-400">SERVICES</a>
            <a href="login"  class="hover:text-green-400">Login</a>
        </div>
        
       </div>

    );
}

export default NavBar;