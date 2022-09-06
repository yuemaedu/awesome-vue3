/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-08-31 15:37:15
 * @LastEditTime: 2022-08-31 15:51:45
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson4.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
function say(): void {
	console.log("武汉跃码教育");
}
say();
function say1(name: string) {
	console.log(name);
}
say1("武汉跃码教育");
function say2(name: string, city?: string) {
	console.log(name, city);
}
say2("武汉跃码教育");
say2("武汉跃码教育", "武汉市");
function say3(name: string): string {
	return name;
}
const name1 = say3("武汉跃码教育");
console.log(name1);
function say4(name: string, ...str: string[]) {
	console.log(name, str);
}
say4("武汉跃码教育");
say4("武汉跃码教育", "跃码教育", "武汉市");
say4("武汉跃码教育", ...["跃码教育", "武汉市"]);
// const arr10: number[] = [];
// arr10.push(1, 2, 3);
// arr10.push(...[1, 2, 3]);
interface User {
	name: string;
	age: number;
}
function say5(u: User): User {
	return u;
}
console.log(say5({ name: "最爱白菜吖", age: 3 }));

function say6(name: string): string;
function say6(name: string, age: number): string;
function say6(name: string, age?: number): string {
	if (age !== undefined) {
		name += age;
	}
	return name;
}
const name11 = say6("武汉跃码教育");
console.log(name11);
const name12 = say6("武汉跃码教育", 3);
console.log(name12);
