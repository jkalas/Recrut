/**
 * Representation of one of the Jobs being recruited for.
 * Within a job are groups of applicants as well as information
 * about the job.
 * Each job has a common name as well as an ID number. The job of picking
 * a unique ID number is pushed onto the main part of the application
**/

var job = function(name, description, id) {
	//Initialization

	this.name = name;
	this.description = description;
	this.id = id;
	this.tags = [];
	this.groups = ["All"];
	this.applicants = [];


	//Public Methods
	
	this.toString = function() {
		return this.name + ':' + this.id.toString();
	}

	this.equals = function(id) {
		return (this.id == id);
	}

	this.getID = function() {
		return this.id;
	}

	this.getName = function() {
		return this.name;
	}

	this.setName = function(name) {
		this.name = name;
	}

	this.getDescription = function() {
		return this.description;
	}

	this.setDescription = function(description) {
		this.description = name;
	}

	this.getTags = function() {
		return this.tags;
	}

	this.hasTag = function(tag) {
		for (var i = 0; i < this.tags.length(); i++) {
			if (this.tags[i] == tag) {
				return true;
			}
		}
		return false;
	}

	this.addTag = function(tag) {
		this.tags.push(tag);
	}

	this.removeTag = function(tag) {
		for (var i = 0; i < this.tags.length(); i++) {
			if (this.tags[i] == tag) {
				this.tags.splice(i, 1);
				return;
			}
		}
		return;
	}

	this.getGroups = function() {
		return this.groups;
	}

	this.addGroup = function(groupName) {
		this.groups.push(groupName);
	}

	this.removeGroup = function(groupName) {
		for (var i = 0; i < this.groups.length(); i++) {
			if (this.groups[i] == groupName) {
				this.groups.splice(i, 1);
			}
		}
	}

	this.getApplicant = function(id) {
		for (var i = 0; i < this.applicants.length(); i++) {
			if (this.applicants[i].equals(id)) {
				return this.applicants[i]
			}
		}
		return false;
	}

	this.addApplicant = function(applicant) {
		this.applicants.push(applicant);
	}

	this.removeApplicant = function(id) {
		for (var i = 0; i < this.applicants.length(); i++) {
			if (this.applicants[i].equals(id)) {
				this.applicants.splice(i, 1);
			}
		}
	}

	this.getApplicantsByGroup = function(groupName) {
		var applicantsInGroup = [];
		if (groupName == "All") {
			return this.applicants;
		}
		for (var i = 0; i < this.applicants.length; i++) {
			if (this.applicants[i].isInGroup(groupName)) {
				applicantsInGroup.push(this.applicants[i]);
			}
		}
		return applicantsInGroup;
	}

}