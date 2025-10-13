// Neural Network Animation for Hero Section
document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.hero-media');
  if (!heroSection) return;

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0';
  
  heroSection.style.position = 'relative';
  heroSection.insertBefore(canvas, heroSection.firstChild);
  
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Neurons (nodes)
  const neurons = [];
  const numNeurons = 40;

  class Neuron {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;
      this.radius = 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(138, 22, 1, 0.6)'; // Kwangwoon Red
      ctx.fill();
    }
  }

  // Create neurons
  for (let i = 0; i < numNeurons; i++) {
    neurons.push(new Neuron());
  }

  function connectNeurons() {
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const dx = neurons[i].x - neurons[j].x;
        const dy = neurons[i].y - neurons[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(neurons[i].x, neurons[i].y);
          ctx.lineTo(neurons[j].x, neurons[j].y);
          ctx.strokeStyle = `rgba(138, 22, 1, ${0.3 * (1 - distance / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    connectNeurons();

    neurons.forEach(neuron => {
      neuron.update();
      neuron.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
});
