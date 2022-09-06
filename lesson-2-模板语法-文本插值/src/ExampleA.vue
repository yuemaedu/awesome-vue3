<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:12:50
 * @LastEditTime: 2022-09-01 13:16:24
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>
		{{ msg }}
	</h1>
	<h1>
		{{ num }}
	</h1>
	<h1>
		{{ bool }}
	</h1>
	<h1>
		{{ dog }}
		<br />
		{{ dog.name }}
		{{ dog.age }}
	</h1>
	<h1>
		{{ dogList }}
	</h1>
</template>

<script setup lang="ts">
interface Dog {
	name: string;
	age: number;
}
const msg: string = "武汉跃码教育";
const num: number = 123456;
const bool: boolean = true;
const dog: Dog = {
	name: "暖暖",
	age: 0.6,
};
const dogList: Dog[] = [dog];
</script>
<style scoped></style>
