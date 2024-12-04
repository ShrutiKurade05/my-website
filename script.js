// script.js
$(document).ready(function () {
    // Add item to the list
    $("#add-item").click(function () {
        const item = $("#item-input").val();
        if (item) {
            const listItem = `<li>${item} <span class="delete-item">X</span></li>`;
            $("#item-list").append(listItem);
            $("#item-input").val(""); // Clear input field
        } else {
            alert("Please enter an item name!");
        }
    });

    // Delete an item from the list
    $("#item-list").on("click", ".delete-item", function () {
        $(this).parent().fadeOut(function () {
            $(this).remove();
        });
    });

    // Change item color on hover
    $("#item-list").on("mouseenter", "li", function () {
        $(this).css("background-color", "#e0e0e0");
    }).on("mouseleave", "li", function () {
        $(this).css("background-color", "#f9f9f9");
    });
});
