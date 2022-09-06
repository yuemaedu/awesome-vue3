/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 10:37:41
 * @LastEditTime: 2022-09-01 10:40:14
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson8.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
interface Dog {
	name: string;
}
interface Cat {
	age: number;
	name: string;
}
type Animal = Dog & Cat;
const dog: Animal = {
	name: "暖暖",
	age: 0.6,
};
