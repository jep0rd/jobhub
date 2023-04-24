// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user submits the filter form, apply the filters
var filterForm = document.getElementById("filter-form");
filterForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the default form submission behavior
  
  // Get the checked categories
  var selectedCategories = [];
  var categories = document.getElementsByName("category");
  for (var i = 0; i < categories.length; i++) {
    if (categories[i].checked) {
      selectedCategories.push(categories[i].value);
    }
  }
  
  // TODO: Apply the selected categories as filters on your content
  
  // Close the modal
  modal.style.display = "none";
});
