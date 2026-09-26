<script setup lang="ts">
defineProps<{
    back: string;
    front: string;
    type: "big" | "small";
}>();

function toAvatar(name: string) {
    return `/avatars/${name}`;
}
</script>
<template>
    <div class="box" :class="{ [type]: true }">
        <img :src="toAvatar(back)" :class="{ [type]: true }" />
        <img :src="toAvatar(front)" class="front" :class="{ [type]: true }" />
    </div>
</template>
<style scoped>
* {
    --size: 100px;
}

.box {
    position: relative;
}

.box.big {
    width: var(--size);
    height: var(--size);
}

.box.small {
    width: 100%;
    height: 100%;
}

img.big {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    object-fit: contain;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    left: 0;
    top: 0;
}

img.small {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
}

.front:hover {
    opacity: 0;
    transform: scale(1.1);
}
</style>
