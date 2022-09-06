/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-08-31 15:18:45
 * @LastEditTime: 2022-08-31 15:30:17
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson3.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
interface IUser {
	name: string;
}
interface ICompany {
	name: string;
	city: string;
	age: number;
	userList?: IUser[];
}
const company: ICompany = {
	name: "武汉跃码教育",
	city: "武汉",
	age: 1,
	userList: [],
};
console.log(compay);
// ['1','2','3']
interface MyArr {
	[index: number]: string | number;
}
const myArr1: string[] = ["武汉跃码教育", "乐编码"];
const myArr2: Array<string> = ["武汉跃码教育", "乐编码"];
const myArr: MyArr = ["武汉跃码教育", "乐编码", 1, 2];

interface MyMap {
	[index: string]: string;
}
const myMap: MyMap = {
	name: "武汉跃码教育",
	city: "武汉市",
};
