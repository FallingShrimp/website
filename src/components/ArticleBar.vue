<script setup lang="ts">
import { MarkdownRender } from "v3-markdown-stream";
import 'v3-markdown-stream/dist/v3-markdown-stream.css';

defineProps<{ title: string, content: string, showing: boolean }>();
const emit = defineEmits(["open", "close"]);
</script>
<template>
    <div class="article-bar" :class="{ showing }" @click="showing ? emit('close') : emit('open')">
        <span class="text title ellipsis">{{ title }}</span>
        <span class="details ellipsis" v-if="!showing">{{ content }}</span>
        <MarkdownRender class="content text" :class="{ showing }" :markInfo="content" />
    </div>
</template>
<style scoped>
.text,
.text * {
    color: black;
    text-align: left;
}

.ellipsis {
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.title {
    font-size: 18px;
    width: 100%;
    font-weight: bold;
}

.details {
    color: gray;
    font-size: 14px;
    width: 100%;
}

.article-bar {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px 20px;
    background-color: transparent;
}

.article-bar:hover,
.article-bar.showing {
    background-color: rgba(0, 0, 0, 0.1);
}

.article-bar:first-child {
    padding-top: 20px;
}

.article-bar:last-child {
    padding-bottom: 20px;
}

.content {
    interpolate-size: allow-keywords;
    height: 0;
    padding: 0;
    overflow: hidden;
    margin-top: 10px;
    margin-left: 20px;
    border: solid gray 3px;
    border-top: 0;
    border-bottom: 0;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.2);
}

.content.showing {
    height: auto;
    padding: 10px 30px;
}
</style>