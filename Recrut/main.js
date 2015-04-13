// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	 var allApplicants = [];

	 var paulColella = new applicant("Paul", "Colella", 1, "Unread");
	 var jimmyDean = new applicant("Jimmy", "Dean", 2, "First Round");
	 var jennyLin = new applicant("Jenny", "Lin", 3, "Unread");
	 var bryanWilliams = new applicant("Bryan", "Williams", 4, "Denied");
	 var itamarBelson = new applicant("Itamar", "Belson", 5, "First Round");
	 var jeremyKalas = new applicant("Jeremy", "Kalas", 6, "Denied");

	 jimmyDean.setEmail("jimmydean@college.harvard.edu");
	 jimmyDean.setExperience("Harvard");
	 jimmyDean.setPhoneNumber("(555) 123-6634");
	 bryanWilliams.setEmail("bryanwilly1234@gmail.com");
	 bryanWilliams.setExperience("Stanford");
	 bryanWilliams.setPhoneNumber("(555) 777-6634");
	 jeremyKalas.setEmail("jkalas@hotmail.com");
	 jeremyKalas.setExperience("MIT");
	 jeremyKalas.setPhoneNumber("(555) 123-4561");
	 jennyLin.setEmail("linjenny@mit.edu");
	 jennyLin.setExperience("MIT");
	 jennyLin.setPhoneNumber("(555) 567-2342");
	 itamarBelson.setEmail("it_bel@gmail.com");
	 itamarBelson.setExperience("MIT");
	 itamarBelson.setPhoneNumber("(555) 789-2345");
	 paulColella.setEmail("paul_colella@gmail.com");
	 paulColella.setExperience("MIT");
	 paulColella.setPhoneNumber("(555) 963-5683");

	 allApplicants = [paulColella, jimmyDean, jennyLin, bryanWilliams, itamarBelson, jeremyKalas];

	 var applicantList = document.getElementById('applicantList');

	 allApplicants.forEach(function(entry) {
	 	addApplicant(entry);
	 });

	 $("#addJob").click(function(evt) {
	 	$('#jobModal').modal('show'); 
     });

     $("#addGroup").click(function(evt) {
     	$('#groupModal').modal('show'); 
     });

     $("#addApplicant").click(function(evt) {
	 	$('#applicantModal').modal('show'); 
     });

     $("#applicantSubmit").click(function(evt) {
     	var firstName = document.getElementById("firstName").value;
     	var lastName = document.getElementById("lastName").value;

     	if (firstName && lastName) {
		 	var newApplicant = new applicant(firstName, lastName, 0, "Unread");
		 	newApplicant.setExperience(document.getElementById("exp").value);
		 	newApplicant.setEmail(document.getElementById("email").value);
		 	newApplicant.setPhoneNumber(document.getElementById("phone").value);

		 	addApplicant(newApplicant);

		 	document.getElementById("firstName").value = "";
		 	document.getElementById("lastName").value = "";
		 	document.getElementById("exp").value = "";
		 	document.getElementById("email").value = "";
		 	document.getElementById("phone").value = "";
	 	} else {
	 		alert("Please enter a first name and last name.");
	 	}
     });

     $("applicantCancel").click(function(evt) {
	 		document.getElementById("firstName").value = "";
		 	document.getElementById("lastName").value = "";
		 	document.getElementById("exp").value = "";
		 	document.getElementById("email").value = "";
		 	document.getElementById("phone").value = "";
     });

    $("#jobSubmit").click(function(evt) {
     	var position = document.getElementById("positionName").value;
		var type = document.getElementById("typeSelection").innerHTML;

     	if (position && type) {
		 	var newJob = new job(position, 0);

		 	var jobsList = document.getElementById('jobsList');
		 	jobsList.innerHTML += "<li role=\"presentation\"><a href=\"#\">" + type + " - " + position + "</a></li>";

		 	document.getElementById("positionName").value = "";
		 	document.getElementById("positionType").selectedIndex = 0;
	 	} else {
	 		alert("Please enter a position name.");
	 	}
     });

    $("#jobCancel").click(function(evt) {
	 	document.getElementById("positionName").value = "";
	 	document.getElementById("positionType").selectedIndex = 0;
     });

    $("#groupSubmit").click(function(evt) {
     	var groupName = document.getElementById("groupName").value;

     	if (groupName) {
		 	var newGroup = new group(groupName, 0, "Job");

		 	var groupList = document.getElementById('groupList');
		 	groupList.innerHTML += "<li role=\"presentation\"><a href=\"#\">" + groupName + "</a></li>";

		 	document.getElementById("groupName").value = "";
	 	} else {
	 		alert("Please enter a group name.");
	 	}
     });

    $("#groupCancel").click(function(evt) {
	 	document.getElementById("groupName").value = "";
     });

    $(".dropdown-menu li a").click(function(){
  		$(this).parents(".typeSelect").find(".selection").text($(this).text());
  		$(this).parents(".typeSelect").find(".selection").val($(this).data('value'));
	});

     function addApplicant(entry) {
     	var div = document.createElement("div");
	 	div.className = "applicant";
	 	var name = document.createElement("b");
  		name.innerHTML = entry.firstName + " " + entry.lastName;

	 	var experience = document.createTextNode(entry.getExperience());
	 	var email = document.createTextNode(entry.getEmail());
	 	var phone = document.createTextNode(entry.getPhoneNumber());

	 	div.appendChild(name);
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(experience);
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(email);
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(phone);

	 	applicantList.appendChild(div);
     }

});