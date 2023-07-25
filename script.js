const enrollmentForm = document.getElementById("enrollmentForm");
const studentCardsContainer = document.getElementById("studentCardsContainer");

enrollmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(input => input.value);

    const studentCard = document.createElement("div");
    studentCard.classList.add("grid-card");
    studentCard.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Skills:</strong> ${skills.join(", ")}</p>
  `;

    studentCardsContainer.appendChild(studentCard);

    enrollmentForm.reset();
});
