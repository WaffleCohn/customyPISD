# customyPISD
A collection of methods for modifying your personal myPISD page (for Plano ISD students).

## Setup
Log into your mypisd account (portal.mypisd.net). Scroll your mouse over the gear icon at the top of the page and click on the "Page" tab. This opens a box titled "Manage Page." Click on the "JavaScript" link on the right side of the page in the navigation column. Finally copy and paste the following code into the JavaScript text field:
```
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://wafflecohn.github.io/customyPISD/pisd.js";
document.body.appendChild(script);

script.addEventListener("load", function() {

    // Paste code here

});
```
Click save and you've successfully "installed" customyPISD.

## Available Functions
To modify your page, call any of the following available functions inside the area enclosed by brackets {} marked "Paste code here". If you don't know programming, just copy and paste the code provided. Wherever there are quotes, fill in the requested information but leave the quotes there. (ex: ```changeName("Batman");``` changes your displayed name to Batman)

Every time you log in, receive a notification asking to navigate to the gradebook
```
requestGrades();
```

Change the name displayed in the page header
```
changeName("name");
```

Change the PISD logo to the picture of your choice
```
changeLogo("url");
```

Change the profile image dislayed at the top right corner of the page
```
changeProfile("url");
```

Add a new page tab with custom html rather than just text. Embed your tags in ```<a class='pagetab'></a>``` to keep the page styling.
```
addTab("html");
```

Add a tab that navigates directly to the grade book
```
addGradebookTab();
```

Change the theme color of the page. Colors must be in the hexadecimal format (hex code) and enclosed in quotes. Ex: enter "#29B6F6" for a light blue
```
changeThemeColor("color");
```

Add a page tab with a color picker to more easily change the theme color of the page.
```
addThemeChanger();
```

## Example Execution
Here is the example code for enabling the gradebook notification, changing your name to "The President", and changing the theme color to green.
```
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://wafflecohn.github.io/customyPISD/pisd.js";
document.body.appendChild(script);

script.addEventListener("load", function() {

    requestGrades();
  
    changeName("The President");

    changeThemeColor("#2ECC71");

});
