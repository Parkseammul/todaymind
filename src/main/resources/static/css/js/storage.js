const TodayMindStorage = (() => {
    const STORAGE_KEY = "todayMind.records";

    function getRecords() {
        const rawRecords = localStorage.getItem(STORAGE_KEY);

        if (!rawRecords) {
            return [];
        }

        try {
            return JSON.parse(rawRecords);
        } catch (error) {
            console.error("기록을 불러오지 못했습니다.", error);
            return [];
        }
    }

    function saveRecords(records) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }

    function getRecordById(recordId) {
        return getRecords().find((record) => record.id === recordId);
    }

    function addRecord(record) {
        const records = getRecords();
        records.push(record);
        saveRecords(records);
    }

    function updateRecord(recordId, updatedRecord) {
        const records = getRecords();
        const nextRecords = records.map((record) => {
            if (record.id !== recordId) {
                return record;
            }

            return {
                ...record,
                ...updatedRecord,
                modifiedAt: new Date().toISOString()
            };
        });

        saveRecords(nextRecords);
    }

    function deleteRecord(recordId) {
        const records = getRecords();
        const nextRecords = records.filter((record) => record.id !== recordId);
        saveRecords(nextRecords);
    }

    function deleteAllRecords() {
        localStorage.removeItem(STORAGE_KEY);
    }

    return {
        getRecords,
        getRecordById,
        addRecord,
        updateRecord,
        deleteRecord,
        deleteAllRecords
    };
})();