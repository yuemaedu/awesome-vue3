<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-07 09:59:57
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>{{ gender }}</h1>
	<label for="male">男</label>
	<input id="male" type="radio" v-model="gender" value="male" />
	<label for="female">女</label>
	<input id="female" type="radio" v-model="gender" value="female" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const gender = ref("male");
</script>
<style scoped></style>
