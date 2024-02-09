<template>
  <el-table :data="tableData" :default-sort="{ prop: 'date_created', order: 'descending' }"
    style="width: 100%; cursor: pointer;" @row-click="toggleDrawer" :header-cell-style="headerCellStyle"
    :cell-style="cellStyle">
    <el-table-column class="table-column" prop="formatted_full_name" label="USERS" width="180" />
    <el-table-column class="table-column" prop="message_sent" label="MESSAGES SENT" sortable />
    <el-table-column class="table-column" prop="media_storage_used" label="MEDIA STORAGE USED" sortable />
    <el-table-column class="table-column" prop="date_created" label="DATE CREATED" sortable />
    <el-table-column class="table-column" prop="media_sent" label="MEDIA SENT" sortable />
  </el-table>
  <Pagination />
  <FilterDrawer :drawer="drawer" :toggleDrawer="toggleDrawer" />
</template>

<script setup>
import axios from 'axios';
import Pagination from './Pagination.vue'
import FilterDrawer from './FilterDrawer.vue'
import { ref, onMounted } from 'vue';

const tableData = ref([]);

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

const capitalizeFullName = (string) => {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

const fetchData = async () => {
  try {
    const response = await axios.get(`https://sfe-m3if.onrender.com/api/v1/messages?page=1&limit=5`);
    const responseData = response.data.data;
    console.log(responseData);
    tableData.value = responseData.map(item => ({
      formatted_full_name: capitalizeFullName(item.full_name),
      message_sent: item.message_sent,
      media_storage_used: item.media_storage_used,
      date_created: formatDate(item.date_created),
      media_sent: item.media_sent
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const cellStyle = ({ row, column, rowIndex, columnIndex }) => {
  return {
    padding: '10px 0 10px 30px',
    color: '#071439',
    fontSize: '16px'
  };
};
const headerCellStyle = ({ row, column, rowIndex, columnIndex }) => {
  return {
    padding: '10px 0 10px 30px',
    fontSize: '14px'
  };
};
</script>
