// Function to generate table rows
function generateTableRows() {
    var tbody = document.getElementById("reviewsTableBody");
    for (var i = 0; i < 14; i++) {
        var row = document.createElement("tr");
        if (i == 0) {
        row.innerHTML = `
            <td>June 24th, 2024</td>
            <td>Badagry, Lagos</td>
            <td>James Taiwo</td>
            <td>This is a very lovely...</td>
            <td>760</td>
            <td class="approved">Approved</td>
            <td class="reviews__blank">
                <img 
                    src="../../images/moreD.svg" 
                    alt="more" 
                    class="reviews__more"
                >
            </td>
        `;

        } else if 

        (i == 1) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Agege, Lagos</td>
                <td>Tina Rhodes</td>
                <td>Met expectations...</td>
                <td>850</td>
                <td class="declined">Declined</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 2) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Apata, Ibadan</td>
                <td>Henry Nwoko</td>
                <td>Above expectations...</td>
                <td>724</td>
                <td class="pending">Pending</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 3) {
            row.innerHTML = `
                <td>June 24th, 2024</td>
                <td>Ekpoma, Benin</td>
                <td>Dami Biobaku</td>
                <td>This is a very lovely...</td>
                <td>1299</td>
                <td class="approved">Approved</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 4) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Idumota, Lagos</td>
                <td>Tina Rhodes</td>
                <td>Met expectations...</td>
                <td>234</td>
                <td class="declined">Declined</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 5) {
            row.innerHTML = `
                <td>June 24th, 2024</td>
                <td>Odeda, Abeokuta</td>
                <td>James Taiwo</td>
                <td>Above expectations...</td>
                <td>419</td>
                <td class="pending">Pending</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 6) {
            row.innerHTML = `
                <td>June 24th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Tina Rhodes</td>
                <td>This is a very lovely...</td>
                <td>101</td>
                <td class="approved">Approved</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 7) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Dami Biobaku</td>
                <td>Met expectations...</td>
                <td>1011</td>
                <td class="declined">Declined</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 8) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>James Taiwo</td>
                <td>Above expectations...</td>
                <td>2300</td>
                <td class="pending">Pending</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 9) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Dami Biobaku</td>
                <td>This is a very lovely...</td>
                <td>640</td>
                <td class="approved">Approved</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 10) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Dami Biobaku</td>
                <td>Met expectations...</td>
                <td>640</td>
                <td class="declined">Declined</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 11) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Dami Biobaku</td>
                <td>Above expectations...</td>
                <td>640</td>
                <td class="pending">Pending</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 12) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Dami Biobaku</td>
                <td>This is very lovely... </td>
                <td>640</td>
                <td class="approved">Approved</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        } else if

        (i == 13) {
            row.innerHTML = `
                <td>May 10th, 2024</td>
                <td>Badagry, Lagos</td>
                <td>Dami Biobaku</td>
                <td>Met expectations...</td>
                <td>640</td>
                <td class="declined">Declined</td>
                <td class="reviews__blank">
                    <img 
                        src="../../images/moreD.svg" 
                        alt="more" 
                        class="reviews__more"
                    >
                </td>
            `;
        }

        tbody.appendChild(row);
    }
}

window.onload = generateTableRows;

// Get the form element
const reviewForm = document.getElementById('reviewForm');

// Add event listener for form submission
reviewForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Extract values from form fields
    const areaName = document.getElementById('areaName').value;
    const amenities = document.getElementById('amenities').value;
    const description = document.getElementById('description').value;

    // Log the values to the console
    console.log("Area Name:", areaName);
    console.log("Amenities:", amenities);
    console.log("Description:", description);

    // Simulate successful submission (you would replace this with actual form submission handling)
    // For demonstration purposes, I'm using a setTimeout function to simulate an asynchronous action
    setTimeout(function() {
        // Redirect the user back to the review page
        window.location.href = '/reviews.html';

        // Show a popup or notification indicating that the review has been added
        alert('Review added successfully!');
    }, 1000); // Change the delay as needed (milliseconds)
});
