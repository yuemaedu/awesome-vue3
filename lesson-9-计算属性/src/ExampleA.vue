<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-02 15:19:36
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	<h1>
		{{ dog.name + dog.age }}
	</h1>
	<h1>
		{{ dogIfo }}
	</h1>
	<h1>
		{{ dogIfo }}
	</h1>
	<h1>
		{{ getDogInfo() }}
	</h1>
	<h1>
		{{ getDogInfo() }}
	</h1>
	<h1>
		{{ getDogInfo() }}
	</h1>
	<h1>
		{{ dogFullInfo.name + dogFullInfo.age }}
	</h1>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Dog {
	name: string;
	age: number;
}
const dog: Dog = {
	name: "暖暖",
	age: 0.6,
};
// const dogIfo = computed(() => dog.name + dog.age);
const dogIfo = computed<string>(() => {
	console.log(1);
	return dog.name + dog.age;
});
// getter setter
const dogFullInfo = computed<Dog>({
	get() {
		return dog;
	},
	set(val: Dog) {
		dog.name = val.name;
		dog.age = val.age;
	},
});
dogFullInfo.value = {
	name: "暖暖",
	age: 0.6 + 1,
};
function getDogInfo() {
	console.log(2);

	return dog.name + dog.age;
}
</script>
<style scoped></style>
