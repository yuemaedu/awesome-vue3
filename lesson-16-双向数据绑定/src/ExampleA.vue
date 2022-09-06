<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-06 16:59:32
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>
		{{ text }}
	</h1>
	<input
		:value="text"
		@input="(e) => (text = (e.target as HTMLInputElement).value)"
	/>
	<input :value="text" @input="input" />
	<input v-model="text" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref("");
function input(e: Event) {
	text.value = (e.target as HTMLInputElement).value;
}
</script>
<style scoped></style>
