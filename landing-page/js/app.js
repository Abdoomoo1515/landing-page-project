/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const myul     = document.querySelector('#navbar__list');
const mydocfrag= document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//creating links and appending them
sections.forEach(function(e){
   const newLis   = document.createElement('li');
   newLis.setAttribute('class' , 'lis');
   const newLinks = document.createElement('a');
   const DataNav  = e.getAttribute('data-nav');
   const textNode = document.createTextNode(DataNav);

   newLinks.addEventListener('click', function(){

    e.scrollIntoView({behavior : "smooth"});
   });

   newLinks.appendChild(textNode);
   newLis.appendChild(newLinks);
   mydocfrag.appendChild(newLis);

});
// build the nav
myul.appendChild(mydocfrag);

// highlights section in viewport upon scrolling.
window.addEventListener('scroll' ,function(){

    //loop all over the sections and using getBoundingClientRect method
    sections.forEach(function(section){
        const rect = section.getBoundingClientRect();
        //if condition to select the viewport
        if(rect.top >= -100 && rect.top <=200 ){
            //removing your-active-class from all sections
            sections.forEach(function(remove){
                remove.classList.remove('your-active-class')
            })
            //else add your-active-class to the section that is viewed
            section.classList.add('your-active-class')
        
        //selecting all links to attach the your-active-class
        const allLinks = document.querySelectorAll('a');
        allLinks.forEach(function(allink){
            if(section.getAttribute('data-nav') == allink.textContent){
               allink.classList.add('active-link');
            }else{
                allink.classList.remove('active-link');
            }

        });

       }
    });

});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


