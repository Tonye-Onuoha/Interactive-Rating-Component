const ratingContainer = document.getElementById("container");
const submissionContainer = document.getElementById("submission-container");
const ratingButtons = Array.from(document.querySelectorAll(".rating-button"));
const submitButton = document.getElementById("submit-button");
const ratingValue = document.getElementById("rating");
let selectedRating = null;

// This function is used to reset the styling of a previously selected rating button.
const resetSelectedRating = () => {
    const selectedRatingButton = ratingButtons.find((rateButton) => rateButton.textContent === selectedRating);
    selectedRatingButton.style.backgroundColor = "hsl(213, 17%, 24%)";
};

// This function is used to select a rating button.
const selectRatingButton = (e) => {
    // if the button has already been selected, do nothing.
    if (e.currentTarget.textContent === selectedRating) return;
    // if no button was previously selected, mark the selected button and store its value.
    if (!selectedRating) {
        selectedRating = e.currentTarget.textContent;
        e.currentTarget.style.backgroundColor = "hsl(0, 100%, 100%)";
        submitButton.style.backgroundColor = "hsl(0, 100%, 100%)";
    }
    // else unmark/reset the previously selected button before marking the newly selected button.
    else {
        resetSelectedRating();
        selectedRating = e.currentTarget.textContent;
        e.currentTarget.style.backgroundColor = "hsl(0, 100%, 100%)";
        submitButton.style.backgroundColor = "hsl(0, 100%, 100%)";
    }
};

/* Event Listeners */

ratingButtons.forEach((rateButton) => {
    rateButton.addEventListener("click", selectRatingButton);
});

submitButton.addEventListener("click", (e) => {
    // if no rating has been selected, do nothing.
    if (!selectedRating) return;
    // otherwise, show "Thank you" card after submission.
    ratingContainer.style.display = "none";
    submissionContainer.style.display = "flex";
    ratingValue.textContent = selectedRating;
});
