/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-08-31 15:02:12
 * @LastEditTime: 2022-08-31 15:07:21
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson2.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
function say(): void {
	console.log("武汉跃码教育");
}
say();
let compay: any = "武汉跃码教育";
console.log(compay);
compay = "跃码教育";
console.log(compay);
compay = 1;
console.log(compay);

// null undefined
let username: string | undefined | null = null;
console.log(username);
username = "最爱白菜吖";
console.log(username);
// never
function hi(): never {
	throw new Error("error");
}
