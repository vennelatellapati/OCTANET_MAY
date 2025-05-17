function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('show');
}

document.getElementById('upload').addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    const img = document.getElementById('preview');
    img.src = reader.result;
    img.style.display = 'block';
  };
  reader.readAsDataURL(e.target.files[0]);
});