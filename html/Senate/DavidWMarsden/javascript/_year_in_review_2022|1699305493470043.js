var timer = null;

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  
  document.body.style.setProperty('--scroll', scrollPosition);

  // let spinner = document.getElementsByClassName('spinner-text-container')[0];

  // if (scrollPosition > 0.2574) {
  //   // pause & hide animation
  //   spinner.style.animationPlayState = 'paused';
  //   spinner.parentElement.style.display = 'none';
  // } else {
  //   spinner.parentElement.style.display = 'block';

  //   if(timer !== null) {
  //     clearTimeout(timer); 
  //     spinner.style.animationPlayState = 'running';
  //   }
  
  //   timer = setTimeout(function() {
  //     spinner.style.animationPlayState = 'paused';
  //   }, 50);
  // }

}, false);

document.addEventListener('DOMContentLoaded', () => { 
  const isIPhone = navigator.userAgent.match(/(iPod|iPhone)/);    
  if (isIPhone) {
    $('.feature-animation-gif').css('display', 'flex');
    $('.feature-animation-mp4').css('display', 'none');
  } else {
    $('.feature-animation-gif').css('display', 'none');
    $('.feature-animation-mp4').css('display', 'flex');   
  }

  playPauseVideoOnScroll();
});

function playPauseVideoOnScroll() {
  const animationContainer = document.querySelectorAll(".feature-animation-mp4");
  const animations = document.querySelectorAll(".feature-animation-mp4 video");
  const animationHasEnded = Array(animations.size).fill(false); 
  
  const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
          const animation = e.target.children[0];

          if (e.isIntersecting) {
            let animation_index = parseInt(animation.className) - 1;

            if (!animationHasEnded[animation_index]) {
              animation.play();
            }
          } else {
            animation.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

  animationContainer.forEach((container) => {
    observer.observe(container);
  });

  animations.forEach((animation) => {
    animation.addEventListener('ended', (a) => {
      let animation_index = parseInt(a.target.className[0]) - 1;
      animationHasEnded[animation_index] = true;
    });
  });
}