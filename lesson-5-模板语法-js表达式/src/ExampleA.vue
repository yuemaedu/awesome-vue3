<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-02 10:53:09
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>
		{{ num + 1 }}
		{{ num - 1 }}
	</h1>
	<h1>
		{{ ok ? "ok" : "不ok" }}
	</h1>
	<h1>
		{{ str.split("").join(",") }}
	</h1>
</template>

<script setup lang="ts">
const num: number = 1;
const ok: boolean = true;
const str: string = "武汉跃码教育";
</script>
<style scoped></style>
