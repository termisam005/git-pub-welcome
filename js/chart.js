
var c4 = $('.chart4.chart_circle');

c4.circleProgress({
startAngle: -Math.PI/2 ,
//시작지점 (기본값 Math.PI)
//animation: true,
//그래프가 그려지는 애니메이션 동작 여부
thickness:9,
//그래프두께
lineCap:'round',
//그래프 선 모양
size:240,
value:0.7,
emptyFill: '#e6ebf5',
//그래프 빈칸색 기본값 rgba(0,0,0,0.1)

fill: {gradient: ['#ff7a00','#ea002c']}
}).on('circle-animation-end',function(event) {
console.log('애니메이션 종료');
});