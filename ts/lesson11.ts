/*
 * @Author: 最爱白菜吖 <1355081829@qq.com>
 * @Date: 2022-09-01 10:59:21
 * @LastEditTime: 2022-09-01 11:11:12
 * @LastEditors: 最爱白菜吖
 * @FilePath: \ts\lesson11.ts
 * @QQ: 大前端QQ交流群: 473246571
 * @公众账号: 乐编码
 * 惑而不从师，其为惑也，终不解矣
 * Copyright (c) 2022 by 武汉跃码教育, All Rights Reserved.
 */
function say() {
	return { name: "暖暖", age: 0.6, height: 0.4 };
}
type DogB = ReturnType<typeof say>;
