// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const typewriter = document.getElementById('typewriter');
const roles = ['Full Stack Developer', 'React Enthusiast', 'Creative Coder'];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = '';
let cursorSpan;

// Create a blinking cursor
function createCursor() {
  cursorSpan = document.createElement('span');
  cursorSpan.classList.add('cursor');
  cursorSpan.textContent = '|';
  typewriter.parentNode.appendChild(cursorSpan);
}
createCursor();

// Typewriter loop
function type() {
  const fullText = roles[index];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typewriter.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => isDeleting = true, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 120;
  setTimeout(type, isDeleting ? speed : speed);
}

type();
