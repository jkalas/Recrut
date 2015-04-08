/**
 *representation of an applicant and all applicable data
 */

 var applicant = function(firstName, lastName, id, group) {
 	//Initialize
 	this.firstName = firstName;
 	this.lastName = lastName;

 	//optional info
 	this.email;
 	this.phoneNumber;
 	this.experience; //school or previous employer
 	this.documents = [];
 	this.comments = [];

 	//non-applicant info
 	this.id = id;

 	this.group = group;

 	//Public Methods
 	this.toString = function() {
 		return this.firstName + ' ' + this.lastName + ':' + this.id.toString();
 	}

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

 	this.getExperience = function() {
 		return this.experience;
 	}

 	this.setExperience = function(experience) {
 		this.experience = experience;
 	} 	

 	this.getGroup = function() {
 		return this.group;
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
			if (this.documents[i].equals(id) {
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
			if (this.comments[i].equals(id) {
				this.comments.splice(i, 1);
				return;
			}
		}
		return;
	}

 }