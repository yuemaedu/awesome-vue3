<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-06 17:52:47
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>{{ text1 }}</h1>
	<input v-model="text1" />
	<h1>{{ text2 }}</h1>
	<textarea v-model="text2"></textarea>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text1 = ref("武汉跃码教育");
const text2 = ref("武汉跃码教育");
</script>
<style scoped></style>
