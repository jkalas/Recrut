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
	 jimmyDean.setPhoneNumber("(617) 123-6634");
	 var resume = new doc("Resume", 1, "../img/resume.png");
	 var coverLetter = new doc("Cover Letter", 1, "../img/coverLetter.png");
     jimmyDean.addDocument(resume);
     jimmyDean.addDocument(coverLetter);

	 bryanWilliams.setEmail("bryanwilly1234@gmail.com");
	 bryanWilliams.setExperience("Stanford");
	 bryanWilliams.setPhoneNumber("(808) 777-6634");
     bryanWilliams.addDocument(resume);
     bryanWilliams.addDocument(coverLetter);

	 jeremyKalas.setEmail("jkalas@hotmail.com");
	 jeremyKalas.setExperience("MIT");
	 jeremyKalas.setPhoneNumber("(631) 123-4561");
     jeremyKalas.addDocument(resume);
     jeremyKalas.addDocument(coverLetter);

	 jennyLin.setEmail("linjenny@mit.edu");
	 jennyLin.setExperience("MIT");
	 jennyLin.setPhoneNumber("(206) 567-2342");
	 jennyLin.addDocument(resume);

	 itamarBelson.setEmail("it_bel@gmail.com");
	 itamarBelson.setExperience("MIT");
	 itamarBelson.setPhoneNumber("(425) 789-2345");
	 itamarBelson.addDocument(resume);

	 paulColella.setEmail("paul_colella@gmail.com");
	 paulColella.setExperience("MIT");
	 paulColella.setPhoneNumber("(213) 963-5683");
	 paulColella.addDocument(resume);

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

		 	if (document.getElementById("resume").value) {
		 		newApplicant.addDocument(resume);
		 	}

		 	addApplicant(newApplicant);

		 	$('#applicantModal').modal('hide'); 

		 	clearAppEntry();
	 	} else {
	 		document.getElementById("applicantError").style.display = "block";
	 	}
     });

     $("#applicantCancel").click(function(evt) {
	 	clearAppEntry();
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

    $("#emailSubmit").click(function(evt) {
	 	document.getElementById("emailSubject").value = "";
	 	document.getElementById("emailBody").value = "";
     });

    $("#emailCancel").click(function(evt) {
	 	document.getElementById("emailSubject").value = "";
	 	document.getElementById("emailBody").value = "";
     });

    $("#addNotesSubmit").click(function(evt) {
	 	document.getElementById("newNotes").value = "";
     });

    $("#addNotesCancel").click(function(evt) {
	 	document.getElementById("newNotes").value = "";
     });

    $("#addDocSubmit").click(function(evt) {
	 	document.getElementById("newDocName").value = "";
	 	document.getElementById("newDoc").value = "";
     });

    $("#addDocCancel").click(function(evt) {
	 	document.getElementById("newDocName").value = "";
	 	document.getElementById("newDoc").value = "";
     });

    $(".dropdown-menu li a").click(function(){
  		$(this).parents(".typeSelect").find(".selection").text($(this).text());
  		$(this).parents(".typeSelect").find(".selection").val($(this).data('value'));
	});

	function clearAppEntry() {
		document.getElementById("firstName").value = "";
	 	document.getElementById("lastName").value = "";
	 	document.getElementById("exp").value = "";
	 	document.getElementById("email").value = "";
	 	document.getElementById("phone").value = "";
	 	document.getElementById("resume").value = "";
	 	document.getElementById("coverLetter").value = "";
	 	document.getElementById("applicantError").style.display = "none";
	}

     function addApplicant(entry) {
		var div = document.createElement("div");
	 	div.className = "panel panel-default";
	 	
	 	var row = document.createElement("div");
	 	row.className = "row";

	 	var col1 = document.createElement("div");
	 	col1.className = "col-md-4";

	 	var col2 = document.createElement("div");
	 	col2.className = "col-md-2";

	 	var col3 = document.createElement("div");
	 	col3.className = "col-md-3";

	 	var col4 = document.createElement("div");
	 	col4.className = "col-md-3";

	 	var name = document.createElement("div");
  		name.className = "panel-heading";
  		name.innerHTML = "<h3 class=\"panel-title\">" + entry.firstName + " " + entry.lastName + "</h3>";
  		//name.innerHTML += "<a data-toggle =\"collapse\" data-parent=\"#accordion\" href=\"#" + entry.firstName + entry.lastName + "\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a>";
  		div.appendChild(name);
  		div.appendChild(row);

  		var main = document.createElement("div");

  		var status = document.getElementById("groupMenu");
  		var cln = status.cloneNode(true);
  		cln.style.display = "block";
  		cln.id = entry.firstName + entry.lastName + "Group";
  		cln.children[0].children[0].innerHTML = entry.group;

  		var groupBody = document.createElement("div");
  		groupBody.className = "panel-body";
  		groupBody.innerHTML = "<b>Group</b><br><br>"
  		groupBody.appendChild(cln);
  		
  		var body = document.createElement("div");
  		body.className = "panel-body";
  		body.innerHTML += entry.getExperience() + "<br>" + entry.getEmail() + "<br>" + entry.getPhoneNumber() + "<br>";
  		main.appendChild(body);

  		var email = document.createElement("div");
  		email.className = "panel-body";
  		var emailButton = document.createElement("button");
  		emailButton.className = "document-button";
  		emailButton.innerHTML = "<span class=\"glyphicon glyphicon-envelope\"></span>" + " Email";
  		$(emailButton).click(function(evt) {
	 		$('#emailModal').modal('show'); 
     	});

  		email.appendChild(emailButton);

	 	var docs = document.createElement("div");
  		docs.className = "panel-body";

		var addDoc = document.createElement("button");
  		addDoc.className = "document-add";
  		addDoc.innerHTML = "<span class=\"glyphicon glyphicon-plus\"></span>";
  		$(addDoc).click(function(evt) {
	 		$('#addDocumentsModal').modal('show'); 
     	});

  		docs.innerHTML = "<b>Documents</b>"
     	docs.appendChild(addDoc);
     	docs.appendChild(document.createElement("br"));
     	docs.appendChild(document.createElement("br"));

	 	entry.documents.forEach(function(doc){
	 		var docButton = document.createElement("button");
	 		docButton.className = "document-button";
	 		docButton.innerHTML = "<span class=\"glyphicon glyphicon-paperclip\"></span> " + doc.name;
	 		docButton.setAttribute('type', 'button');

	 		docs.appendChild(docButton);
	 		docs.appendChild(document.createElement("br"));
	 		$(docButton).click(function(evt) {
	 			console.log(doc.getSrc());
	 			$('#docContent').css('background-image', 'url(' + doc.getSrc() + ')');
	 			$('#docModal').modal('show'); 
     		});
	 	});

	 	var notes = document.createElement("div");
  		notes.className = "panel-body";

  		var addNotes = document.createElement("button");
  		addNotes.className = "document-add";
  		addNotes.innerHTML = "<span class=\"glyphicon glyphicon-plus\"></span>";
  		$(addNotes).click(function(evt) {
	 		$('#addNotesModal').modal('show'); 
     	});

  		var notesButton = document.createElement("button");
  		notesButton.className = "document-button";
  		notesButton.innerHTML = "<span class=\"glyphicon glyphicon-pencil\"></span>" + " Interview 1";
  		$(notesButton).click(function(evt) {
	 		$('#notesModal').modal('show'); 
     	});

  		notes.innerHTML = "<b>Notes</b>";
  		notes.appendChild(addNotes);
  		notes.appendChild(document.createElement("br"));
     	notes.appendChild(document.createElement("br"));

     	notes.appendChild(notesButton);

	 	main.appendChild(email);

	 	col1.appendChild(main);
	 	col2.appendChild(groupBody);
	 	col3.appendChild(docs);
	 	col4.appendChild(notes);

	 	row.appendChild(col1);
	 	row.appendChild(col2);
	 	row.appendChild(col3);
	 	row.appendChild(col4);

	 	applicantList.appendChild(div);
     }

});
