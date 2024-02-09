<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const apiData = ref({
    numberOfUsers: 0, // Default value for numberOfUsers
    totalMessagesSent: 0, // Default value for totalMessagesSent
    totalStorageUsed: 0, // Default value for totalStorageUsed
    totalMediaSent: 0 // Default value for totalMediaSent
});

const fetchData = async () => {
    try {
        const response = await axios.get('https://sfe-m3if.onrender.com/api/v1/chat_dashboard');
        const responseData = response.data.data;
        console.log(responseData);
        apiData.value = responseData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="card-container">
        <div class="card-box">
            <p class="text-box">No of Users</p>
            <p class="num-box">{{ apiData.numberOfUsers }}</p>
        </div>
        <div class="card-box">
            <p class="text-box">Total Message Sent</p>
            <p class="num-box">{{ apiData.totalMessagesSent }}</p>
        </div>
        <div class="card-box">
            <p class="text-box">Total Media Storage Used</p>
            <p class="num-box">{{ apiData.totalStorageUsed }}</p>
        </div>
        <div class="card-box">
            <p class="text-box">Total Media Sent</p>
            <p class="num-box">{{ apiData.totalMediaSent }}</p>
        </div>
    </div>
</template>


<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0 25px 0;
    gap: 10px;
}

.card-box {
    width: fit-content;
    font-family: Hanken Sans;
    text-align: left;
    width: fit-content;
    color: #566BA0;
    padding: 30px 80px 30px 30px;
    border-radius: 5px;
    border: 1px solid #E7E9FF;
    background-color: white;
    cursor: pointer;
}

.num-box {
    font-size: 28px;
    font-weight: 400;
}

.other-num-box {
    font-size: 12px;
}

.text-box {
    font-size: 12px;
    padding: 0 0 10px 0;
}</style>
