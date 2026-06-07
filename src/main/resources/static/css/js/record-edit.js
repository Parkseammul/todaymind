document.addEventListener("DOMContentLoaded", () => {
    const recordId = getRecordIdFromPath();
    const record = TodayMindStorage.getRecordById(recordId);

    const notFound = document.getElementById("notFound");
    const editForm = document.getElementById("editForm");

    if (!record) {
        notFound.classList.remove("hidden");
        return;
    }

    editForm.classList.remove("hidden");
    fillForm(record);

    editForm.addEventListener("submit", (event) => {
        event.preventDefault();

        clearErrors();

        const situation = document.getElementById("situation").value.trim();
        const emotion = getSelectedEmotion();
        const thought = document.getElementById("thought").value.trim();
        const fact = document.getElementById("fact").value.trim();
        const action = document.getElementById("action").value.trim();
        const recordDate = document.getElementById("recordDate").value;

        if (!validateForm(situation, emotion, thought)) {
            return;
        }

        TodayMindStorage.updateRecord(recordId, {
            situation,
            emotion,
            thought,
            fact,
            action,
            recordDate
        });

        window.location.href = `/records/${recordId}`;
    });
});

function getRecordIdFromPath() {
    const paths = window.location.pathname.split("/");
    return paths[2];
}

function fillForm(record) {
    document.getElementById("recordDate").value = record.recordDate;
    document.getElementById("situation").value = record.situation;
    document.getElementById("thought").value = record.thought;
    document.getElementById("fact").value = record.fact || "";
    document.getElementById("action").value = record.action || "";

    const emotionInput = document.querySelector(`input[name='emotion'][value='${record.emotion}']`);

    if (emotionInput) {
        emotionInput.checked = true;
    }
}

function getSelectedEmotion() {
    const checkedEmotion = document.querySelector("input[name='emotion']:checked");
    return checkedEmotion ? checkedEmotion.value : "";
}

function validateForm(situation, emotion, thought) {
    let isValid = true;

    if (!situation) {
        document.getElementById("situationError").textContent = "무슨 일이 있었는지 적어주세요.";
        isValid = false;
    }

    if (!emotion) {
        document.getElementById("emotionError").textContent = "지금 느낀 감정을 하나 선택해주세요.";
        isValid = false;
    }

    if (!thought) {
        document.getElementById("thoughtError").textContent = "머릿속에 떠오른 생각을 적어주세요.";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.getElementById("situationError").textContent = "";
    document.getElementById("emotionError").textContent = "";
    document.getElementById("thoughtError").textContent = "";
}