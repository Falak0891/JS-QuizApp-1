const questionObj = {
  category: "Food & Drink",
  id: "622a1c3b7cc59eab6f9515a2",
  correctAnswer: "Three ",
  answers: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { question, answers, correctAnswer } = questionObj;
let score = 0;

const quesElement = document.getElementById("question");
quesElement.textContent = question;

const optionEl = document.getElementById("options");
optionEl.innerHTML = "";

const scoreEl = document.getElementById("score");
//scoreEl.innerHTML = "";

answers.forEach((ans) => {
  const opButton = document.createElement("button");
  opButton.textContent = ans;

  optionEl.appendChild(opButton);

  opButton.addEventListener("click", () => {
    console.log("option selected");
    if (ans === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    scoreEl.textContent = `Score: ${score}`;
    quesElement.textContent = "Quiz complete!";
    optionEl.innerHTML = "";
  });
});
