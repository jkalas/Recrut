// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	 var allApplicants = [];

	 var paulColella = new applicant("Paul", "Colella", 1, "Yes");
	 var jimmyDean = new applicant("Jimmy", "Dean", 2, "Yes");
	 var jennyLin = new applicant("Jenny", "Lin", 3, "Yes");
	 var bryanWilliams = new applicant("Bryan", "Williams", 4, "No");
	 var itamarBelson = new applicant("Itamar", "Belson", 5, "Yes");
	 var jeremyKalas = new applicant("Jeremy", "Kalas", 6, "No");

	 jimmyDean.setEmail("jimmydean@gmail.com");
	 jimmyDean.setExperience("Harvard");
	 jimmyDean.setPhoneNumber("(555) 123-6634");
	 bryanWilliams.setEmail("bryanwilly1234@gmail.com");
	 bryanWilliams.setExperience("MIT");
	 bryanWilliams.setPhoneNumber("(555) 777-6634");
	 jeremyKalas.setEmail("jkalas@gmail.com");
	 jeremyKalas.setExperience("MIT");
	 jeremyKalas.setPhoneNumber("(555) 123-4561");
	 jennyLin.setEmail("linjenny@gmail.com");
	 jennyLin.setExperience("MIT");
	 jennyLin.setPhoneNumber("(555) 567-2342");
	 itamarBelson.setEmail("it_bel@gmail.com");
	 itamarBelson.setExperience("MIT");
	 itamarBelson.setPhoneNumber("(555) 789-2345");
	 paulColella.setEmail("paul_colella@gmail.com");
	 paulColella.setExperience("MIT");
	 paulColella.setPhoneNumber("(555) 963-5683");

	 var allApplicants = [paulColella, jimmyDean, jennyLin, bryanWilliams, itamarBelson, jeremyKalas];

	 var applicantList = document.getElementById('applicantList');

	 allApplicants.forEach(function(entry) {
	 	var div = document.createElement("div");
	 	div.className = "applicant";
	 	var name = document.createElement("b");
  		name.innerHTML = entry.firstName + " " + entry.lastName;

	 	var experience = document.createTextNode(entry.getExperience());
	 	var email = document.createTextNode(entry.getEmail());
	 	var phone = document.createTextNode(entry.getPhoneNumber());

	 	div.appendChild(name);
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(experience);
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(email);
	 	div.appendChild(document.createElement("br"));
	 	div.appendChild(phone);

	 	applicantList.appendChild(div);
	 });


});