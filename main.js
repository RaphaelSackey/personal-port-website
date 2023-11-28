// i have not used Js in like 2 years and i have forgotten the syntext so dont mind me being 
// uneficient with the code and basically being specific and repeating myself lol.


document.addEventListener('DOMContentLoaded', function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    if (filename === 'index.html') {
        document.querySelector('.projects_button').addEventListener('click', function() {
            window.location.href = 'portfolio.html';
        });
        
        
        document.querySelector('.linkdln_button').addEventListener('click', function() {
            window.location.href = 'https://www.linkedin.com/in/raphael-sackey-1120381b1/';
        });
    
        document.querySelector('#pb_1').addEventListener('click', function() {
            window.location.href = 'https://www.linkedin.com/in/raphael-sackey-1120381b1/';
        })
        document.querySelector('#pb_2').addEventListener('click', function() {
            window.location.href = 'https://github.com/RaphaelSackey/Space-Station-and-Weather-tracker-application';
        })
        
        document.querySelector('#pb_3').addEventListener('click', function() {
            window.location.href = 'https://www.linkedin.com/in/raphael-sackey-1120381b1/';
        })
        
    }


    if (filename === 'portfolio.html') {

        document.querySelector('#pb_1').addEventListener('click', function() {
            window.location.href = 'https://www.linkedin.com/in/raphael-sackey-1120381b1/';
        })
        document.querySelector('#pb_2').addEventListener('click', function() {
            window.location.href = 'https://github.com/RaphaelSackey/Space-Station-and-Weather-tracker-application';
        })
        
        document.querySelector('#pb_3').addEventListener('click', function() {
            window.location.href = 'https://www.linkedin.com/in/raphael-sackey-1120381b1/';
        })
    
        document.querySelector('#pb_4').addEventListener('click', function() {
            window.location.href = 'https://github.com/RaphaelSackey/Farm-manager-appliction-';
        })
       
    }

});









