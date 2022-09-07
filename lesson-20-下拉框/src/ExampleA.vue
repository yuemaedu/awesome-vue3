<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-07 10:19:45
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>
		{{ selected }}
	</h1>
	<select v-model="selected">
		<option v-for="lesson in lessons" :value="lesson" :key="lesson">
			{{ lesson }}
		</option>
	</select>
	<h1>
		{{ selectedMulti }}
	</h1>
	<select v-model="selectedMulti" multiple>
		<option v-for="lesson in lessons" :value="lesson" :key="lesson">
			{{ lesson }}
		</option>
	</select>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref("");
const selectedMulti = ref("");
const lessons = ref(["vue", "react", "nodejs"]);
</script>
<style scoped></style>
