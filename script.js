 // Optional: Add basic form validation if needed, like client-side checking on fields
 const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Client-side validation
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
         if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim())
         {
             alert('Please fill in all fields')
             return;
         }
        // Here you could add the submit logic, maybe a message confirming sending
         alert('Message sent');

        contactForm.reset(); // clean the form

    });

 // Fireworks Effect
    const fireworkContainer = document.createElement('div');
    fireworkContainer.classList.add('firework-container');
    document.body.appendChild(fireworkContainer);

  function createFirework(x, y, type) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';

        const animationDuration = 1000 + Math.random() * 500; // Randomize animation duration

        if (type === 'rise') {
             firework.style.animation = `firework-rise ${animationDuration}ms`;
         }else{
           firework.style.animation = `firework-explode ${animationDuration}ms`;
         }
        fireworkContainer.appendChild(firework);

        // Remove after animation completion
          setTimeout(() => {
            fireworkContainer.removeChild(firework);
         }, animationDuration *2); // ensure removed after full animation ends


        return firework;
   }
   // Function to trigger a single firework
    function triggerFirework() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight / 2; // Keep fireworks in the upper half of the screen
       // Create a rise firework in the click location
        createFirework(x, y, 'rise');

      // Create some explode firework around the click location
      for(let i = 0 ; i < 4; i++){
          const angle = Math.random()* 360;
          const distance = 30 +  Math.random() * 50;

            const ex = x + Math.cos(angle*Math.PI/180) * distance;
            const ey = y + Math.sin(angle*Math.PI/180) * distance;
            createFirework(ex, ey,'explode');
        }
    }

    // Automatically trigger fireworks at random intervals
    setInterval(triggerFirework, 1000 + Math.random() * 2000); // Fire between 1 and 3 seconds
//Initial fireworks on start
  for (let i = 0; i < 3; i++) {
       setTimeout(function() {
         const x = Math.random() * window.innerWidth;
         const y = Math.random() * window.innerHeight /2;
          createFirework(x, y, 'rise');

          for(let j = 0 ; j < 2; j++){
               const angle = Math.random()* 360;
              const distance = 30 +  Math.random() * 50;

               const ex = x + Math.cos(angle*Math.PI/180) * distance;
               const ey = y + Math.sin(angle*Math.PI/180) * distance;
               createFirework(ex, ey,'explode');
            }
       }, i * 700); // Fire a few on startup

 }