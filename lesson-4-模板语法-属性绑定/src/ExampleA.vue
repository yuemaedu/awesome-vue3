<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-01 14:06:00
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<button v-bind:id="aId">乐编码</button>
	<button :id="aId2" onclick="alert('乐编码')" :disabled="disabled">
		乐编码
	</button>
	<button :id="aId2" onclick="alert('乐编码')" disabled>乐编码</button>
	<button v-bind="obj" :id="aId2" onclick="alert('乐编码')" disabled>
		乐编码
	</button>
</template>

<script setup lang="ts">
const aId = "a-id";
const aId2 = "a-id2";
const disabled = false;
const obj = {
	id: "s-id3",
	class: "red",
};
</script>
<style scoped>
.red {
	color: red;
}
</style>
