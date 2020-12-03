/* eslint-disable indent */
/**
 * 判断一个元素是否在数组中
 * @param {any[]} arr 数组
 * @param {*} val 元素
 * @returns {boolean}
 */
export function contains(arr: any[], val: any): boolean {
    return arr.indexOf(val) != -1 ? true : false;
}

/**
 * 遍历数组
 * @param {any[]} arr 数组
 * @param {Function} fn 回调函数
 */
export function each(arr: any[], fn: Function): void {
    fn = fn || Function;
    var a = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < arr.length; i++) {
        var res = fn.apply(arr, [arr[i], i].concat(args));
        if (res != null) a.push(res);
    }
}

/**
 * 遍历数组返回新数组
 * @param {any[]} arr 数组
 * @param {Function} fn 回调函数
 * @param {*} thisObj this指向
 * @returns {any[]}
 */
export function map(arr: any[], fn: Function, thisObj?): any[] {
    var scope = thisObj || window;
    var a = [];
    for (var i = 0, j = arr.length; i < j; ++i) {
        var res = fn.call(scope, arr[i], i, this);
        if (res != null) a.push(res);
    }
    return a;
}

enum ArrSortType {
    asc = 1, // 升序
    desc = 2, // 降序
    random = 3 // 随机
}

/**
 * 数组排序
 * @param {any[]} arr 数组
 * @param {ArrSortType} [type=ArrSortType.asc] 1: 升序 2: 降序 3: 随机
 * @returns {any[]}
 */
export function sort(arr: any[], type: ArrSortType = ArrSortType.asc): any[] {
    return arr.sort((a: number, b: number): any => {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    });
}

/**
 * 数组去重
 * @param {any[]} arr 数组
 * @returns {any[]}
 */
export function unique(arr: any[]): any[] {
    if (Array.hasOwnProperty('from')) {
        return Array.from(new Set(arr));
    } else {
        let n = {},
            r = [];
        for (let i = 0; i < arr.length; i++) {
            if (!n[arr[i]]) {
                n[arr[i]] = true;
                r.push(arr[i]);
            }
        }
        return r;
    }
    // 注：上面 else 里面的排重并不能区分 2 和 '2'，但能减少用indexOf带来的性能
    /* 正确排重
        if ( Array.hasOwnProperty('from') ) {
            return Array.from(new Set(arr))
        }else{
            var r = [], NaNBol = true
            for(var i=0; i < arr.length; i++) {
                if (arr[i] !== arr[i]) {
                    if (NaNBol && r.indexOf(arr[i]) === -1) {
                        r.push(arr[i])
                        NaNBol = false
                    }
                }else{
                    if(r.indexOf(arr[i]) === -1) r.push(arr[i])
                }
            }
            return r
        }

         */
}

/**
 * 求两个集合的并集
 * @param {any[]} a 集合a
 * @param {any[]} b 集合b
 * @returns {any[]}
 */
export function union(a: any[], b: any[]): any[] {
    var newArr = a.concat(b);
    return this.unique(newArr);
}

/**
 * 求两个集合的交集
 * @param {any[]} a 集合a
 * @param {any[]} b 集合b
 * @returns {any[]}
 */
export function intersect(a: any[], b: any[]): any[] {
    var _this = this;
    a = unique(a);
    return map(a, function(o: any): any[] {
        return _this.contains(b, o) ? o : null;
    });
}

/**
 * 删除其中一个元素
 * @param {any[]} arr 数组
 * @param {*} ele 元素
 * @returns {any[]}
 */
export function remove(arr: any[], ele: any): any[] {
    var index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

/**
 * 将类数组转换为数组的方法
 * @param {ArrayLike<any>} ary 类数组
 * @returns {any[]}
 */
export function formArra(ary: ArrayLike<any>): any[] {
    var arr = [];
    if (Array.isArray(ary)) {
        arr = ary;
    } else {
        arr = Array.prototype.slice.call(ary);
    }
    return arr;
}

/**
 * 最大值
 * @param {number[]} arr 数组
 * @returns {number}
 */
export function max(arr: number[]): number {
    return Math.max.apply(null, arr);
}

/**
 * 最小值
 * @export
 * @param {number[]} arr 数组
 * @returns {number}
 */
export function min (arr: number[]): number {
    return Math.min.apply(null, arr);
}

/**
 * 求和
 * @export
 * @param {number[]} arr 数字数组
 * @returns {number}
 */
export function sum (arr: number[]): number {
    return arr.reduce((pre: number, cur: number): number => {
        return pre + cur;
    });
}

/**
 * 平均值
 * @export
 * @param {number[]} arr 数字数组
 * @returns {number}
 */
export function average (arr: number[]): number {
    return sum(arr) / arr.length;
}
