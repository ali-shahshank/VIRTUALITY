
  
  // Video auto Play
  document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video');

    // Ensure the video is muted to allow autoplay
    video.muted = true;

    function handleVideoPlayback() {
      const videoContainer = video.closest('.video-container');
      const rect = videoContainer.getBoundingClientRect();
      const inView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (inView) {
        video.play();
      } else {
        video.pause();
      }
    }

    window.addEventListener('scroll', handleVideoPlayback);
    window.addEventListener('resize', handleVideoPlayback);

    // Initially check if the video is in view
    handleVideoPlayback();
  });


//PARALLAX FOR OVERVIEW SECTION

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight && 
    rect.bottom > 0
  );
}

// Function to reveal and reset content on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal, .overview-img-container');
  reveals.forEach(reveal => {
    if (isInViewport(reveal)) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

// Event listeners
window.addEventListener('scroll', revealOnScroll);

// Initial check
document.addEventListener('DOMContentLoaded', revealOnScroll);




