const gradients = [
'linear-gradient(45deg, #C6FFDD, #FBD786, #f7797d)',
'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)',
'linear-gradient(45deg, #b92b27, #1565C0)',
'linear-gradient(45deg, #c31432, #240b36)',
'linear-gradient(45deg, #dd3e54, #6be585)',
'linear-gradient(45deg, #009FFF, #ec2F4B)',
'linear-gradient(45deg, #8A2387, #E94057, #F27121)',
'linear-gradient(45deg, #59C173, #a17fe0, #5D26C1)',
'linear-gradient(45deg, #23074d, #cc5333)',
'linear-gradient(45deg, #00F260, #0575E6)',
'linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d)',
'linear-gradient(45deg, #159957, #155799)',
'linear-gradient(45deg, #3494E6, #EC6EAD)',
'linear-gradient(45deg, #5C258D, #4389A2)',
'linear-gradient(45deg, #8360c3, #2ebf91)',
];

function getRandomGradient() {
  const index = Math.floor(Math.random() * gradients.length);
  return gradients[index];
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  body.style.backgroundImage = getRandomGradient();
});