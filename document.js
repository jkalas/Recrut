/**
 * representation of a document with the proper paramaters for accesing it
 */

var document = function(name, id, src) {
	//Initialize
	this.name = name;
	this.id = id;
	this.src = src;
	this.comments = [];

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

	this.getSrc = function() {
		return this.Src;
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