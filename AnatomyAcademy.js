const allExerciseLinks = document.querySelectorAll('.exerciseLink');

allExerciseLinks.forEach(function(link) {

    link.addEventListener('click', function(event) {
        event.preventDefault();

        const muscleGroup = this.getAttribute('data-muscle');
        const description = document.getElementById(muscleGroup);

        description.style.display = description.style.display == 'none' ? 'block' : 'none';
    });
});
