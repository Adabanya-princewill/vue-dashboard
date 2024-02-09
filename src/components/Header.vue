<template>
    <main>
        <div class="name">
            Hello Ayomide! 👋🏼
        </div>
        <div class="btn-container">
            <div class="download-btn">
                Download Report
            </div>
            <div class="avatar-container">
                <div class="avatar-text">
                    A O
                </div>
                <div class="icon">
                    <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L3.5 3L1 1" stroke="#0068FF" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 20px 20px;
    border-bottom: 1px solid #00000026;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
}

.download-btn {
    background-color: #4568D1;
    border-radius: 30px;
    padding: 4px 35px;
    color: white;
}

.avatar-container {
    display: flex;
    justify-content: space-around;
    gap: 8px;
}

.avatar-text {
    opacity: 0.4px;
    font-family: Graphik;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    background-color: #0000000D;
    color: #0000004D;
    border-radius: 100%;
    padding: 4px;
}
</style>
