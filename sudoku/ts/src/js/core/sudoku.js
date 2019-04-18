//生成数独游戏
// 1.生成完成的解决方案：Generator
// 2.随机去除部分数据：按比例
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
class Sudoku {
    constructor() {
        // 生成完成的解决方案
        const generator = new generator_1.default();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }
    make(level = 5) {
        // 挖空算法
        // const shouldRid = Math.random()*9 <level
        this.puzzleMatrix = this.solutionMatrix.map(row => row.map(cell => {
            return Math.random() * 9 < level ? 0 : cell; //九分之五的概率返回0
        }));
    }
}
exports.Sudoku = Sudoku;
exports.default = Sudoku;
