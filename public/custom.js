window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Smoke particle array
    var particles = [];

    // Create smoke particles
    function createParticle() {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height,
            radius: Math.random() * 10 + 5,
            opacity: 1,
            speedY: Math.random() * -2 - 1,
            speedX: (Math.random() - 0.5) * 2,
        });
    }

    // Update and draw smoke particles
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.opacity -= 0.01;

            if (particle.opacity <= 0) {
                particles.splice(index, 1);
            }
        });

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`; 
            ctx.fill();
        });
    }

    // Animation loop
    function animate() {
        updateParticles();
        requestAnimationFrame(animate);
    }

    setInterval(createParticle, 100);

    animate();

    window.onscroll = function() {
        myFunction(canvas);
    };

    function myFunction(canvas) {
        var scrollBottom = window.scrollY || document.documentElement.scrollTop;

        if (scrollBottom > 1500) {
            canvas.style.display = "none";
        } else {
            canvas.style.display = "block";
        }
    }
};
