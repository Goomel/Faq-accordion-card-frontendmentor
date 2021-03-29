const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    questions.forEach((item) => {
      if (item.dataset.id == id) {
        item.classList.toggle("active");
      } else {
        //remove class from all other questions
        item.classList.remove("active");
      }
    });
  });
});
