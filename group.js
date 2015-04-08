/**
 * representation of the groups of applicants within a given job
 * 
 */

 var group = function(name, id, job) {
 	//Initialize
 	this.name = name;
 	this.id = id;
 	this.job = job;
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

	this.getJob = function() {
		return this.job;
	}

	this.setJob = function(job) {
		this.job = job;
	}

	this.getApplicants = function() {
		return this.applicants;
	}

	this.addApplicant = function(applicant) {
		this.applicants.push(applicant);
	}

	this.removeApplicant = function(applicant) {
		for (var i = 0; i < this.applicants.length(); i++) {
			if (this.) {
				this.tags.splice(i, 1);
				return;
			}
		}
		return;
	}


 }