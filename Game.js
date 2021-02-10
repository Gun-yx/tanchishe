function Game(){
   //初始化
   this.row = 20;
   this.col =20;
   //实例化节点
   this.init();
   //实例化蛇类
   this.snake = new Snake();
}
Game.prototype.init = function(){
    this.dom = document.createElement("table");
    var tr,td;
    //遍历行列上树
    for(var i = 0; i < this.row; i++){
        tr = document.createElement("tr");
        for( var j = 0; j < this.col;j++){
            td = document.createElement("td")
            //追加到tr
            tr.appendChild(td);
        }
        //追加节点上树
        this.dom.appendChild(tr);
    }
    //表格上树
    document.getElementById("app").appendChild(this.dom);
}
    
//设置颜色的方法
Game.prototype.setColor = function(){
    //让表格的第几行第几列设置什么颜色
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
}

