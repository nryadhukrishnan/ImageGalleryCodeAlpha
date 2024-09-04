document.addEventListener("DOMContentLoaded", function() {
    var deleteButtons = document.querySelectorAll(".delete-btn");
    console.log(deleteButtons); // Check if buttons are being selected

    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var pic = this.closest(".pic");
            console.log(pic); // Check if the parent element is being selected
            if (pic) {
                pic.remove();
            }
        });
    });
});
