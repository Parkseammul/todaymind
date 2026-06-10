const editThoughtId = getThoughtIdFromPath();
const editForm = document.getElementById("editForm");
const editFormError = document.getElementById("formError");
const backLink = document.getElementById("backLink");

const targetThought = findThoughtById(editThoughtId);

if (!targetThought) {
    editForm.innerHTML = `
        <section class="card">
            <h2>생각 정리를 찾을 수 없어요.</h2>
            <p class="description">삭제되었거나 존재하지 않는 기록입니다.</p>
            <a class="primary-button" href="/thoughts">목록으로 돌아가기</a>
        </section>
    `;
} else {
    backLink.href = `/thoughts/${targetThought.id}`;

    document.getElementById("situation").value = targetThought.situation;
    document.getElementById("emotion").value = targetThought.emotion;
    document.getElementById("thought").value = targetThought.thought;
    document.getElementById("fact").value = targetThought.fact;
    document.getElementById("action").value = targetThought.action;
}

editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const situation = document.getElementById("situation").value.trim();
    const emotion = document.getElementById("emotion").value.trim();
    const thought = document.getElementById("thought").value.trim();
    const fact = document.getElementById("fact").value.trim();
    const action = document.getElementById("action").value.trim();

    if (!situation || !emotion || !thought || !fact || !action) {
        editFormError.textContent = "모든 질문에 답해주세요.";
        return;
    }

    updateThought(editThoughtId, {
        situation: situation,
        emotion: emotion,
        thought: thought,
        fact: fact,
        action: action
    });

    window.location.href = `/thoughts/${editThoughtId}`;
});