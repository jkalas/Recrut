// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var positionSet = [];
	var selectedPositionIndex = 0;

	var defaultPosition = new job("Finance Intern", "Default", positionSet.length);
    positionSet.push(defaultPosition);

    var defaultPosition2 = new job("Sales Intern", "Default", positionSet.length);
    positionSet.push(defaultPosition2);





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

     		var positionList = document.getElementById('positionList');
		 	positionList.innerHTML += "<li class=\"folder position-button\" role=\"presentation\" id=\"position-button-" + index + "\"><a href=\"#\" class=\"position-selectable\" id=\"position-selectable-" + index + "\">" + name + "</a></li>";
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

     	if (!groupName) {
     		$("#inputGroupFormGroup").addClass("has-error");
     	}
     	else {
     		// create new group
     		var selectedPosition = positionSet[selectedPositionIndex];
     		positionSet[selectedPositionIndex].addGroup(groupName);

     		$('#groupModal').modal('hide');
     		document.getElementById("inputGroup").value = "";

     		$("#inputGroupFormGroup").removeClass("has-error");

     		var groupList = document.getElementById('groupList');
		 	groupList.innerHTML += "<li class=\"folder group-button\" role=\"presentation\" id=\"group-button-" + groupName + "\"><a href=\"#\" class=\"group-selectable\" id=\"group-selectable-" + groupName + "\">" + groupName + "</a></li>";
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

     		$('#applicantModal').modal('hide');

     		document.getElementById("inputApplicantFirstName").value = "";
     		document.getElementById("inputApplicantLastName").value = "";
     		document.getElementById("inputApplicantEducation").value = "";
     		document.getElementById("inputApplicantEmail").value = "";
     		document.getElementById("inputApplicantPhone").value = "";

     		$("#inputApplicantFirstNameFormGroup").removeClass("has-error");
     		$("#inputApplicantLastNameFormGroup").removeClass("has-error");

     		var applicantList = document.getElementById('applicantList');
		 	applicantList.innerHTML += "<li class=\"folder\" role=\"presentation\"><a href=\"#\">" + firstName + " " + lastName + "</a></li>";
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





	$(".position-selectable").click(function(evt) {
		alert("asdfaa");
		for (var i = 0; i < positionSet.length; i++) {
			$("#position-button-" + i).removeClass("active");
		}

	 	var positionID = evt.target.id.split("-")[2];
	 	selectedPositionIndex = positionID;
	 	$("#position-button-" + positionID).addClass("active");
	 	
	 	$("#groupList").empty();
	 	var groups = positionSet[positionID].getGroups();
	 	var groupList = document.getElementById('groupList');

	 	for (var i = 0; i < groups.length; i++) {
		 	groupList.innerHTML += "<li class=\"folder group-button\" role=\"presentation\" id=\"group-button-" + groups[i] + "\"><a href=\"#\" class=\"group-selectable\" id=\"group-selectable-" + groups[i] + "\">" + groups[i] + "</a></li>";
	 	}

	 	$("#group-button-All").addClass("active");
     });


	$(".group-selectable").click(function(evt) {
		var groups = positionSet[selectedPositionIndex].getGroups();
		alert("s");
		for (var i = 0; i < groups.length; i++) {
			$("#group-button-" + groups[i]).removeClass("active");
		}

		var groupID = evt.target.id.split("-")[2];
	 	$("#group-button-" + groupID).addClass("active");
	});

});









