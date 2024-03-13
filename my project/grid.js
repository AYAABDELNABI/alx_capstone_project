const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  const body = `name=${name}&email=${email}&message=${message}`;

  const url = `mailto:aya.abdelnabi.sw@gmail.com?subject=New%20Message&body=${body}`;

  window.open(url, '_blank');
});