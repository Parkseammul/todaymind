const thoughtList = document.getElementById("thoughtList");
const emptyState = document.getElementById("emptyState");
const deleteAllButton = document.getElementById("deleteAllButton");

function renderThoughtList() {
    const thoughts = getThoughts()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (thoughts.length === 0) {
        emptyState.classList.remove("hidden");
        thoughtList.innerHTML = "";
        deleteAllButton.classList.add("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    deleteAllButton.classList.remove("hidden");

    thoughtList.innerHTML = thoughts.map((thought) => {
        return `
            <a class="thought-card" href="/thoughts/${thought.id}">
                <p class="thought-card-title">${thought.situation}</p>
                <p class="thought-card-meta">${thought.emotion} · ${formatDateTime(thought.createdAt)}</p>
                <p class="thought-card-preview">${thought.thought}</p>
            </a>
        `;
    }).join("");
}

deleteAllButton.addEventListener("click", function () {
    const confirmed = confirm("정리한 생각을 모두 삭제할까요?");

    if (!confirmed) {
        return;
    }

    deleteAllThoughts();
    renderThoughtList();
});

renderThoughtList();