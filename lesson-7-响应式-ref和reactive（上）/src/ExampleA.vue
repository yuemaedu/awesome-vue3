<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-02 13:00:48
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1 ref="h1Ref">
		{{ count }}
	</h1>
	<h1 ref="h2Ref">
		{{ mapCount.count }}
	</h1>
	<button @click="addOne">add 1</button>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from "vue";
const h1Ref = ref<HTMLHeadingElement | null>(null);
const h2Ref = ref<HTMLHeadingElement | null>(null);
const count = ref<number>(0);
const mapCount = reactive<{ count: number }>({ count: 0 });
function addOne() {
	count.value++;
	mapCount.count++;
	console.log(count.value, mapCount.count);
	console.log(h1Ref.value?.innerText, h1Ref.value);
	console.log(h2Ref.value?.innerText, h2Ref.value);
	nextTick(() => {
		console.log(h1Ref.value?.innerText);
		console.log(h2Ref.value?.innerText);
	});
}
</script>
<style scoped></style>
