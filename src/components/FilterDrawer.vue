<template>
    <el-drawer v-model="localDrawer" title="" :with-header="false">
        <div class="header">
            <span>Filter Table</span>
            <span @click="closeDrawer" class="close-drawer">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                        fill="#D53120" />
                </svg>
            </span>
        </div>
        <el-row class="tags">
            <el-button round :class="{ 'clicked': buttonClicked === 1 }" @click="buttonClicked = 1">Today</el-button>
            <el-button round :class="{ 'clicked': buttonClicked === 2 }" @click="buttonClicked = 2">Last 7 days</el-button>
            <el-button round :class="{ 'clicked': buttonClicked === 3 }" @click="buttonClicked = 3">This month</el-button>
            <el-button round :class="{ 'clicked': buttonClicked === 4 }" @click="buttonClicked = 4">Last 3 months</el-button>
        </el-row>
        <div class="date-container">
            <div class="date-box">
                <span class="title">Date From</span>
                <el-date-picker style="width: 200px;" class="input-el" v-model="dateFrom" type="date" placeholder="dd - mm - yyyy" size="large" />
            </div>
            <div class="date-box">
                <span class="title">Date To</span>
                <el-date-picker style="width: 200px;" class="input-el" v-model="dateTo" type="date" placeholder="dd - mm - yyyy" size="large" />
            </div>
        </div>
        <div class="date-box">
            <span class="title">Messages</span>
            <el-select v-model="messageValue" class="m-2" placeholder="Please Select" size="large">
                <el-option v-for="item in messages" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="date-box">
            <span class="title">Media Storage Used</span>
            <el-select v-model="mediaValue" class="m-2" placeholder="Please Select" size="large">
                <el-option v-for="item in mediaStorage" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="btn-group">
            <span class="filter-btn">Filter Table</span>
            <span class="clr-btn">Clear Filter</span>
        </div>
    </el-drawer>
</template>
  
<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
    drawer: Boolean
})

const localDrawer = ref(props.drawer)
const buttonClicked = ref(1)
const dateFrom = ref('')
const dateTo = ref('')
const messageValue = ref('')
const mediaValue = ref('')

const messages = [
    {
        value: '0 - 500 Messages',
        label: '0 - 500 Messages',
    },
    {
        value: '500 - 2000 messages',
        label: '500 - 2000 messages',
    },
    {
        value: '2000+ Messages',
        label: '2000+ Messages',
    }
]
const mediaStorage = [
    {
        value: '0 - 50 MB',
        label: '0 - 50 MB',
    },
    {
        value: '50 MB - 200MB',
        label: '50 MB - 200MB',
    },
    {
        value: '200MB - 1GB',
        label: '200MB - 1GB',
    },
    {
        value: '1GB+',
        label: '1GB+',
    }
]

const closeDrawer = () => {
    localDrawer.value = false
}

watch(() => props.drawer, (newValue) => {
    localDrawer.value = newValue
})
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    color: #000000;
    font-family: Hanken Sans;
    font-size: 24px;
    font-weight: 400;
}
.close-drawer {
    border-radius: 50%;
    width: 26px;
    height: 26px;
    padding: 3px;
    display: flex;
    background-color: #F5F7FC;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.tags {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    color: #F05A28;
    padding: 20px 0;
    font-size: 14px;
}

.date-box {
    display: flex;
    flex-direction: column;
    color: #51545C;
    font-family: Hanken Sans;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0;
}

.title {
    padding: 2px 0;
}

.date-container {
    display: flex;
    gap: 15px;
}

.clicked {
    background-color: #FFF1E9 !important;
    color: #F05A28 !important;
    border: 1px solid #F05A28 !important;
}

.el-button {
    border: 1px solid #EFF1F6;
    color: #131316;
}

.el-button:hover {
    border: 1px solid #F05A28;
    background-color: #FFF1E9 !important;
    color: #F05A28 !important;
}

.btn-group {
    position: absolute;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    left: 50%;
    right: 50%;
    width: max-content;
    transform: translateX(-50%);
    color: #51545C;
    font-family: Hanken Sans;
    font-size: 16px;
    font-weight: 500;
}
.filter-btn {
    background-color: #4568D1;
    color: white;
    border-radius: 30px;
    padding: 9px 35px;
    width: 378px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
}
.clr-btn {
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
    color: #8D9091;
}
</style>
