// query the job description
let job_description = document.querySelector('.you');
// query the nav bar
let navbar = document.querySelector('.the_navbar');
// on home screen make it dissapear
// on up scroll make it appear

// set a last scroll
let lastScroll = 0;

window.addEventListener('scroll', function () {
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
        if (currentScroll - lastScroll > 0) {
            // Make Navbar dissapear
            navbar.classList.add('dissapear');
        } else {
            navbar.classList.remove('dissapear');
            job_description.classList.add('appear');
        }
        // Make the you dissapear at top of screen
        if (currentScroll === 0) {
            job_description.classList.remove('appear');
        }
         // set the current scroll to the last scroll
    lastScroll = currentScroll;
})