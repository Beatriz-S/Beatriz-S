document.addEventListener('DOMContentLoaded', function() {
    // Job selection functionality
    const jobTitles = document.querySelectorAll('.job-title');
    const jobDescriptions = document.querySelectorAll('.job-description');

    // Project selection functionality
    const projectTitles = document.querySelectorAll('.project-title');
    const projectDescriptions = document.querySelectorAll('.project-description');

    // Function to clear all active states
    function clearAllActiveStates() {
        // Clear job states
        jobTitles.forEach(title => title.classList.remove('active'));
        jobDescriptions.forEach(desc => desc.classList.remove('active'));
        
        // Clear project states
        projectTitles.forEach(title => title.classList.remove('active'));
        projectDescriptions.forEach(desc => desc.classList.remove('active'));
    }

    // Function to update active states for jobs
    function updateJobActiveStates(clickedTitle) {
        clearAllActiveStates();
        
        // Add active class to clicked title and corresponding description
        clickedTitle.classList.add('active');
        const jobId = clickedTitle.getAttribute('data-job');
        document.getElementById(jobId).classList.add('active');
    }

    // Function to update active states for projects
    function updateProjectActiveStates(clickedTitle) {
        clearAllActiveStates();
        
        // Add active class to clicked title and corresponding description
        clickedTitle.classList.add('active');
        const projectId = clickedTitle.getAttribute('data-project');
        document.getElementById(projectId).classList.add('active');
    }

    // Add click event listeners to all job titles
    jobTitles.forEach(title => {
        title.addEventListener('click', function() {
            updateJobActiveStates(this);
        });
    });

    // Add click event listeners to all project titles
    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            updateProjectActiveStates(this);
        });
    });
}); 