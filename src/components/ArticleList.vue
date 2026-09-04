<script setup lang="ts">
import { ref } from 'vue';
import ArticleBar from './ArticleBar.vue';

const props = defineProps<{ data: Record<string, string> }>();
const currentOpening = ref<string | null>("");
</script>
<template>
    <div class="articles">
        <ArticleBar v-for="[title, content] in Object.entries(data)" :title="title" :content="content"
            :showing="currentOpening == title" @open="currentOpening = title" @close="currentOpening = null" />
    </div>
</template>
<style scoped>
.articles {
    max-height: 80vh;
    width: 60vw;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 20px;
    overflow-y: auto;
}

.articles::-webkit-scrollbar {
    display: none;
}
</style>