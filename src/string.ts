/**
 * ## 字符串操作工具
 */

/* eslint-disable indent */
/**
 * ## 去除空格
 * @export
 * @param {string} str 字符串
 * @param {number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {string}
 */
export function trim(str: string, type: number): string {
    type = type || 1;
    switch (type) {
        case 1:
            return str.replace(/\s+/g, '');
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, '');
        case 3:
            return str.replace(/(^\s*)/g, '');
        case 4:
            return str.replace(/(\s*$)/g, '');
        default:
            return str;
    }
}

/**
 * 字符串写法转换
 * @export
 * @param {string} str 字符串
 * @param {number} type 1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
 * @returns {string}
 */
export function changeCase(str: string, type: number): string {
    type = type || 4;
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function(word): string {
                return (
                    word.substring(0, 1).toUpperCase() +
                    word.substring(1).toLowerCase()
                );
            });
        case 2:
            return str.replace(/\b\w+\b/g, function(word): string {
                return (
                    word.substring(0, 1).toLowerCase() +
                    word.substring(1).toUpperCase()
                );
            });
        case 3:
            return str
                .split('')
                .map(function(word): string {
                    if (/[a-z]/.test(word)) {
                        return word.toUpperCase();
                    } else {
                        return word.toLowerCase();
                    }
                })
                .join('');
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * 检测密码强度
 * @export
 * @param {string} str 密码
 * @returns {number}
 */
export function checkPwd(str: string): number {
    var Lv = 0;
    if (str.length < 6) {
        return Lv;
    }
    if (/[0-9]/.test(str)) {
        Lv++;
    }
    if (/[a-z]/.test(str)) {
        Lv++;
    }
    if (/[A-Z]/.test(str)) {
        Lv++;
    }
    // eslint-disable-next-line no-useless-escape
    if (/[\.|-|_]/.test(str)) {
        Lv++;
    }
    return Lv;
}

/**
 * 过滤html代码(把<>转换)
 * @export
 * @param {string} str html代码段
 * @returns {string}
 */
export function filterTag(str: string): string {
    str = str.replace(/&/gi, '&amp;');
    str = str.replace(/</gi, '&lt;');
    str = str.replace(/>/gi, '&gt;');
    str = str.replace(' ', '&nbsp;');
    return str;
}
