/**
 * 去除空格
 * @param {string} str
 * @param {number} type all-所有空格(不传), around-前后空格，left-前空格，right-后空格
 */

export const demoTrim =  (str: string, type: string = 'all'): string => {
    const types: {[index: string]: RegExp} = {
        all: /\s*/g,
        around: /(^\s*)|(\s*$)/g,
        left: /(^\s*)/g,
        right: /(\s*$)/g
    };

    return str.replace(types[type], '');
};

/**
 * 数字四舍五入(可以指定保留几位小数)
 * @param {Number} value    数值
 * @param {Number} position 保留几位小数
 * @return {String}
 */
export const mathTrans = (value: number, position = 0): string => {
    const tmp = Math.pow(10, position);

    let result = (Math.round(value * tmp) / tmp).toString();

    let num = result.split('.')[1] ? result.split('.')[1].length : 0;

    while (num < position) {
        result += !result.includes('.') ? '.0' : '0';

        num++;
    }

    return result;
};
