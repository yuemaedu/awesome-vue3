/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-08-31 23:09:09
 * @LastEditTime: 2022-08-31 23:14:49
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson6.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
namespace User {
	export interface Iuser {
		name: string;
		age: number;
	}
}
const user: User.Iuser = {
	name: "武汉跃码教育",
	age: 3,
};
console.log(user);
