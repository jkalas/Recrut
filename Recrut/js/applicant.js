/**
 *representation of an applicant and all applicable data
 */

 var applicant = function(firstName, lastName, email, phoneNumber, education, id, group) {
 	//Initialize
 	this.firstName = firstName;
 	this.lastName = lastName;

 	//optional info
 	this.email = email;
 	this.phoneNumber = phoneNumber;
 	this.education = education; //school or previous employer
 	this.documents = [];
 	this.comments = [];

 	//searchTags
 	this.searchTags = [firstName, lastName];

 	//non-applicant info
 	this.id = id;

 	this.group = group;

 	//Public Methods

 	this.equals = function(id) {
 		return (this.id == id);
 	}

 	this.getID = function() {
		return this.id;
	}

 	this.getFirstName = function() {
 		return this.firstName;
 	}

 	this.getLastName = function() {
 		return this.lastName;
 	}

 	this.setFirstName =  function(firstName) {
 		this.firstName = firstName;
 	}

 	this.setLastName = function(lastName) {
 		this.lastName = lastName;
 	}

 	this.getEmail = function() {
 		return this.email;
 	}

 	this.setEmail = function(email) {
 		this.email = email;
 	}

	this.getPhoneNumber = function() {
 		return this.phoneNumber;
 	}

 	this.setPhoneNumber = function(phoneNumber) {
 		this.phoneNumber = phoneNumber;
 	}

 	this.getEducation = function() {
 		return this.education;
 	}

 	this.setEducation = function(education) {
 		this.education = education;
 	}

 	this.getSearchTags = function() {
 		return this.searchTags;
 	}

 	this.addSearchTag = function(tag) {
 		this.searchTags.push(tag);
 	}

 	this.removeSearchTag = function(tag) {
		for (var i = 0; i < this.searchTags.length; i++) {
			if (this.searchTags[i] == tag) {
				this.searchTags.splice(i, 1);
				return;
			}
		}
		return;
	}

	this.searchByKeys = function(search) {
		var searchKeys = search.split(" ");
		var tags = this.getSearchTags();
		for (var j = 0; j < searchKeys.length; j++) {
			for (var k = 0; k < tags.length; k++) {
				if (tags[k].indexOf(searchKey[j]) > -1) {
					return true;
				}
			}
		}
		return false;
	}

 	this.getGroup = function() {
 		return this.group;
 	}

 	this.isInGroup = function(groupName) {
 		return (this.group == groupName);
 	}

 	this.setGroup = function(group) {
 		this.group = group;
 	}

 	this.getDocuments = function() {
		return this.documents;
	}

	this.addDocument = function(document) {
		this.documents.push(document);
	}

	this.removeDocument = function(id) {
		for (var i = 0; i < this.documents.length(); i++) {
			if (this.documents[i].equals(id)) {
				this.documents.splice(i, 1);
				return;
			}
		}
		return;
	}

	this.getComments = function() {
		return this.comments;
	}

	this.addComment = function(comment) {
		this.comments.push(comment);
	}

	this.removeComment = function(id) {
		for (var i = 0; i < this.comments.length(); i++) {
			if (this.comments[i].equals(id)) {
				this.comments.splice(i, 1);
				return;
			}
		}
		return;
	}

 }