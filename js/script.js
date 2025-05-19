document.addEventListener('DOMContentLoaded', function() {
    const jobTitles = document.querySelectorAll('.job-title');
    const jobDescriptions = document.querySelectorAll('.job-description');

    // Function to update active states
    function updateActiveStates(clickedTitle) {
        // Remove active class from all titles and descriptions
        jobTitles.forEach(title => title.classList.remove('active'));
        jobDescriptions.forEach(desc => desc.classList.remove('active'));

        // Add active class to clicked title and corresponding description
        clickedTitle.classList.add('active');
        const jobId = clickedTitle.getAttribute('data-job');
        document.getElementById(jobId).classList.add('active');
    }

    // Add click event listeners to all job titles
    jobTitles.forEach(title => {
        title.addEventListener('click', function() {
            updateActiveStates(this);
        });
    });
}); 