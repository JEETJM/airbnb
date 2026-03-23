document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("reviewForm");
  if (!reviewForm) return;

  const ratingInputs = document.querySelectorAll('input[name="review[rating]"]');
  const ratingMessage = document.getElementById("ratingMessage");
  const ratingError = document.getElementById("ratingError");
  const ratingGroup = document.getElementById("ratingGroup");

  const reviewComment = document.getElementById("reviewComment");
  const commentError = document.getElementById("commentError");

  const messages = {
    1: "Terrible 😞",
    2: "Not good 😕",
    3: "Average 🙂",
    4: "Very good 😍",
    5: "Amazing 🔥"
  };

  if (ratingInputs.length) {
    ratingInputs.forEach((input) => {
      input.addEventListener("change", function () {
        const value = this.value;

        if (ratingMessage) {
          ratingMessage.textContent = messages[value] || "Select a rating";
        }

        if (value !== "") {
          if (ratingError) ratingError.classList.remove("show");
          if (ratingGroup) ratingGroup.classList.remove("rating-invalid");
        }
      });
    });
  }

  if (reviewComment) {
    reviewComment.addEventListener("input", function () {
      if (reviewComment.value.trim() !== "") {
        if (commentError) commentError.classList.remove("show");
        reviewComment.classList.remove("comment-invalid");
      }
    });
  }

  reviewForm.addEventListener("submit", function (e) {
    let selectedRating = "";
    ratingInputs.forEach((input) => {
      if (input.checked) {
        selectedRating = input.value;
      }
    });

    const commentValue = reviewComment ? reviewComment.value.trim() : "";
    let isValid = true;

    // rating validation
    if (selectedRating === "") {
      isValid = false;
      if (ratingError) ratingError.classList.add("show");
      if (ratingGroup) ratingGroup.classList.add("rating-invalid");
      if (ratingMessage) ratingMessage.textContent = "Select a rating";
    } else {
      if (ratingError) ratingError.classList.remove("show");
      if (ratingGroup) ratingGroup.classList.remove("rating-invalid");
    }

    // comment validation
    if (reviewComment && commentValue === "") {
      isValid = false;
      if (commentError) commentError.classList.add("show");
      reviewComment.classList.add("comment-invalid");
    } else if (reviewComment) {
      if (commentError) commentError.classList.remove("show");
      reviewComment.classList.remove("comment-invalid");
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});