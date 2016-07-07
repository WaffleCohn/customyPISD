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
			document.body.appendChild(openFile);
			
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
	f.onchange = function() {
		var img = URL.createObjectURL(f.files[0]);
		document.getElementById("_145_userAvatar").getElementsByTagName("img")[0].src = img;
		localStorage.prof = img;
	};
}

function addThemeChanger()
{
	var c = document.cookie;
	var currentColor = c.substring(c.indexOf("color") + 6, c.indexOf(";", c.indexOf("color")));
	var hasTheme = (c.indexOf("color") > -1);
	
	var colorItem = "<li class='tab'><a class='pagetab'><input type='color' value='" + (hasTheme ? currentColor : "#4f7fb2") + "' onchange='changeThemeColor(this.value);' /></a></li>";
	pageTabMenu.innerHTML += colorItem;
	
	if (hasTheme)
	       changeThemeColor(currentColor);
}

function changeThemeColor(color)
{
	// must be 6-digit hex
	var hexRegEx = /^#[0-9a-fA-F]{6}$/;
	
	if (!hexRegEx.test(color))
	{
		console.log("Error: improper color format. Please enter a six-digit hex code such as #123456.");
		return;
	}

    var hsl = getHSL(color);

    var headers = document.getElementsByClassName("dr-table-subheader");
    for (i=0; i < headers.length; i++) 
        headers[i].style.background = color;

    var color1 = "hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
    var color2 = lighten(hsl[0], hsl[1], hsl[2], .2);
    color2 = "hsl(" + color2[0] + ", " + color2[1] + "%, " + color2[2] + "%)";
    var color3 = lighten(hsl[0], hsl[1], hsl[2], .4);
    color3 = "hsl(" + color3[0] + ", " + color3[1] + "%, " + color3[2] + "%)";

    var navigation = document.getElementById("navigation");
    navigation.style.background = "linear-gradient(to bottom, " + color3 + " 2%, " + color2 + " 7%, " + color1 + " 100%)";

    var tabs = document.getElementsByClassName("pagetab");
    color2 = lighten(hsl[0], hsl[1], hsl[2], .15);
    color2 = "hsl(" + color2[0] + ", " + color2[1] + "%, " + color2[2] + "%)";
    color3 = lighten(hsl[0], hsl[1], hsl[2], .3);
    color3 = "hsl(" + color3[0] + ", " + color3[1] + "%, " + color3[2] + "%)";
    var color4 = lighten(hsl[0], hsl[1], hsl[2], .45);
    color4 = "hsl(" + color4[0] + ", " + color4[1] + "%, " + color4[2] + "%)";
    var borderColor = lighten(hsl[0], hsl[1], hsl[2], -.2);
    borderColor = "hsl(" + borderColor[0] + ", " + borderColor[1] + "%, " + borderColor[2] + "%)";
       
    for (i=0; i < tabs.length; i++)
    {
        tabs[i].style.background = "linear-gradient(to bottom, " + color4 + " 1%, " + color3 + " 11%, " + color2 + " 73%, " + color1 + "100%)";
        tabs[i].style.border = "1px solid " + borderColor;
        tabs[i].style.boxShadow = "inset 0 0 3px 2px " + color;
        tabs[i].style.textShadow = "black 0 -1px 2px";
    }
       
    var selected = document.getElementsByClassName("selected")[0].getElementsByClassName("pagetab")[0];
    selected.style.cssText += "background: linear-gradient(to bottom, " + color1 + " 1%, " + color2 + " 11%, " + color3 + " 73%, " + color4 + "100%) !important";
    var picket = document.getElementById("__LamsTaskList_WAR_StargatePortlets_:_viewRoot:j_id6:j_id40_lbl");
    picket.style.backgroundColor = color;
    document.head.innerHTML += '<style type="text/css"> td.dr-tbpnl-tb-act:after { border-top-color: ' + color + ' !important; } input[type="submit"], input[type="button"], input[type="reset"], button:not(.aui-buttonitem-icon-only), .portlet-content .lfr-actions.lfr-extended { background: linear-gradient(to bottom, ' + color4 + ' 1%, ' + color3 + ' 11%, ' + color2 + ' 73%, ' + color1 + '100%) !important; border: 1px solid ' + color + ' !important; box-shadow: none !important} </style>';

    var d = new Date();
    d.setTime(d.getTime() + (10000*24*60*60*1000));
    document.cookie = "color=" + color + "; expires=" + d.toUTCString();
}

function getHSL(hex)
{
	hex = hex.substring(1);
	var r = parseInt(hex.substring(0,2), 16);
	var g = parseInt(hex.substring(2,4), 16);
	var b = parseInt(hex.substring(4,6), 16);
	
	var R = r/255, G = g/255, B = b/255;
	var Cmax = Math.max(R, G, B), Cmin = Math.min(R, G, B);
	var delta = Cmax-Cmin;
	
	var hue;
	if (delta === 0)
		hue = 0;
	else if (Cmax == R)
	{
		hue = ((G-B)/delta);
		if (hue < 0)
			hue = 6+hue;
		hue %= 6;
		hue *= 60;
	}
	else if (Cmax == G)
		hue = 60 * (((B-R)/delta) + 2);
	else if (Cmax == B)
		hue = 60 * (((R-G)/delta) + 4);
		
	var lum = (Cmax + Cmin) / 2;
	
	var sat = 0;
	if (delta !== 0)
		sat = delta / (1 - Math.abs(2*lum-1));
		
	return [hue.toFixed(2), sat.toFixed(2) * 100, lum.toFixed(2) * 100];
}

function lighten(h, s, l, factor)
{
	var lum = 1*l + (l*factor);
	return [h, s, lum];
}
