/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-08-31 16:13:35
 * @LastEditTime: 2022-08-31 16:23:05
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson5.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
interface UserInfo<T> {
	info: T;
}
const userInfo: UserInfo<string> = {
	info: "武汉跃码教育",
};
interface UserInfo1<T extends {}> {
	info: T;
}

interface UserT {
	name: string;
}
const userInfo1: UserInfo1<{ name: string }> = {
	info: { name: "武汉跃码教育" },
};

const userInfo11: UserInfo1<UserT> = {
	info: { name: "武汉跃码教育" },
};
function hello<T>(content: T) {
	console.log(content);
}
hello<UserT>({ name: "武汉跃码教育" });
hello<UserInfo1<UserT>>(userInfo11);
hello<UserInfo1<{ name: string }>>(userInfo1);
