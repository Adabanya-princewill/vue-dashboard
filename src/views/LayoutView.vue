<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <SideNavMenu />
            </el-aside>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template> 

<script setup>
import Header from "../components/Header.vue";
import SideNavMenu from "../components/SideNavMenu.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.el-main {
    padding: 0;
}

.el-container {
    background-color: #F3F7FF;
}

.el-header {
    padding: 0;
}
</style>
