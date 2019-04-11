const Grid = require("./ui/grid")
const PopupNumbers = require("./ui/popupnumbers")
require("./main.less")

const grid = new Grid($("#container"));
grid.build();
grid.layout();

const popupNumbers = new PopupNumbers($("#popupNumbers"));
grid.bindPopup(popupNumbers);

$("#check").on("click",e=>{
    if(grid.check()){
        alert("恭喜！解谜成功！")
    }
})
$("#reset").on("click",e=>{
    grid.reset();
})
$("#clear").on("click",e=>{
    grid.clear();
})
$("#rebuild").on("click",e=>{
    grid.rebuild();
})