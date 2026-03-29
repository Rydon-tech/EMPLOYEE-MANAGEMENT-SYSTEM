function viewDetails() {
    alert("Viewing employee details...");
}

function editContact() {
    alert("Edit Alert");
}

function deleteContact() {
    let confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        alert("Deleted!");
    }
}

function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById("contactform");
    const fullName = form.fullName.value;
    alert(`Employee "${fullName}" has been added successfully!`);
    form.reset();
}

