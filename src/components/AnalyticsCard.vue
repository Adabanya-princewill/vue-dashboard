<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';


const apiData = ref({
    usersOnline: 0, // Default value for usersOnline
    usersActiveToday: 0, // Default value for usersActiveToday
    usersActiveThisMonth: 0, // Default value for usersActiveThisMonth
    peakConcurrency: 0, // Default value for peakConcurrency
});

const fetchData = async () => {
  try {
    const response = await axios.get('https://sfe-m3if.onrender.com/api/v1/dashboard');
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
  <div v-if="apiData" class="card-container">
    <div class="card-box">
      <p class="text-box">Users Online</p>
      <p class="num-box">{{ apiData.usersOnline }}</p>
    </div>   
    <div class="card-box">
      <p class="text-box">Users Active Today</p>
      <p class="num-box">{{ apiData.usersActiveToday }}</p>
    </div>
    <div class="card-box">
      <p class="text-box">Users Active This Month</p>
      <p class="num-box">{{ apiData.usersActiveThisMonth }}</p>
    </div>
    <div class="card-box">
      <p class="text-box">Peak Concurrency</p>
      <p class="num-box">{{ apiData.peakConcurrency }}</p>
    </div>
    <div class="card-box">
      <p class="text-box">Dashboard</p>
      <p class="num-box">56 GB<span class="other-num-box"> of 512GB</span></p>
    </div>
  </div>
</template>


<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 50px 0;
  gap: 10px;
}
.card-box {
    width: fit-content;
    font-family: Hanken Sans;
    text-align: left;
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
}
</style>
