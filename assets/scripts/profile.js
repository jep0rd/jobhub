// Get the form element
var form = document.getElementById("myForm");


// Listen for the submit event on the form
export default form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  

  // Extract form data using the FormData API
  var formData = new FormData(form);
  var name = formData.get("name");
  var experience = formData.get("experience");
  var education = formData.get("education");
  var skills = formData.get("skills");
  var languages = formData.get("languages");
  var additionalInfo = formData.get("additionalInfo");
  var aboutMe = formData.get("aboutMe");
  var resume = formData.get("resume");
  var privacy = formData.get("privacy");

  // Update the second card with the submitted data
  var card2 = document.querySelector(".card:last-of-type");
  card2.querySelector("p:nth-of-type(1)").textContent = "Name: " + name;
  card2.querySelector("p:nth-of-type(2)").textContent = "Experience: " + experience;
  card2.querySelector("p:nth-of-type(3)").textContent = "Education: " + education;
  card2.querySelector("p:nth-of-type(4)").textContent = "Skills: " + skills;
  card2.querySelector("p:nth-of-type(5)").textContent = "Languages: " + languages;
  card2.querySelector("p:nth-of-type(6)").textContent = "Additional Info: " + additionalInfo;
  card2.querySelector("p:nth-of-type(7)").textContent = "About Me: " + aboutMe;
  card2.querySelector("p:nth-of-type(8)")

  document.addEventListener("DOMContentLoaded", function() {
    // get the form element
    const form = document.querySelector("form");
  
    // listen for the submit event on the form
    form.addEventListener("submit", function(event) {
      // prevent the default form submission behavior
      event.preventDefault();
  
      // extract the form data using the FormData API
      const formData = new FormData(form);
      const data = {};
  
      // loop through the form data and add it to the data object
      for (const [name, value] of formData) {
        data[name] = value;
      }
  
      // log the form data
      console.log(data);
  
      // update the second card with the form data
      updateCardTwo(data);
    });
  });
  
  function updateCardTwo(data) {
    // get the elements in the second card
    const nameEl = document.querySelector("#name");
    const experienceEl = document.querySelector("#experience");
    const educationEl = document.querySelector("#education");
    const skillsEl = document.querySelector("#skills");
    const languagesEl = document.querySelector("#languages");
    const additionalInfoEl = document.querySelector("#additional-info");
    const aboutMeEl = document.querySelector("#about-me");
    const resumeEl = document.querySelector("#resume");
    const privacySettingsEl = document.querySelector("[name=privacy]");

  
    // update the elements with the form data
    nameEl.textContent = data.name;
    experienceEl.textContent = data.experience;
    educationEl.textContent = data.education;
    skillsEl.textContent = data.skills;
    languagesEl.textContent = data.languages;
    additionalInfoEl.textContent = data.additionalInfo;
    aboutMeEl.textContent = data.aboutMe;
    resumeEl.textContent = data.resume;
    privacySettingsEl.textContent = data.privacySettings;
  }
})

let navBar = document.querySelector(".navigation-section");
let accountDiv = document.querySelector(".account-btns-container");
accountDiv.remove();

let profileIcon = document.createElement("span");
profileIcon.classList.add("material-symbols-outlined", "profile-icon");
profileIcon.innerHTML = "account_circle";
navBar.appendChild(profileIcon);
