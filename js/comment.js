/**
 * representation of comments by recruiters on and applicant
 */

var comment = function(id, commenter, text, title) {
	//Initialize
	this.id = id;
	this.commenter = commenter;
	this.text = text;

	if (typeof title === 'undefined') {
		this.title = "comments from " + this.commenter;
	} else {
		this.title = title;
	}

	//x,y coords for comments on docs
	this.xy;

	//Public Methods

	this.getID = function() {
		return this.id;
	}

	this.getCommenter = function() {
		return this.commenter;
	}

	this.setCommenter = function(commenter) {
		this.commenter = commenter;
	}

	this.getText = function() {
		return this.text;
	}

	this.setText = function(text) {
		this.text = text;
	}

	this.getTitle = function() {
		return this.title;
	}

	this.setTitle = function(title) {
		this.title = title;
	}

	this.getXY = function() {
		return this.xy;
	}

	this.setXY = function(x,y) {
		this.xy = [x,y];
	}

}