/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 10:43:13
 * @LastEditTime: 2022-09-01 10:48:41
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson9.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
// keyof
interface Dog {
	name: string;
	age: number;
}
// type DogA = "name" | "age";
type DogA = keyof Dog;
let ageKey = "age";
const dog1: Dog = {
	name: "暖暖",
	age: 0.6,
};
const age = dog1[ageKey as keyof Dog];
const age1 = dog1["age" as DogA];
