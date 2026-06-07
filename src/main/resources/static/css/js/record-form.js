document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("recordForm");
    const recordDate = document.getElementById("recordDate");

    recordDate.value = getTodayDate();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        clearErrors();

        const situation = document.getElementById("situation").value.trim();
        const emotion = getSelectedEmotion();
        const thought = document.getElementById("thought").value.trim();
        const fact = document.getElementById("fact").value.trim();
        const action = document.getElementById("action").value.trim();
        const date = recordDate.value || getTodayDate();

        if (!validateForm(situation, emotion, thought)) {
            return;
        }

        const now = new Date().toISOString();

        const record = {
            id: `record_${Date.now()}`,
            situation,
            emotion,
            thought,
            fact,
            action,
            recordDate: date,
            createdAt: now,
            modifiedAt: now
        };

        TodayMindStorage.addRecord(record);

        window.location.href = "/records/complete";
    });
});

function getTodayDate() {
    return new Date().toISOString().slice(0, 10);
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