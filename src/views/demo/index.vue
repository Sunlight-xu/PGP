<template>
  <div id="home" class="app-container">
    <div class="left">
      <img style="margin-top: -30px;margin-left: -14px;position: absolute;" src="../../assets/images/fx.png" />
      <div :class="{spot:on==true}"></div>
      <div class="verticalLine"></div>
      <img style="position: absolute;margin-left: -14px;margin-top: 98px;" src="../../assets/images/fx.png" />
    </div>
    <el-button @click="take(true)">开</el-button><el-button @click="take(false)">关</el-button>
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script>
    export default {
      name: "demo",
      data(){
        return{
          on:true
        }
      },
      methods:{
        take(key){
          this.on=key
        }
      },
      mounted(){
        var canvas = document.querySelector('canvas'),
          ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.lineWidth = .3;
        ctx.strokeStyle = (new Color(150)).style;

        // var mousePosition = {
        // 	x: 30 * canvas.width / 100,
        // 	y: 30 * canvas.height / 100
        // };
        var mousePosition = {
          x:  canvas.width - 100,
          y:  canvas.height - 60
        };

        var dots = {
          nb: 250,
          distance: 100,
          d_radius: 150,
          array: []
        };

        function colorValue(min) {
          return Math.floor(Math.random() * 255 + min);
        }

        function createColorStyle(r,g,b) {
          return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
        }

        function mixComponents(comp1, weight1, comp2, weight2) {
          return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }

        function averageColorStyles(dot1, dot2) {
          var color1 = dot1.color,
            color2 = dot2.color;

          var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
            g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
            b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
          return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
        }

        function Color(min) {
          min = min || 0;
          this.r = colorValue(min);
          this.g = colorValue(min);
          this.b = colorValue(min);
          this.style = createColorStyle(this.r, this.g, this.b);
        }

        function Dot(){
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;

          this.vx = -.5 + Math.random();
          this.vy = -.5 + Math.random();

          this.radius = Math.random() * 2;

          this.color = new Color();
        }

        Dot.prototype = {
          draw: function(){
            ctx.beginPath();
            ctx.fillStyle = this.color.style;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
          }
        };

        function createDots(){
          for(var i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
          }
        }

        function moveDots() {
          for(var i = 0; i < dots.nb; i++){

            var dot = dots.array[i];

            if(dot.y < 0 || dot.y > canvas.height){
              dot.vx = dot.vx;
              dot.vy = - dot.vy;
            }
            else if(dot.x < 0 || dot.x > canvas.width){
              dot.vx = - dot.vx;
              dot.vy = dot.vy;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
          }
        }

        function connectDots() {
          for(var i = 0; i < dots.nb; i++){
            for(var j = 0; j < dots.nb; j++){
              var i_dot = dots.array[i];
              var j_dot = dots.array[j];

              if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                  ctx.beginPath();
                  ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                  ctx.moveTo(i_dot.x, i_dot.y);
                  ctx.lineTo(j_dot.x, j_dot.y);
                  ctx.stroke();
                  ctx.closePath();
                }
              }
            }
          }
        }

        function drawDots() {
          for(var i = 0; i < dots.nb; i++){
            var dot = dots.array[i];
            dot.draw();
          }
        }

        function animateDots() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          moveDots();
          connectDots();
          drawDots();

          requestAnimationFrame(animateDots);
        }

        //----------------------跟着鼠标动--------------------
        document.getElementById('home').addEventListener('mousemove', function(e){
          mousePosition.x = e.pageX;
          mousePosition.y = e.pageY;
        });

        document.getElementById('home').addEventListener('mouseleave', function(e){
          mousePosition.x = canvas.width / 2;
          mousePosition.y = canvas.height / 2;
        });
        //----------------------跟着鼠标动--------------------

        createDots();
        requestAnimationFrame(animateDots);
      }
    }
</script>

<style scoped>
  .verticalLine{
    width: 2px;
    height: 100px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .verticalLine::after{
    width: 100px;
    height: 2px;
    background-color: #3a8ee6;
    position: relative;
  }
  .spot{
    width: 10px;
    height: 10px;
    margin-left: -4px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move 2s infinite linear;
  }
  @keyframes move{
    0%{
      margin-top:100px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    50%{
      margin-top:50px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:0px;
      opacity:1;
      border:1px solid rgba(62,183,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }
  #home{
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    /* box-sizing: border-box; */
    overflow-x: hidden;
    background: rgba(7,17,27,0.95);
  }
  .canvas {
    position: fixed;
    z-index: 1;
  }
  #home a{
    color: #fff;
    display: block;
  }
  .content{
    /* height: 100%; */
    /* margin-top: -50px; */
    display: flex;
  }

  .content section{
    flex: 1;
    z-index: 11;
    margin-left: 200px;
    /* box-sizing: border-box; */
    /* padding-right: 60px; */
  }

  table{
    position: absolute;
    top: 100px;
    padding: 0 20px;
    width: 100%;
  }
  table thead tr{
    border-bottom: 2px solid #fff;
  }
  table tbody tr{
    border-bottom: 1px solid #fff;
  }
  table tr{
    height: 50px;
  }
  table tr td{
    text-align: center;
    cursor: pointer;
  }
  table tr td:last-child{
    width: 10%;
  }
  table tr th{
    font-weight: normal;
    cursor: pointer;
  }

  .search-bar{
    position: absolute;
    top: 20px;
    left: 10%;
    width: 400px;
    height: 46px;
    line-height: 46px;
  }
  .search-bar .input-wrap{
    float: left;
    width: 270px;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 20px 0 0 20px;
    background: rgba(255, 255, 255, 0.2);
    transition: all .8s;
  }
  .search-bar .input-wrap:focus{
    background: rgba(255, 255, 255, .8);
  }
  .search-bar .input-button{
    float: left;
    width: 50px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all .8s;
  }
  .search-bar .input-wrap:focus .input-botton{
    border-color: rgba(255, 255, 255, 0.8);
  }

  .fade-enter-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: rotate( -70deg ) translateX( 300px );
  }
</style>
