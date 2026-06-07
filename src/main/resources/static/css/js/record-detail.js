document.addEventListener("DOMContentLoaded", () => {
    const recordId = getRecordIdFromPath();
    const record = TodayMindStorage.getRecordById(recordId);

    const notFound = document.getElementById("notFound");
    const detailCard = document.getElementById("detailCard");

    if (!record) {
        notFound.classList.remove("hidden");
        return;
    }

    detailCard.classList.remove("hidden");

    document.getElementById("recordDate").textContent = formatDate(record.recordDate);
    document.getElementById("emotion").textContent = record.emotion;
    document.getElementById("situation").textContent = record.situation;
    document.getElementById("thought").textContent = record.thought;
    document.getElementById("fact").textContent = record.fact || "아직 적지 않았어요.";
    document.getElementById("action").textContent = record.action || "아직 정하지 않았어요.";
    document.getElementById("createdAt").textContent = `작성일: ${formatDateTime(record.createdAt)}`;
    document.getElementById("modifiedAt").textContent = `수정일: ${formatDateTime(record.modifiedAt)}`;

    document.getElementById("editLink").href = `/records/${record.id}/edit`;

    document.getElementById("deleteButton").addEventListener("click", () => {
        const confirmed = confirm("이 기록을 삭제할까요?\n삭제한 기록은 되돌릴 수 없어요.");

        if (!confirmed) {
            return;
        }

        TodayMindStorage.deleteRecord(record.id);
        window.location.href = "/records";
    });
});

function getRecordIdFromPath() {
    const paths = window.location.pathname.split("/");
    return paths[2];
}

function formatDate(dateText) {
    if (!dateText) {
        return "";
    }

    return dateText.replaceAll("-", ".");
}

function formatDateTime(dateTimeText) {
    if (!dateTimeText) {
        return "";
    }

    const date = new Date(dateTimeText);

    if (Number.isNaN(date.getTime())) {
        return dateTimeText;
    }

    return date.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}