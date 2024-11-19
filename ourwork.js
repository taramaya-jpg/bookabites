// script.js
document.getElementById('submitBtn').addEventListener('click', function () {
    const studentId = document.getElementById('studentId').value;
    const outputDiv = document.getElementById('output');

    // Dummy data: mapping Student IDs to PDF URLs
    const Group = {
        '07230064': '0723064_haning.pdf',
        '07230017': '07230017_Bakery.pdf',
        '07230078': '07230010_home.pdf',
        '07230010': '07230078_nc.pdf'
    };

    if (Group[studentId]) {
        // Display the PDF in an iframe
        outputDiv.innerHTML = `
            <h2> Work by ID: ${studentId}</h2>
            <iframe src="${Group[studentId]}" title="Submitted Work"></iframe>
        `;
    } else {
        // Show error message if Student ID is not found
        outputDiv.innerHTML = `
            <p style="color: red;">No work found for Student ID: ${studentId}. Please check the ID and try again.</p>
        `;
    }
});
