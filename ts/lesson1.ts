/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-08-31 14:52:42
 * @LastEditTime: 2022-08-31 15:00:55
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson1.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
const str: string = "武汉跃码教育";
console.log(str);
const num: number = 1;
console.log(num);
// const bool: boolean = true;
const bool: boolean = false;
console.log(bool);
// 泛型
const arr: Array<number> = [1, 2, 3];
console.log(arr);
const arr2: number[] = [1, 2, 23];
const arr3: boolean[] = [false, true];
console.log(arr2, arr3);
const t: [string, number, boolean] = ["武汉跃码教育", 2, false];
console.log(t);
enum Color {
	BLUE,
	GREEN,
}
console.log(Color.BLUE, Color.GREEN);
enum Color2 {
	BLUE = 6,
	GREEN,
	WHITE,
}
console.log(Color2.GREEN, Color2.WHITE);
enum Color3 {
	WHITE = 6,
	BLACK,
	BLUE = "blue",
	GREEN = "green",
}
console.log(Color3.BLUE, Color3.WHITE, Color3.BLACK);
