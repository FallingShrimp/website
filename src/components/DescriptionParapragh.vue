<template>
	<div class="para">
		<span class="title">{{ title }}</span><br />
		<slot></slot>
	</div>
	<br>
</template>
<script setup lang="ts">
defineProps({ title: String });
</script>
<style scoped>
.para {
	margin: 10px;
	width: fit-content;
	display: inline-block;
}

.title {
	--s: 12px;
	--p: polygon(0 50%,
			var(--s) 0,
			calc(100% - var(--s)) 0,
			100% 50%,
			calc(100% - var(--s)) 100%,
			var(--s) 100%);
	position: relative;
	font-weight: bold;
	font-size: 14px;
	margin: 5px;
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.35);
	width: 100px;
	padding: 3px 0;
	clip-path: var(--p);
}

.para:hover .title:before {
	clip-path: var(--p);
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.25);
	z-index: -1;
	animation: shock 1s ease-out infinite;
}

@keyframes shock {
	0% {
		transform: scale(0, 0);
		opacity: 0;
	}

	50% {
		transform: scale(1, 1);
		opacity: 1;
	}

	100% {
		transform: scale(2, 2);
		opacity: 0;
	}
}
</style>