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

// Search functionality
function searchEmployees() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('employeeTable');
    const rows = table.getElementsByTagName('tr');
    const resultsDiv = document.getElementById('searchResults');

    let visibleCount = 0;

    // Start from index 1 to skip header row
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        // Search through name, email, and department columns (skip phone and actions)
        for (let j = 0; j < cells.length - 2; j++) {
            const cellText = cells[j].textContent || cells[j].innerText;
            if (cellText.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        if (found) {
            rows[i].style.display = '';
            visibleCount++;
        } else {
            rows[i].style.display = 'none';
        }
    }

    // Show search results info
    if (filter.length > 0) {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `Found ${visibleCount} employee${visibleCount !== 1 ? 's' : ''} matching "${filter}"`;
    } else {
        resultsDiv.style.display = 'none';
    }
}

// Add some visual enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        }

        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            this.textContent = isDark ? '☀️' : '🌙';

            // Save theme preference
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

