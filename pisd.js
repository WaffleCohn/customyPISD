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


function changeTheme(color)
{
  // confirm it is hex
}

function addThemeChanger()
{
  
}
