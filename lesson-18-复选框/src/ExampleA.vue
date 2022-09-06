<!--
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 13:31:50
 * @LastEditTime: 2022-09-06 18:08:08
 * @LastEditors: 最爱白菜吖
 * @FilePath: \vue3-vite\src\ExampleA.vue
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved. 
-->
<template>
	{{ checkOne }}
	<input v-model="checkOne" type="checkbox" />
	<hr />
	{{ checkList }}
	<input type="checkbox" v-model="checkList" value="足球" />
	<input type="checkbox" v-model="checkList" value="篮球" />
	<input type="checkbox" v-model="checkList" value="乒乓球" />
	<hr />
	{{ checkList1 }}
	<input type="checkbox" v-model="checkList1" :value.number="1" />
	<input type="checkbox" v-model="checkList1" :value.number="2" />
	<input type="checkbox" v-model="checkList1" :value.number="3" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkOne = ref(true);
const checkList = ref([]);
const checkList1 = ref([]);
</script>
<style scoped></style>
