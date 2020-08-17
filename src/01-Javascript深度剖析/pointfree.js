/**
 * pointfree编程风格
 * 
 * 不需要指明数据来源
 * 只需要合成运算过程
 * 需要定义一些辅助的基本函数
 * 
 * world wild web ==> W. W. W
 */
const fp = require("lodash/fp")


const firstLetterToUpper = fp.flowRight(fp.join(". "), fp.map(fp.first), fp.split(" "), fp.toUpper)

console.log(firstLetterToUpper("world wild web"))