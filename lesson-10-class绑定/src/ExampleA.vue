<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-02 16:16:15
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1 class="red">武汉跃码教育</h1>
	<h1 :class="redClass">武汉跃码教育</h1>
	<h1 :class="{ red: true, 'text-big': true }">武汉跃码教育</h1>
	<h1 :class="{ red: active, 'text-big': textBig }">武汉跃码教育</h1>
	<h1 :class="classObj">武汉跃码教育</h1>
	<h1 :class="[redClass, textBigClass]">武汉跃码教育</h1>
	<h1 :class="classAraay">武汉跃码教育</h1>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const redClass = ref<string>("red");
const textBigClass = ref<string>("text-big");
const active = ref<boolean>(true);
const textBig = ref<boolean>(true);
const classObj = reactive<{ [index: string]: boolean }>({
	red: true,
	"text-big": true,
});
const classAraay = ref<string[]>(["red", "text-big"]);
</script>
<style scoped>
.red {
	color: red;
}
.text-big {
	font-size: 90px;
}
</style>
