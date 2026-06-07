document.addEventListener("DOMContentLoaded", () => {
    renderRecordList();

    const deleteAllButton = document.getElementById("deleteAllButton");

    deleteAllButton.addEventListener("click", () => {
        const confirmed = confirm("모든 기록을 삭제할까요?\n삭제한 기록은 되돌릴 수 없어요.");

        if (!confirmed) {
            return;
        }

        TodayMindStorage.deleteAllRecords();
        renderRecordList();
    });
});

function renderRecordList() {
    const recordList = document.getElementById("recordList");
    const emptyState = document.getElementById("emptyState");
    const deleteAllButton = document.getElementById("deleteAllButton");

    const records = TodayMindStorage.getRecords()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    recordList.innerHTML = "";

    if (records.length === 0) {
        emptyState.classList.remove("hidden");
        deleteAllButton.classList.add("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    deleteAllButton.classList.remove("hidden");

    records.forEach((record) => {
        const card = document.createElement("a");
        card.className = "record-card";
        card.href = `/records/${record.id}`;

        card.innerHTML = `
            <div class="record-card-header">
                <span class="emotion-badge">${escapeHtml(record.emotion)}</span>
                <p class="record-date">${formatDate(record.recordDate)}</p>
            </div>
            <h2 class="record-title">${escapeHtml(shortenText(record.situation, 40))}</h2>
            <p class="record-preview">${escapeHtml(shortenText(record.thought, 60))}</p>
        `;

        recordList.appendChild(card);
    });
}

function shortenText(text, maxLength) {
    if (!text) {
        return "";
    }

    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function formatDate(dateText) {
    if (!dateText) {
        return "";
    }

    return dateText.replaceAll("-", ".");
}

function escapeHtml(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}