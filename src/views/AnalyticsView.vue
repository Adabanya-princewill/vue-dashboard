<script setup>
import AnalyticsCard from "@/components/AnalyticsCard.vue";
import ChartBar from "@/components/ChartBar.vue";

</script>

<template>
    <section>
        <main>
            <div>Last updated 1 minute ago</div>
            <div class="icon"><svg width="16" height="14" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_220)">
                        <path d="M15.334 13.3333V9.33325H11.334" stroke="#15AE73" stroke-width="1.4" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M0.666016 2.66675V6.66675H4.66602" stroke="#15AE73" stroke-width="1.4"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M13.6593 5.99989C13.322 5.04441 12.7466 4.19016 11.989 3.51683C11.2315 2.84351 10.3157 2.37306 9.32716 2.14939C8.33861 1.92572 7.30951 1.95612 6.33589 2.23774C5.36226 2.51936 4.47585 3.04303 3.75935 3.75989L0.666016 6.66655M15.3327 9.33322L12.2393 12.2399C11.5229 12.9567 10.6364 13.4804 9.66281 13.762C8.68918 14.0437 7.66009 14.0741 6.67154 13.8504C5.68299 13.6267 4.76722 13.1563 4.00966 12.4829C3.2521 11.8096 2.67746 10.9554 2.33935 9.99989"
                            stroke="#15AE73" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_220">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="refresh-btn">Refresh</div>
        </main>
        <AnalyticsCard />
        <ChartBar />
    </section>
</template>

<style scoped>
section {
    padding: 20px 60px;
}

main {
    display: flex;
    gap: 20px;
    padding: 5px 0;
    align-items: center;
    justify-content: flex-start;
}

.icon {
    cursor: pointer;
}

.refresh-btn {
    color: #15AE73;
    cursor: pointer;
}</style>
