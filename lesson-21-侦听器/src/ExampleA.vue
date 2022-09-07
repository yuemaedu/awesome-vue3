<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-07 11:12:32
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>{{ company }}</h1>
	<button @click="change">change</button>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";

const company = ref("武汉跃码教育");
const companyInfo = reactive({
	name: "武汉跃码教育",
	teacher: {
		nickname: "最爱白菜吖",
	},
});
function change() {
	company.value = "跃码教育";
	// companyInfo.name = "跃码教育";
	companyInfo.teacher = { nickname: "最爱白菜" };
}
watch(company, (n, o) => {
	console.log(n, o);
});
// watch(companyInfo, () => {
// 	console.log(companyInfo);
// });
// watch(
// 	() => companyInfo.name,
// 	() => {
// 		console.log(companyInfo);
// 	}
// );
// watch(
// 	() => companyInfo.name + company.value,
// 	() => {
// 		console.log(companyInfo);
// 	}
// );
watch(
	() => companyInfo.teacher,
	() => {
		console.log(companyInfo);
	},
	{ deep: true }
);
</script>
<style scoped></style>
