<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-02 13:52:26
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	{{ dogReactive }}
	{{ dogList }}
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface Dog {
	name: string;
}
const dog: Dog = {
	name: "暖暖",
};
const dogList: Dog[] = [{ name: "暖暖" }];
let dogReactive = reactive(dog);

const dogListReactive = reactive(dogList);
console.log(dogReactive === dog);
console.log(dogReactive === reactive(dog));
console.log(dogListReactive === reactive(dogList));
dogReactive = reactive({ name: "暖暖" });
console.log(dogReactive === reactive(dog));
setTimeout(() => {
	// dogReactive = reactive({ name: "暖暖+暖暖" });
	dogReactive.name = "暖暖+暖暖";
}, 100);
</script>
<style scoped></style>
