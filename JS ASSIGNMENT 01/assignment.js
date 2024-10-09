
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const fullNameSpan = document.getElementById('fullName');
const a = document.getElementById('1stnum');
const b = document.getElementById('2ndnum');
const c = document.getElementById('result');

const submitbtn = document.getElementById('submitBtn');
submitbtn.addEventListener('click', () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  fullNameSpan.textContent = `${firstName} ${lastName}`;
  alert("Form Submitted");
});
function addnum() {
  c.innerHTML = Number(a.value) + Number(b.value);
}
function subnum() {
  c.innerHTML = Number(a.value) - Number(b.value);
}
function mulnum() {
  c.innerHTML = Number(a.value) * Number(b.value);
}
function divnum() {
  c.innerHTML = Number(a.value) / Number(b.value);
}


