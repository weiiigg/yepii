// 獲取圖片和音檔元素
const image = document.getElementById('hover-image');
const audio = document.getElementById('hover-audio');

// 當鼠標移動到圖片上時播放音檔
image.addEventListener('mouseenter', () => {
    audio.currentTime = 0; // 將音檔重置到開頭
    audio.play(); // 播放音檔
});

// 當鼠標移出圖片時停止播放
image.addEventListener('mouseleave', () => {
    audio.pause(); // 暫停音檔
    audio.currentTime = 0; // 將音檔重置到開頭
});
