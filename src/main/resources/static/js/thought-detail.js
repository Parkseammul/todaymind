const thoughtId = getThoughtIdFromPath();
const detailArea = document.getElementById("detailArea");
const editLink = document.getElementById("editLink");
const deleteButton = document.getElementById("deleteButton");

const thought = findThoughtById(thoughtId);

if (!thought) {
    detailArea.innerHTML = `
        <h2>생각 정리를 찾을 수 없어요.</h2>
        <p class="description">삭제되었거나 존재하지 않는 기록입니다.</p>
    `;
    editLink.classList.add("hidden");
    deleteButton.classList.add("hidden");
} else {
    editLink.href = `/thoughts/${thought.id}/edit`;

    detailArea.innerHTML = `
        <div class="detail-item">
            <h2>무슨 일이 있었나요?</h2>
            <p>${thought.situation}</p>
        </div>

        <div class="detail-item">
            <h2>어떤 감정이 들었나요?</h2>
            <p>${thought.emotion}</p>
        </div>

        <div class="detail-item">
            <h2>머릿속에 떠오른 생각</h2>
            <p>${thought.thought}</p>
        </div>

        <div class="detail-item">
            <h2>실제로 확인된 사실</h2>
            <p>${thought.fact}</p>
        </div>

        <div class="detail-item">
            <h2>지금 할 수 있는 작은 행동</h2>
            <p>${thought.action}</p>
        </div>

        <div class="detail-item">
            <h2>작성일</h2>
            <p>${formatDateTime(thought.createdAt)}</p>
        </div>
    `;
}

deleteButton.addEventListener("click", function () {
    const confirmed = confirm("이 생각 정리를 삭제할까요?");

    if (!confirmed) {
        return;
    }

    deleteThought(thoughtId);
    window.location.href = "/thoughts";
});