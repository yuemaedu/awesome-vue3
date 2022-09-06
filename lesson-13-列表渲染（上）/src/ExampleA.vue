<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-06 10:12:23
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	{{ dataList }}
	<ul>
		<li v-for="letter in dataList" :key="letter">
			{{ letter }}
		</li>
	</ul>
	<ul>
		<template v-for="letter in dataList" :key="letter">
			{{ letter }}
		</template>
	</ul>
	<ul>
		<li v-for="{ name, id } in lessonList" :key="id">
			<span v-if="id % 2 === 0" class="red"> {{ id }}-{{ name }} </span>
			<span v-else> {{ id }}-{{ name }} </span>
		</li>
	</ul>
	<ul>
		<li v-for="(lesson, index) in lessonList" :key="lesson.id">
			{{ lesson.id }}--{{ index }}-{{ lesson.name }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const dataList = ref("武汉跃码教育".split(""));
const lessonList = reactive([
	{
		id: 1,
		name: "vue3课程",
	},
	{
		id: 2,
		name: "react18课程",
	},
	{
		id: 3,
		name: "electron课程",
	},
	{
		id: 4,
		name: "nodejs课程",
	},
]);
</script>
<style scoped>
.red {
	color: red;
}
</style>
