<script setup lang="ts">
import BigTitle from "./BigTitle.vue";
defineProps<{ title: string }>();
const opening = defineModel<boolean>({ default: false });
function switchState() {
    opening.value = !opening.value;
}
</script>
<template>
    <div class="desk">
        <div class="bar" :class="{ opening }" @click="switchState">
            <BigTitle class="title">{{ title }}{{ opening ? "▴" : "▾" }}</BigTitle>
        </div>
        <div class="container" :class="{ opening }">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.desk {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    interpolate-size: allow-keywords;
    height: 0;
    overflow: hidden;
}

.container.opening {
    height: auto;
}

.bar {
    background-color: rgba(255, 255, 255, 0.2);
    margin: 15px;
    margin-bottom: 0;
    padding: 5px 80px;
    border-radius: 10px;
}

.bar.opening {
    margin-bottom: 15px;
}

.bar:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

.bar:active {
    background-color: rgba(255, 255, 255, 0.6);
}

.title {
    margin: 0;
}
</style>
