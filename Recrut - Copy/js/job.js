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
	this.groups = ["All"];
	this.applicants = [];
	this.searchTags = description.toLowerCase().split(" ").concat(name.split(" "));


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

	this.getSearchTags = function() {
 		return this.searchTags;
 	}

 	this.addSearchTag = function(tag) {
 		this.searchTags.push(tag.toLowerCase());
 	}

 	this.removeSearchTag = function(tag) {
		for (var i = 0; i < this.searchTags.length; i++) {
			if (this.searchTags[i] == tag.toLowerCase()) {
				this.searchTags.splice(i, 1);
				return;
			}
		}
		return;
	}

	this.searchByKeys = function(search) {
		var searchKeys = search.toLowerCase()split(" ");
		var tags = this.getSearchTags();
		for (var j = 0; j < searchKeys.length; j++) {
			for (var k = 0; k < tags.length; k++) {
				if (tags[k].indexOf(searchKeys[j]) > -1) {
					return true;
				}
			}
		}
		return false;
	}

	this.getGroups = function() {
		return this.groups;
	}

	this.addGroup = function(groupName) {
		this.groups.push(groupName);
	}

	this.removeGroup = function(groupName) {
		for (var i = 0; i < this.groups.length; i++) {
			if (this.groups[i] == groupName) {
				this.groups.splice(i, 1);
			}
		}
	}

	this.getApplicant = function(id) {
		for (var i = 0; i < this.applicants.length; i++) {
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
		for (var i = 0; i < this.applicants.length; i++) {
			if (this.applicants[i].equals(id)) {
				this.applicants.splice(i, 1);
			}
		}
	}

	this.searchGroups = function(search) {
		var searchKeys = search.toLowerCase()split(" ");
		var groups = this.getGroups();
		var matched_groups = []
		for (var j = 0; j < groups.length; j++) {
			for (var k = 0; k < searchKeys.length; k++) {
				if (tags[k].indexOf(searchKeys[k]) > -1) {
					matched_groups.push(groups[j])
					break
				}
			}
		}
		return matched_groups;
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

	this.getApplicantsByGroupAndSearch = function(groupName, search) {
		var applicantsInGroupAndSearch = [];
		if (groupName == "All") {
			for (var i = 0; i < this.applicants.length; i++) {
				if (this.applicants[i].searchByKeys(search)) {
					applicantsInGroupAndSearch.push(this.applicants[i]);
				}
			}
		} else {
			for (var i = 0; i < this.applicants.length; i++) {
				if (this.applicants[i].isInGroup(groupName)) {
					if (this.applicants[i].searchByKeys(search)) {
						applicantsInGroupAndSearch.push(this.applicants[i]);
					}
				}
			}
		}
		return applicantsInGroupAndSearch
	}

}