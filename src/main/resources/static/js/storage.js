const TODAY_MIND_STORAGE_KEY = "todayMind.thoughts";

function getThoughts() {
    const rawThoughts = localStorage.getItem(TODAY_MIND_STORAGE_KEY);

    if (!rawThoughts) {
        return [];
    }

    try {
        return JSON.parse(rawThoughts);
    } catch (error) {
        console.error("생각 정리 데이터를 읽는 중 오류가 발생했습니다.", error);
        return [];
    }
}

function saveThoughts(thoughts) {
    localStorage.setItem(TODAY_MIND_STORAGE_KEY, JSON.stringify(thoughts));
}

function createThought(thought) {
    const thoughts = getThoughts();
    thoughts.push(thought);
    saveThoughts(thoughts);
}

function findThoughtById(thoughtId) {
    return getThoughts().find((thought) => thought.id === thoughtId);
}

function updateThought(thoughtId, updatedThought) {
    const thoughts = getThoughts();
    const nextThoughts = thoughts.map((thought) => {
        if (thought.id !== thoughtId) {
            return thought;
        }

        return {
            ...thought,
            ...updatedThought,
            modifiedAt: new Date().toISOString()
        };
    });

    saveThoughts(nextThoughts);
}

function deleteThought(thoughtId) {
    const thoughts = getThoughts();
    const nextThoughts = thoughts.filter((thought) => thought.id !== thoughtId);
    saveThoughts(nextThoughts);
}

function deleteAllThoughts() {
    localStorage.removeItem(TODAY_MIND_STORAGE_KEY);
}

function getThoughtIdFromPath() {
    const paths = window.location.pathname.split("/");
    return paths[2];
}

function formatDateTime(value) {
    if (!value) {
        return "";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });
}