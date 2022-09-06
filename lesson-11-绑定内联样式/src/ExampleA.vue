<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-05 17:47:21
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1 :style="{ color: red, fontSize: size + 'px' }">武汉跃码教育</h1>
	<h1 :style="{ color: red, 'font-size': size + 'px' }">武汉跃码教育</h1>
	<h1 :style="styleObj">武汉跃码教育</h1>
	<h1 :style="[styleObj, styleObj1]">武汉跃码教育</h1>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const red = ref("red");
const size = ref(90);
const styleObj = reactive({
	color: "red",
	fontSize: "90px",
});
const styleObj1 = reactive({
	"background-color": "blue",
});
</script>
<style scoped></style>
