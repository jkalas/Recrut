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
	 var resume = new doc("Resume", 1, "../img/resume.png");
     jimmyDean.addDocument(resume);
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

		 	$('#applicantModal').modal('hide'); 

		 	document.getElementById("firstName").value = "";
		 	document.getElementById("lastName").value = "";
		 	document.getElementById("exp").value = "";
		 	document.getElementById("email").value = "";
		 	document.getElementById("phone").value = "";
		 	document.getElementById("applicantError").style.display = "none";
	 	} else {
	 		document.getElementById("applicantError").style.display = "block";
	 	}
     });

     $("#applicantCancel").click(function(evt) {
	 		document.getElementById("firstName").value = "";
		 	document.getElementById("lastName").value = "";
		 	document.getElementById("exp").value = "";
		 	document.getElementById("email").value = "";
		 	document.getElementById("phone").value = "";
		 	document.getElementById("applicantError").style.display = "none";
     });

    $("#jobSubmit").click(function(evt) {
     	var position = document.getElementById("positionName").value;
		var type = document.getElementById("typeSelection").innerHTML;

     	if (position && type) {
		 	var newJob = new job(position, 0);

		 	var jobsList = document.getElementById('jobsList');
		 	jobsList.innerHTML += "<li class=\"folder\" role=\"presentation\"><a href=\"#\">" + type + " - " + position + "</a></li>";

		 	$('#jobModal').modal('hide'); 

		 	document.getElementById("positionName").value = "";
		 	document.getElementById("jobError").style.display = "none";
		 	document.getElementById("typeSelection").innerHTML = "Full Time";
	 	} else {
	 		document.getElementById("jobError").style.display = "block";
	 	}
     });

    $("#jobCancel").click(function(evt) {
	 	document.getElementById("positionName").value = "";
	 	document.getElementById("jobError").style.display = "none";
	 	document.getElementById("typeSelection").innerHTML = "Full Time";
     });

    $("#docCancel").click(function(evt) {
	 	$('#docModal').modal('hide'); 
     });

    $("#groupSubmit").click(function(evt) {
     	var groupName = document.getElementById("groupName").value;

     	if (groupName) {
		 	var newGroup = new group(groupName, 0, "Job");

		 	var groupList = document.getElementById('groupList');
		 	groupList.innerHTML += "<li class=\"folder\" role=\"presentation\"><a href=\"#\">" + groupName + "</a></li>";

     		$('#groupModal').modal('hide'); 

		 	document.getElementById("groupName").value = "";
		 	document.getElementById("groupError").style.display = "none";
	 	} else {
	 		document.getElementById("groupError").style.display = "block";
	 	}
     });

    $("#groupCancel").click(function(evt) {
	 	document.getElementById("groupName").value = "";
	 	document.getElementById("groupError").style.display = "none";
     });

    $(".dropdown-menu li a").click(function(){
  		$(this).parents(".typeSelect").find(".selection").text($(this).text());
  		$(this).parents(".typeSelect").find(".selection").val($(this).data('value'));
	});

     function addApplicant(entry) {
		var div = document.createElement("div");
	 	div.className = "panel panel-default";
	 	
	 	var name = document.createElement("div");
  		name.className = "panel-heading";
  		name.innerHTML = "<h3 class=\"panel-title\">" + entry.firstName + " " + entry.lastName + "</h3>";
  		//name.innerHTML += "<a data-toggle =\"collapse\" data-parent=\"#accordion\" href=\"#" + entry.firstName + entry.lastName + "\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a>";
  		div.appendChild(name);

  		var collapse = document.createElement("div");
  		collapse.className = "panel-collapse collapse in";
  		collapse.id = entry.firstName + entry.lastName;
  		
  		var body = document.createElement("div");
  		body.className = "panel-body";
  		body.innerHTML = entry.getExperience() + "<br>" + entry.getEmail() + "<br>" + entry.getPhoneNumber() + "<br>";
  		collapse.appendChild(body);
  		
	 	var docs = document.createElement("div");
  		docs.className = "panel-body";
	 	entry.documents.forEach(function(doc){
	 		var docButton = document.createElement("button");
	 		docButton.innerHTML = doc.name;
	 		docButton.setAttribute('type', 'button');
	 		docs.appendChild(docButton);
	 		$(docButton).click(function(evt) {
	 			console.log(doc.getSrc());
	 			$('#docContent').css('background-image', 'url(' + doc.getSrc() + ')');

	 			$('#docModal').modal('show'); 
     		});
	 	});

	 	collapse.appendChild(docs);
	 	div.appendChild(collapse);
	 	applicantList.appendChild(div);
     }

});

