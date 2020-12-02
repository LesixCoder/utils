---
id: "_helper_"
title: "Module: helper"
---

# Module: "helper"

## Index

### Functions

* [demoTrim](_helper_.md#demotrim)
* [mathTrans](_helper_.md#mathtrans)

## Functions

### demoTrim

▸ `Const`**demoTrim**(`str`: string, `type?`: string): string

*Defined in [helper.ts:7](https://github.com/lsxlsxxslxsl/utils/blob/e14caa4/src/helper.ts#L7)*

去除空格

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`str` | string | - |  |
`type` | string | "all" | all-所有空格(不传), around-前后空格，left-前空格，right-后空格  |

**Returns:** string

___

### mathTrans

▸ `Const`**mathTrans**(`value`: number, `position?`: number): string

*Defined in [helper.ts:24](https://github.com/lsxlsxxslxsl/utils/blob/e14caa4/src/helper.ts#L24)*

数字四舍五入(可以指定保留几位小数)

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`value` | number | - | 数值 |
`position` | number | 0 | 保留几位小数 |

**Returns:** string
