ADMIN PANE LOG-IN CREDENTIALS:

USERNAME : s-twins@admin
PASSWORD : password


OUTLINE: 

./file.html {
    1-Website landing page
    2-Navigation Bar to other html pages
    3- Car search form

    page style-> .style.css


    page script {
      1-  ./jsfolder/file1.js
      2-  ./jsfolder/file2.js
    }
}

./images{
    Images assets{
      1.  Logos 
      2.  Background - Images
    }
}

./titlservice{
    titleservice.html => | 1- Information about tilt service
                         | 2- Tilt Service Request Form
                         | 2.1- Form Data saved @ ../adminDisplay/adminDisplay.html

    3. ./titlserivce.css -> page styling
    4. ./titleservice.js -> page script
}


./login{
    !!!-> ONlY ACCESSABLE FROM HOME PAGE (@file.html)
   login.html =>  | 1.Basic login form 
                  |  -> Approved -> @../adminDisplay/adminDisplay.html
                  |  -> Rejected -> @login.html thorws alert("Invalid Username || Password")

    2. ./login.css -> page styling
    3. ./login.js -> page script
}

./getfreequote{
    
    getfreequote.html =>  |  1.Info page
                          | -> redirects @https://www.nerdwallet.com/insurance/match on click to get free quote after form submission 

    2. ./getfreequote.css -> page styling
    3. ./getfreequote.js -> page script
}

./contact{
    
    contact.html => 1.Form to be submitted -> displayed @../adminDisplay/adminDisplay.html

    2. ./contact.css -> page styling
    3. ./contact.js -> page script
}

./adminDisplay{

    adminDisplay.html => | 1.Contacts Table => extracts data from Local Storage stored from
                         | @/contact page/contact.html#form
                         | 2.Tray Service Table => extracts data from Local Storage stored from
                         | @/tiltservice/t.html#myForm

    2. ./adminDisplay.css -> page styling
    3. ./adminDisplay.js -> page script
    
}

./about pages{
  about.html => 1.Info page
  
  2. ./about pages/about.css -> page styling
  3. ./about pages/about.js -> page script
}




