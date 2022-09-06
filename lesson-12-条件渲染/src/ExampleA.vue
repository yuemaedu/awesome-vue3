<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-05 18:18:33
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1 v-if="isShow">武汉跃码教育</h1>
	<h1 v-show="isShow">武汉跃码教育</h1>
	<button @click="isShow = !isShow">显示/隐藏</button>
	<br />
	<h1>
		<template v-if="fullName"> 武汉跃码教育 </template>
		<template v-else> 跃码教育 </template>
	</h1>
	<button @click="fullName = !fullName">
		<template v-if="!fullName"> 全称 </template>
		<template v-else> 简称 </template>
	</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const fullName = ref(true);
const isShow = ref(true);
</script>
<style scoped></style>
