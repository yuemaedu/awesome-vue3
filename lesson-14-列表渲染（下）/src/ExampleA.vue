<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-06 10:28:39
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<ul>
		<li v-for="(item, key, index) in obj" :key="index">
			<span v-if="key === 'fullName'" class="red">
				{{ item }}--{{ key }}--{{ index }}
			</span>
			<span v-else> {{ item }}--{{ key }}--{{ index }} </span>
		</li>
	</ul>
	<ul v-if="false">
		<li v-for="(item, key, index) in obj" :key="index">
			<span v-if="key === 'fullName'" class="red">
				{{ item }}--{{ key }}--{{ index }}
			</span>
			<span v-else> {{ item }}--{{ key }}--{{ index }} </span>
		</li>
	</ul>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const obj = reactive({
	fullName: "武汉跃码教育",
	name: "跃码教育",
});
</script>
<style scoped>
.red {
	color: red;
}
</style>
