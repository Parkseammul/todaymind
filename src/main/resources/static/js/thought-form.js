const thoughtForm = document.getElementById("thoughtForm");
const formError = document.getElementById("formError");

thoughtForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const situation = document.getElementById("situation").value.trim();
    const emotion = document.getElementById("emotion").value.trim();
    const thought = document.getElementById("thought").value.trim();
    const fact = document.getElementById("fact").value.trim();
    const action = document.getElementById("action").value.trim();

    if (!situation || !emotion || !thought || !fact || !action) {
        formError.textContent = "모든 질문에 답해주세요.";
        return;
    }

    const now = new Date();

    const newThought = {
        id: "thought_" + now.getTime(),
        situation: situation,
        emotion: emotion,
        thought: thought,
        fact: fact,
        action: action,
        recordDate: now.toISOString().slice(0, 10),
        createdAt: now.toISOString(),
        modifiedAt: now.toISOString()
    };

    createThought(newThought);

    window.location.href = "/thoughts/complete";
});