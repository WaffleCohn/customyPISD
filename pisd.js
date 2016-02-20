function requestGrades()
{
	if (confirm("Do you want to view your grades?"))
	{
		goToGradebook();
	}
}

function changeName(name)
{
	var studentName = document.getElementById("content").getElementsByClassName("page-title")[0].getElementsByTagName("span")[0];

	studentName.innerHTML = name;
}

function changeLogo(url)
{
	var logo = document.getElementById("heading").getElementsByTagName("img")[0];

	logo.src = url;
}

function changeProfile(url)
{
	var avatarPic = document.getElementById("_145_userAvatar").getElementsByTagName("img")[0];

	avatarPic.src = url;
}

function addTab(html)
{
	var tab = '<li class="tab">' + html + '</li>',
		pageTabMenu = document.getElementsByClassName("pagetab-menu")[0];

	pageTabMenu.innerHTML += tab;
}

function addGradebookTab()
{
	var gradebookTab = '<a class="pagetab" href="javascript:goToGradebook();">Gradebook</a>';

	addTab(gradebookTab);
}

//Loads profile and stores the profile image on local storage, so it will only prompt user once (on start-up).
//Requires IE9, Chrome 4.0, Firefox 3.5, Safari 4.0, or Opera 11.5 or higher
function loadProfile() 
{
	//Assert that localStorage exists.
	localStorage;
	
	//Wait until the document is loaded.
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			
			//This opens the upload file chooser., add dummy element to the end
			var openFile = document.createElement("INPUT");
			openFile.type = "file";
			openFile.style = "visibility:hidden";
			openFile.id = "openImage";
			openFile.multiple = false;
			document.appendChild(openFile);
			
			//Load image
			if (localStorage.prof) {
				document.getElementById("_145_userAvatar").getElementsByTagName("img")[0].src = localStorage.prof;
			}
			var changeProfTab = '<a class="pagetab" href="javascript:uploadProfile()">Change Profile</a>';
			addTab(changeProfTab);
		}
	}, 10);
}

//Prompts the user to upload a new profile.
function uploadProfile() 
{
	var f = document.getElementById("openImage");
	f.click();
	var img = URL.createObjectURL(f.files[0]);
	document.getElementById("_145_userAvatar").getElementsByTagName("img")[0].src = img;
	localStorage.prof = img;
}

function changeTheme(color)
{
  // confirm it is hex
}

function addThemeChanger()
{
  
}
