/**
 * Representation of one of the Jobs being recruited for.
 * Within a job are groups of applicants as well as information
 * about the job.
 * Each job has a common name as well as an ID number. The job of picking
 * a unique ID number is pushed onto the main part of the application
**/

var job = function(name, id) {
	//Initialization

	this.name = name;
	this.id = id;
	this.tags = [];
	this.groups = [];


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

	this.getGroup = function(id) {
		for (var i = 0; i < this.groups; i++) {
			if (this.groups[i].equals(id)) {
				return this.groups[i]
			}
		}
		return false;
	}

	this.addGroup = function(group) {
		this.groups.push(group);
	}

	this.removeGroup = function(id) {
		for (var i = 0; i < this.groups; i++) {
			if (this.groups[i].equals(id)) {
				this.groups.splice(i, 1);
			}
		}
	}


}