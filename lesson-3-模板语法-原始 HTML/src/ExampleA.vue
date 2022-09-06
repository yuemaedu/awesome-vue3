<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-01 13:41:25
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	{{ htmlStr }}
	<p v-html="htmlStr"></p>
	<p v-html="htmlStr1"></p>
</template>

<script setup lang="ts">
const htmlStr = `<h1 style="color:red">武汉跃码教育</h1>`;
const htmlStr1 = `<h1 style="color:red" onclick="alert('武汉跃码教育')">武汉跃码教育</h1>`;
</script>
<style scoped></style>
