function display()
{

    setVisibility('profile', 'block');
    var profile=[];
    profile=JSON.parse(localStorage.getItem('profile'));
    console.log(profile);
    var name=profile[0].name1.split("@");			//var pname=progile[0].name1;
    document.getElementById("pname").innerHTML=name[0];
    var uname=profile[0].name1;		//var pname=progile[0].name1;
    document.getElementById("puname").innerHTML=uname;
    document.getElementById("location").innerHTML="hyderabad";

}



function setVisibility(cls, visibility) {

    switch (cls) {
        case 'about':
            document.getElementById(cls).style.display = visibility;
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('profile').style.display = 'none';
            break;
        case 'profile':
            document.getElementById(cls).style.display = visibility;
            document.getElementById('about').style.display = 'none';
            document.getElementById('welcome').style.display = 'none';
            break;
        case 'welcome':
            document.getElementById(cls).style.display = visibility;
            document.getElementById('about').style.display = 'none';
            document.getElementById('profile').style.display = 'none';
            break;
    }
}