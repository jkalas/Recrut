// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var positionSet = [];
	var selectedPositionIndex = 0;
	var selectedGroupIndex = "All";

	var defaultPosition = new job("Finance Intern", "Default", positionSet.length);
	var defaultApplicant1 = new applicant("John", "Smith", "jsmith@mit.edu", "(601) 233-2341", "MIT", "id", "dd");
	var defaultApplicant2 = new applicant("Suzy", "Johnson", "suzy@stanford.edu", "(231) 334-8779", "Stanford", "id", "dd");

	defaultPosition.addApplicant(defaultApplicant1);
	defaultPosition.addApplicant(defaultApplicant2);
    positionSet.push(defaultPosition);

    var defaultPosition2 = new job("Sales Intern", "Default", positionSet.length);
    positionSet.push(defaultPosition2);

	var updatePositionRows = function(selectedRow) {
		$("#positionList").empty();
		for (var index = 0; index < positionSet.length; index++) {
			var positionList = document.getElementById('positionList');
	 		$("#positionList").append("<li class=\"folder position-button\" role=\"presentation\" id=\"position-button-" + index + "\"><a href=\"#\" class=\"position-selectable\" id=\"position-selectable-" + index + "\">" + positionSet[index].getName() + "</a></li>");
			$("#position-selectable-" + index).on('click', function(evt) {
				for (var i = 0; i < positionSet.length; i++) {
					$("#position-button-" + i).removeClass("active");
					$("#position-button-" + i).removeClass("folder-active");
					$("#position-button-" + i).addClass("folder");
				}

			 	var positionID = evt.target.id.split("-")[2];
			 	selectedPositionIndex = positionID;
			 	$("#position-button-" + positionID).addClass("active");
			 	$("#position-button-" + positionID).addClass("folder-active");
			 	
			 	updateGroupRows("All");
			 	selectedGroupIndex = "All";
			 	updateApplicantRows();
		    });
		}
		updateGroupRows("All");
		selectedGroupIndex = "All";
		updateApplicantRows();
		$("#position-button-" + selectedRow).addClass("active");
		$("#position-button-" + selectedRow).addClass("folder-active");
	}

	var updateGroupRows = function(selectedGroup) {
		$("#groupList").empty();
		var groups = positionSet[selectedPositionIndex].getGroups();
		for (var index = 0; index < groups.length; index++) {
			var groupList = document.getElementById('groupList');
			$("#groupList").append("<li class=\"folder group-button\" role=\"presentation\" id=\"group-button-" + groups[index] + "\"><a href=\"#\" class=\"group-selectable\" id=\"group-selectable-" + groups[index] + "\">" + groups[index] + "</a></li>");
			$("#group-selectable-" + groups[index]).on('click', function(evt) {
				for (var i = 0; i < groups.length; i++) {
					$("#group-button-" + groups[i]).removeClass("active");
					$("#group-button-" + groups[i]).removeClass("folder-active");
					$("#group-button-" + groups[i]).addClass("folder");
				}

				var groupID = evt.target.id.split("-")[2];
			 	$("#group-button-" + groupID).addClass("active");
			 	$("#group-button-" + groupID).addClass("folder-active");

			 	selectedGroupIndex = groupID;
			 	updateApplicantRows();
			});
		}
		$("#group-button-" + selectedGroup).addClass("active");
		$("#group-button-" + selectedGroup).addClass("folder-active");
		selectedGroupIndex = selectedGroup;
		updateApplicantRows();
	}

	var updateApplicantRows = function() {
		$("#applicantList").empty();
		var applicants = positionSet[selectedPositionIndex].getApplicantsByGroup(selectedGroupIndex);
		for (var index = 0; index < applicants.length; index++) {
			var applicantList = document.getElementById('applicantList');
			$("#applicantList").append("<div class=\"panel panel-default\" id=\"applicant-selectable-0\" ><div class=\"panel-heading\">" + applicants[index].getFirstName() + " " + applicants[index].getLastName() + "</div><div class=\"panel-body\"><div class=\"col-md-4\"><table width=\"100%\"><tr><td>Education:</td><td>" + applicants[index].getEducation() + "</td></tr><tr><td>Email:</td><td><a href=\"#\">" + applicants[index].getEmail() + "</a></td></tr><tr><td>Phone:</td><td>" + applicants[index].getPhoneNumber() + "</td></tr></table></div><div class=\"col-md-offset-2 col-md-3\"><table width=\"100%\"><tr><th>Documents</th></tr><tr><td><a>Cover Letter</a></td></tr><tr><td><a>Resume</a></td></tr></table></div><div class=\"col-md-3\"><table width=\"100%\"><tr><th>Comments</th></tr><tr><td><a>Interview 1</a></td></tr><tr><td><a>Interview 2</a></td></tr></table></div></div></div>");
		}
	}

    updatePositionRows(0);
    updateGroupRows("All");
    updateApplicantRows();


	$("#addPosition").click(function(evt) {
		$('#positionModal').modal('show'); 
    });

    $("#createPositionModal").click(function(evt) {
     	var name = document.getElementById("inputPosition").value;
     	var description = document.getElementById("inputDescription").value;

     	if (!name) {
     		$("#inputPositionFormGroup").addClass("has-error");
     	}
     	else {
     		$("#inputPositionFormGroup").removeClass("has-error");
     	}
     	if (!description) {
			$("#inputDescriptionFormGroup").addClass("has-error");
     	}
     	else {
     		$("#inputDescriptionFormGroup").removeClass("has-error");
     	}

     	if (name && description) {
     		// create new job
     		var index = positionSet.length;
     		var newPosition = new job(name, description, index);
     		positionSet.push(newPosition);

     		$('#positionModal').modal('hide');

     		document.getElementById("inputPosition").value = "";
		 	document.getElementById("inputDescription").value = "";

     		$("#inputPositionFormGroup").removeClass("has-error");
     		$("#inputDescriptionFormGroup").removeClass("has-error");
     		selectedPositionIndex = index;
     		updatePositionRows(index);
     	}
     });

    $("#closePositionModal").click(function(evt) {
	 	document.getElementById("inputPosition").value = "";
		document.getElementById("inputDescription").value = "";

		$("#inputPositionFormGroup").removeClass("has-error");
     	$("#inputDescriptionFormGroup").removeClass("has-error");
     });


    $("#addGroup").click(function(evt) {
	 	$('#groupModal').modal('show'); 
     });

    $("#createGroupModal").click(function(evt) {
     	var groupName = document.getElementById("inputGroup").value;
     	var listGroups = positionSet[selectedPositionIndex].getGroups();
     	var sameName = false;
     	for (var i = 0; i < listGroups.length; i++) {
     		if (groupName == listGroups[i]) {
     			sameName = true;
     		}
     	}
     	if (!groupName || sameName) {
     		$("#inputGroupFormGroup").addClass("has-error");
     	}
     	else {
     		// create new group
     		var selectedPosition = positionSet[selectedPositionIndex];
     		positionSet[selectedPositionIndex].addGroup(groupName);

     		$('#groupModal').modal('hide');
     		document.getElementById("inputGroup").value = "";

     		$("#inputGroupFormGroup").removeClass("has-error");

     		updateGroupRows(groupName);
     	}
     });

    $("#closeGroupModal").click(function(evt) {
	 	document.getElementById("inputGroup").value = "";

		$("#inputGroupFormGroup").removeClass("has-error");
     });


    $("#addApplicant").click(function(evt) {
	 	$('#applicantModal').modal('show'); 
     });

    $("#createApplicantModal").click(function(evt) {
     	var firstName = document.getElementById("inputApplicantFirstName").value;
     	var lastName = document.getElementById("inputApplicantLastName").value;
     	var education = document.getElementById("inputApplicantEducation").value;
     	var email = document.getElementById("inputApplicantEmail").value;
     	var phone = document.getElementById("inputApplicantPhone").value;

     	if (!firstName) {
     		$("#inputApplicantFirstNameFormGroup").addClass("has-error");
     	}
     	else {
     		$("#inputApplicantFirstNameFormGroup").removeClass("has-error");
     	}
     	if (!lastName) {
			$("#inputApplicantLastNameFormGroup").addClass("has-error");
     	}
     	else {
     		$("#inputApplicantLastNameFormGroup").removeClass("has-error");
     	}

     	if (firstName && lastName) {
     		// create new applicant
     		var newApplicant = new applicant(firstName, lastName, email, phone, education, 0, selectedGroupIndex);
     		positionSet[selectedPositionIndex].addApplicant(newApplicant);

     		updateApplicantRows();

     		$('#applicantModal').modal('hide');

     		document.getElementById("inputApplicantFirstName").value = "";
     		document.getElementById("inputApplicantLastName").value = "";
     		document.getElementById("inputApplicantEducation").value = "";
     		document.getElementById("inputApplicantEmail").value = "";
     		document.getElementById("inputApplicantPhone").value = "";

     		$("#inputApplicantFirstNameFormGroup").removeClass("has-error");
     		$("#inputApplicantLastNameFormGroup").removeClass("has-error");

     	}
     });

	$("#closeApplicantModal").click(function(evt) {
	 	document.getElementById("inputApplicantFirstName").value = "";
     	document.getElementById("inputApplicantLastName").value = "";
     	document.getElementById("inputApplicantEducation").value = "";
     	document.getElementById("inputApplicantEmail").value = "";
     	document.getElementById("inputApplicantPhone").value = "";

    	$("#inputApplicantFirstNameFormGroup").removeClass("has-error");
     	$("#inputApplicantLastNameFormGroup").removeClass("has-error");
     });




});









