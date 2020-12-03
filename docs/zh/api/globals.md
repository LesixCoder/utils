---
id: "globals"
title: "工具库 - v0.1.0"
---

# 工具库 - v0.1.0

## Index

### Enumerations

* [ArrSortType](enums/arrsorttype.md)

### Other Functions

* [average](globals.md#average)
* [changeCase](globals.md#changecase)
* [checkPwd](globals.md#checkpwd)
* [contains](globals.md#contains)
* [each](globals.md#each)
* [filterTag](globals.md#filtertag)
* [formArra](globals.md#formarra)
* [intersect](globals.md#intersect)
* [map](globals.md#map)
* [mathTrans](globals.md#mathtrans)
* [max](globals.md#max)
* [min](globals.md#min)
* [remove](globals.md#remove)
* [sort](globals.md#sort)
* [sum](globals.md#sum)
* [trim](globals.md#trim)
* [union](globals.md#union)
* [unique](globals.md#unique)

### 设备相关 Functions

* [demoTrim](globals.md#demotrim)

## Other Functions

### average

▸ **average**(`arr`: number[]): number

*Defined in array.ts:203*

平均值

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | 数字数组 |

**Returns:** number

___

### changeCase

▸ **changeCase**(`str`: string, `type`: number): string

*Defined in string.ts:36*

字符串写法转换

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`str` | string | 字符串 |
`type` | number | 1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写 |

**Returns:** string

___

### checkPwd

▸ **checkPwd**(`str`: string): number

*Defined in string.ts:79*

检测密码强度

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`str` | string | 密码 |

**Returns:** number

___

### contains

▸ **contains**(`arr`: any[], `val`: any): boolean

*Defined in array.ts:8*

判断一个元素是否在数组中

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | any[] | 数组 |
`val` | any | 元素 |

**Returns:** boolean

___

### each

▸ **each**(`arr`: any[], `fn`: Function): void

*Defined in array.ts:17*

遍历数组

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | any[] | 数组 |
`fn` | Function | 回调函数  |

**Returns:** void

___

### filterTag

▸ **filterTag**(`str`: string): string

*Defined in string.ts:106*

过滤html代码(把<>转换)

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`str` | string | html代码段 |

**Returns:** string

___

### formArra

▸ **formArra**(`ary`: ArrayLike\<any>): any[]

*Defined in array.ts:156*

将类数组转换为数组的方法

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ary` | ArrayLike\<any> | 类数组 |

**Returns:** any[]

___

### intersect

▸ **intersect**(`a`: any[], `b`: any[]): any[]

*Defined in array.ts:129*

求两个集合的交集

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | any[] | 集合a |
`b` | any[] | 集合b |

**Returns:** any[]

___

### map

▸ **map**(`arr`: any[], `fn`: Function, `thisObj?`: any): any[]

*Defined in array.ts:34*

遍历数组返回新数组

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | any[] | 数组 |
`fn` | Function | 回调函数 |
`thisObj?` | any | this指向 |

**Returns:** any[]

___

### mathTrans

▸ `Const`**mathTrans**(`value`: number, `position?`: number): string

*Defined in [helper.ts:38](https://github.com/lsxlsxxslxsl/utils/blob/61b726e/src/helper.ts#L38)*

数字四舍五入(可以指定保留几位小数)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`value` | number | - | 数值 |
`position` | number | 0 | 保留几位小数 |

**Returns:** string

___

### max

▸ **max**(`arr`: number[]): number

*Defined in array.ts:171*

最大值

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | 数组 |

**Returns:** number

___

### min

▸ **min**(`arr`: number[]): number

*Defined in array.ts:181*

最小值

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | 数组 |

**Returns:** number

___

### remove

▸ **remove**(`arr`: any[], `ele`: any): any[]

*Defined in array.ts:143*

删除其中一个元素

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | any[] | 数组 |
`ele` | any | 元素 |

**Returns:** any[]

___

### sort

▸ **sort**(`arr`: any[], `type?`: [ArrSortType](enums/arrsorttype.md)): any[]

*Defined in array.ts:56*

数组排序

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`arr` | any[] | - | 数组 |
`type` | [ArrSortType](enums/arrsorttype.md) | ArrSortType.asc | - |

**Returns:** any[]

___

### sum

▸ **sum**(`arr`: number[]): number

*Defined in array.ts:191*

求和

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | 数字数组 |

**Returns:** number

___

### trim

▸ **trim**(`str`: string, `type`: number): string

*Defined in string.ts:13*

## 去除空格

**`export`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`str` | string | 字符串 |
`type` | number | 1-所有空格  2-前后空格  3-前空格 4-后空格 |

**Returns:** string

___

### union

▸ **union**(`a`: any[], `b`: any[]): any[]

*Defined in array.ts:118*

求两个集合的并集

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`a` | any[] | 集合a |
`b` | any[] | 集合b |

**Returns:** any[]

___

### unique

▸ **unique**(`arr`: any[]): any[]

*Defined in array.ts:76*

数组去重

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | any[] | 数组 |

**Returns:** any[]

___

## 设备相关 Functions

### demoTrim

▸ `Const`**demoTrim**(`str`: string, `type?`: string): string

*Defined in [helper.ts:21](https://github.com/lsxlsxxslxsl/utils/blob/61b726e/src/helper.ts#L21)*

去除空格
```html
<my-custom-element>Highlight JS will auto detect the language</my-custom-element>
```

**`typeparam`** Comment for type `T`.
You may also use the template tag.

**`template`** comment for type `T`.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`str` | string | - |  |
`type` | string | "all" | all-所有空格(不传), around-前后空格，left-前空格，right-后空格 |

**Returns:** string

Comment for special return value.
