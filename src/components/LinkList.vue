<script setup lang="ts">
import { PeopleDescriptor } from '@/structs';
import FriendLink from './FriendLink.vue';

defineProps<{ title: string, links: PeopleDescriptor[] }>();
</script>
<template>
	<div>
		<span>{{ title }}</span>
		<br>
		<div class="friend-links">
			<FriendLink v-for="link in links" :people="link" :key="link.name" />
		</div>
	</div>
</template>
<style scoped>
.friend-links {
	max-width: 70vw;
	display: inline-block;
}
</style>