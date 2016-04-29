var db = [
	{
		id : 1,
		name : "user1",
		password : "pass1"
	},
	{
		id : 2,
		name : "user2",
		password : "pass2"
	}
]

function getLoggedInUser() {
	var regexS = "[\\?&]" + "id" + "=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if(results == null) {
		redirectToLogin("You are not logged in!");
	} else {
		for (index = 0; index < db.length; ++index) {
			if(db[index].id == results[1]) {
				return db[index];
			}
		}
		redirectToLogin("You are not in the database!");
	}
}

function redirectToLogin(msg) {
	alert("You are not logged in!");
	window.location.assign("login.html");
}