const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

// 마우스 움직임에 따라 랜덤 색 선 그리기
// ctx.lineWidth = 4;

// const colors = [
//   '#001219',
//   '#005f73',
//   '#0a9396',
//   '#94d2bd',
//   '#e9d8a6',
//   '#ee9b00',
//   '#ca6702',
//   '#bb3e03',
//   '#ae2012',
//   '#9b2226',
// ];

// function onMouse(event) {
//   ctx.beginPath();
//   const color = colors[Math.floor(Math.random() * colors.length)]; // 색상 랜덤
//   ctx.strokeStyle = color;
//   ctx.moveTo(400, 400);
//   ctx.lineTo(event.offsetX, event.offsetY); // canvas 위 마우스 좌표
//   ctx.stroke();
// }

// canvas.addEventListener('mousemove', onMouse);

// 사람 그리기
// ctx.fillRect(200, 200, 15, 100); // 왼팔
// ctx.fillRect(400, 200, 15, 100); // 오른팔
// ctx.fillRect(260, 200, 100, 250); // 몸통

// ctx.arc(305, 110, 70, 0, 2 * Math.PI); // 머리
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = 'white';
// ctx.arc(330, 80, 10, 0, 2 * Math.PI); // 오른쪽 눈
// ctx.arc(280, 80, 10, 0, 2 * Math.PI); // 왼쪽 눈
// ctx.fill();

// 집 만들기
// ctx.fillRect(200, 200, 50, 200); // 왼쪽 벽
// ctx.fillRect(400, 200, 50, 200); // 오른쪽 벽
// ctx.fillRect(300, 300, 50, 100); // 문
// ctx.fillRect(200, 200, 200, 20); // 천장
// ctx.moveTo(200, 200); // 좌표 이동
// ctx.lineTo(325, 100); // 지붕
// ctx.lineTo(450, 200); // 지붕
// ctx.fill();

// 경로 바꾸기 배우기
// ctx.rect(50, 50, 100, 100); // (x, y, 가로길이, 세로길이)
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill(); // 채우기
// ctx.beginPath(); // 새로 시작
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle = 'red'; // 채우기 빨간색
// ctx.fill(); // 채우기
