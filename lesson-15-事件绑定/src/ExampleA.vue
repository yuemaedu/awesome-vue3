<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-06 14:06:21
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<button v-on:click="say">click</button>
	<button @click="say">click</button>
	<h1>
		{{ num }}
	</h1>
	<button @click="num = num + 1">add</button>
	<button @click="num++">add</button>
	<h1>{{ isShow }}</h1>
	<button @click="isShow = !isShow">展示/隐藏</button>
	<div @click="hi">
		<h1 @click.stop="say">武汉跃码教育</h1>
	</div>
	<input @keyup.enter.ctrl="say" />
	<input @keyup.enter.ctrl.exact="say" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const num = ref(0);
const isShow = ref(false);
function say() {
	alert("武汉跃码教育");
}
function hi() {
	alert("跃码教育");
}
</script>
<style scoped></style>
