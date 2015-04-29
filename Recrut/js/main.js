// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var positionSet = [];
	var selectedPositionIndex = 0;
	var selectedGroupIndex = "All";
	var currentApplicantID = 2;

    var selectedApplicantID = 0;

    var defaultComment1 = new comment(0, "Paul Colella", "Very Smart! Approved!", "Interview 1");
    var defaultComment2 = new comment(1, "Brandt Nelson", "I think this applicant is a great cultural fit!", "Interview 2");

	var defaultPosition = new job("Finance Intern", "Default", positionSet.length);
	var defaultApplicant1 = new applicant("John", "Smith", "jsmith@mit.edu", "(601) 233-2341", "MIT", 0, "Group");
	var defaultApplicant2 = new applicant("Suzy", "Johnson", "suzy@stanford.edu", "(231) 334-8779", "Stanford", 1, "Group");

    defaultApplicant1.addComment(defaultComment1);
    defaultApplicant1.addComment(defaultComment2);

    defaultApplicant2.addComment(defaultComment1);
    defaultApplicant2.addComment(defaultComment2);

	defaultPosition.addApplicant(defaultApplicant1);
	defaultPosition.addApplicant(defaultApplicant2);
    positionSet.push(defaultPosition);

    var defaultPosition2 = new job("Sales Intern", "Default", positionSet.length);


    var defaultApplicant3 = new applicant("Paul", "Colella", "pc@caltech.edu", "(322) 555-2422", "Cal Tech", 0, "Group");
    var defaultApplicant4 = new applicant("Billy", "Bob", "billy@florida.edu", "(545) 444-4455", "Florida", 1, "Group");

    defaultApplicant3.addComment(defaultComment1);
    defaultApplicant3.addComment(defaultComment2);

    defaultApplicant4.addComment(defaultComment1);
    defaultApplicant4.addComment(defaultComment2);

    defaultPosition2.addApplicant(defaultApplicant3);
    defaultPosition2.addApplicant(defaultApplicant4);

    positionSet.push(defaultPosition2);

	var updatePositionRows = function(selectedRow) {
		$("#positionList").empty();
		for (var index = 0; index < positionSet.length; index++) {
			var positionList = document.getElementById('positionList');
	 		$("#positionList").append("<li class=\"folder position-button\" role=\"presentation\" id=\"position-button-" + index + "\"><a href=\"#\" class=\"position-selectable\" id=\"position-selectable-" + index + "\">" + positionSet[index].getName() + "</a></li>");
			$("#position-selectable-" + index).on('click', function(evt) {
                document.getElementById("search-field-applicant").value = "";
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
                document.getElementById("search-field-applicant").value = "";
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

	var updateApplicantRows = function(search) {
		$("#applicantList").empty();
        var applicants;
        if (!search) {
            applicants = positionSet[selectedPositionIndex].getApplicantsByGroup(selectedGroupIndex);
        }
        else {
            applicants = positionSet[selectedPositionIndex].getApplicantsByGroupAndSearch(selectedGroupIndex, search);
        }
		for (var index = 0; index < applicants.length; index++) {

            var group_dropdown = "";
            var groupsHighlighted = positionSet[selectedPositionIndex].getGroups();

            if (groupsHighlighted.length > 1) {
                group_dropdown += "<button type=\"button\" class=\"btn btn-primary btn-xs dropdown-toggle\" id=\"dropdown-btn-title-" + applicants[index].getID() + "\" data-toggle=\"dropdown\" aria-expanded=\"false\">" + applicants[index].getGroup() + "<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\" id=\"dropdown-list-" + applicants[index].getID() + "\">";
                for (var k = 1; k < groupsHighlighted.length; k++) {
                    group_dropdown += "<li><a href=\"#\" id=\"" + applicants[index].getID() + "-" + groupsHighlighted[k] + "\">" + groupsHighlighted[k] + "</a></li>";
                }
                group_dropdown += "</ul>";
            }

            var edit_button = "<button type=\"button\" class=\"btn btn-primary btn-xs\" id=\"edit-btn-title-" + applicants[index].getID() + "\"> Edit </button>";
            var delete_button = "<button type=\"button\" class=\"btn btn-primary btn-xs\" id=\"delete-btn-title-" + applicants[index].getID() + "\"> Delete </button>";
  
			var applicantList = document.getElementById('applicantList');
			$("#applicantList").append("<div class=\"panel panel-default\" id=\"applicant-selectable-0\" ><div class=\"panel-heading\">" + applicants[index].getFirstName() + " " + applicants[index].getLastName() + "<div class=\"btn-group\" style=\"float:right;\">"+group_dropdown + edit_button + delete_button + "</div></div><div class=\"panel-body\"><div class=\"col-md-4\"><table width=\"100%\"><tr><td>" + applicants[index].getEducation() + "</td></tr><tr><td><a href=\"#\" class=\"emailLink\" id=\"emailLink-" + applicants[index].getID() + "\">" + applicants[index].getEmail() + "</a></td></tr><tr><td>" + applicants[index].getPhoneNumber() + "</td></tr></table></div><div class=\"col-md-offset-2 col-md-3\"><table width=\"100%\"><tr><th>Documents</th></tr><tr><td><a href=\"#\" id=\"add-doc-" + applicants[index].getID() + "\">Add</a></td></tr><tr><td><a href=\"#\" id=\"doc-" + applicants[index].getID() + "\">View All</a></td></tr></table></div><div class=\"col-md-3\"><table width=\"100%\"><tr><th>Comments</th></tr><tr><td><a href=\"#\" id=\"add-comment-" + applicants[index].getID() + "\">Add</a></td></tr><tr><td><a href=\"#\" id=\"comment-" + applicants[index].getID() + "\">View All</a></td></tr></table></div></div></div>");
			var emailOfApplicant = applicants[index].getEmail();
			$("#emailLink-" + applicants[index].getID()).on('click', function(evt) {
				var applicantID = evt.target.id.split("-")[1];
				var applicantEmail = positionSet[selectedPositionIndex].getApplicant(applicantID).getEmail();
				$("#inputEmailToFormGroup").empty();
				$("#inputEmailToFormGroup").append("<label for=\"inputEmailTo\" class=\"col-sm-2 control-label\">To:</label><div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" id=\"inputEmailFrom\" value=\"" + applicantEmail + "\" readonly></div>");
				$('#emailModal').modal('show');
			});
			$("#doc-" + applicants[index].getID()).on('click', function(evt) {
                $("#docModalHeader").empty();
                $("#docModalHeader").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"closeDocModal\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Documents for " + applicants[evt.target.id.split("-")[1]].getFullName() + "</h4>");				
				$('#docModal').modal('show');
			});
            $("#comment-" + applicants[index].getID()).on('click', function(evt) {
                $("#commentsModalHeader").empty();
                $("#commentsModalHeader").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"closeDocModal\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Comments for " + applicants[evt.target.id.split("-")[1]].getFullName() + "</h4>");
                
                $("#commentsNav").empty();
                $("#commentsContent").empty();

                var allComments = applicants[evt.target.id.split("-")[1]].getComments();
                for (var comments = 0; comments < allComments.length; comments++) {
                    var curComment = allComments[comments];
                    $("#commentsNav").append("<li id=\"view-comment-" + comments + "\"><a href=\"#tab" + comments + "\" data-toggle=\"tab\">" + curComment.title + "</a></li>");
                    
                    $("#commentsContent").append("<div class=\"tab-pane\" id=\"tab" + comments + "\"><br><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">By</label><div class=\"col-sm-10\"><p class=\"form-control-static\" style=\"float:left;\">" + curComment.commenter + "</p></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Comment</label><div class=\"col-sm-10\"><p class=\"form-control-static\" style=\"float:left;\">" + curComment.text + "</p></div></div></form></div>");
                }

                $("#view-comment-0").addClass("active");
                $("#tab0").addClass("tab-pane active");

                $('#commentModal1').modal('show');
            });
			$("#add-doc-" + applicants[index].getID()).on('click', function(evt) {
                selectedApplicantID = evt.target.id.split("-")[2];

                $("#addDocModalHeader").empty();
                $("#addDocModalHeader").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"closeAddDocModal\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Add Document for " + applicants[selectedApplicantID].getFullName() + "</h4>");

				$('#addDocModal').modal('show');
			});
            $("#add-comment-" + applicants[index].getID()).on('click', function(evt) {
                selectedApplicantID = evt.target.id.split("-")[2];

                $("#addCommentModalHeader").empty();
                $("#addCommentModalHeader").append("<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" id=\"closeAddCommentModal\"><span aria-hidden=\"true\">&times;</span></button><h4 class=\"modal-title\">Add Comment for " + applicants[selectedApplicantID].getFullName() + "</h4>");

                $('#addCommentModal').modal('show');
            });
            $("#dropdown-list-" + applicants[index].getID()).on('click', function(evt) {
                $('#dropdown-btn-title-' + evt.target.id.split("-")[0]).empty();
                $('#dropdown-btn-title-' + evt.target.id.split("-")[0]).append(evt.target.id.split("-")[1] + "<span class=\"caret\"></span>");

                positionSet[selectedPositionIndex].getApplicant(evt.target.id.split("-")[0]).setGroup(evt.target.id.split("-")[1]);
            })
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
            var selectedGroupApplicant = selectedGroupIndex;
            if (selectedGroupApplicant == "All") {
                selectedGroupApplicant = "Group";
            }
     		var newApplicant = new applicant(firstName, lastName, email, phone, education, currentApplicantID, selectedGroupApplicant);
     		positionSet[selectedPositionIndex].addApplicant(newApplicant);
     		currentApplicantID = currentApplicantID + 1;

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

	$("#sendEmailModal").click(function(evt) {
     	var subject = document.getElementById("inputEmailSubject").value;
     	var content = document.getElementById("inputEmailContent").value;

     	if (!subject) {
     		$("#inputEmailSubjectFormGroup").addClass("has-error");
     	}
     	else {
     		$("#inputEmailSubjectFormGroup").removeClass("has-error");
     	}
     	if (!content) {
     		$("#inputEmailContentFormGroup").addClass("has-error");
     	}
     	else {
     		$("#inputEmailContentFormGroup").removeClass("has-error");
     	}
     	if (subject && content) {

     		$('#emailModal').modal('hide');
     		document.getElementById("inputEmailSubject").value = "";
     		document.getElementById("inputEmailContent").value = "";

     		$("#inputEmailSubjectFormGroup").removeClass("has-error");
     		$("#inputEmailContentFormGroup").removeClass("has-error");
     	}
     });

	$("#closeEmailModal").click(function(evt) {
		document.getElementById("inputEmailSubject").value = "";
	 	document.getElementById("inputEmailContent").value = "";

	 	$("#inputEmailSubjectFormGroup").removeClass("has-error");
		$("#inputEmailContentFormGroup").removeClass("has-error");
     });



	$("#closeDocModal").click(function(evt) {

     });

	$("#createAddDocModal").click(function(evt) {
		document.getElementById("inputAddDocName").value = "";

	 	$('#addDocModal').modal('hide');
     });

    $("#createAddCommentModal").click(function(evt) {
        var title = document.getElementById("inputTitle").value;
        var commenterName = document.getElementById("inputCommenterName").value;
        var text = document.getElementById("inputComment").value;

        if (!title) {
            $("#inputTitleFormGroup").addClass("has-error");
        }
        else {
            $("#inputTitleFormGroup").removeClass("has-error");
        }
        if (!commenterName) {
            $("#inputCommenterNameFormGroup").addClass("has-error");
        }
        else {
            $("#inputCommenterNameFormGroup").removeClass("has-error");
        }
        if (!text) {
            $("#inputAddCommentFormGroup").addClass("has-error");
        }
        else {
            $("#inputAddCommentFormGroup").removeClass("has-error");
        }

        if (title && commenterName && text) {
            $('#addCommentModal').modal('hide');
            document.getElementById("inputTitle").value = "";
            document.getElementById("inputCommenterName").value = "";
            document.getElementById("inputComment").value = "";

            $("#inputTitleFormGroup").removeClass("has-error");
            $("#inputCommenterNameFormGroup").removeClass("has-error");
            $("#inputAddCommentFormGroup").removeClass("has-error");

            var newComment = new comment(1, commenterName, text, title);
            var applicants = positionSet[selectedPositionIndex].getApplicantsByGroup(selectedGroupIndex);
            applicants[selectedApplicantID].addComment(newComment);
        }

     });

    $("#search-button-applicant").click(function(evt) {
        var searchValue = document.getElementById("search-field-applicant").value;
        updateApplicantRows(searchValue);
     });

    $("#search-field-applicant").keypress(function(e) {
        if(e.which == 13 || e.which == 8) {
            e.preventDefault();
            $("#search-button-applicant").click();
        }
    });

    $('#search-field-applicant').keyup(function(evt) {
        $("#search-button-applicant").click();
    });

});









