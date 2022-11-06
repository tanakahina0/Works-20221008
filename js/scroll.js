const $box_apple = document.getElementById('box_apple');
const $box_apple2 = document.getElementById('box_apple2');
const $box_apple3 = document.getElementById('box_apple3');
const $snow_white_mini = document.getElementById('snowwhite_mini');
const $box_fixed = document.getElementById('box_fixed');
const $blink = document.getElementById('blink');
const $snow_white = document.getElementById('snowwhite');
const $spinner = document.getElementById('loading');
const $black = document.getElementById('black');
const $white = document.getElementById('white');
const $eat_apple = document.getElementById('eat_apple');
const $snowwhite_sleep = document.getElementById('snowwhite_sleep');
const $point_move = document.getElementById('point-move');
const $rip = document.getElementById('rip');
window.addEventListener('scroll',function() {
    let measure = window.scrollY
    if (1000 < measure && 5000 > measure) {
        $box_fixed.classList.add('on');
        $box_apple2.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $snow_white_mini.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    }else if (3000 < measure && 8000 > measure) { // 3000以上～8000以下のとき
        // apple1を出す
        $box_apple.classList.add('on_apple');
        // apple2と3を消す
        $box_apple2.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    } else if (8000 < measure && 11000 > measure) { // 8000以上～11000以下のとき
        // apple2を出す
        $box_apple2.classList.add('on_apple');
        // apple1と3を消す
        $box_apple.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    } else if (11000 < measure && 13000 > measure) { // 11000以上のとき～13000以下のとき
        // apple3を出す
        $box_apple3.classList.add('on_apple');
        // apple1と2を消す
        $box_apple.classList.remove('on_apple');
        $box_apple2.classList.remove('on_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    } else if (13000 < measure && 18000 > measure) { // 13000以上のとき～20000以下のとき
        // apple3を動かす
        $box_apple3.classList.add('move_apple');
        // 白雪姫を表示させる
        $snow_white_mini.classList.add('on');
        // apple1と2を消す
        $box_apple.classList.remove('on_apple');
        $box_apple2.classList.remove('on_apple');
        $box_fixed.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    } else if (16000 < measure) {
        $snow_white.classList.add('on');
        $box_apple.classList.remove('on_apple');
        $box_apple2.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $box_apple3.classList.remove('move_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
    } else if (20000 < measure && 27000 > measure) {
        $black.classList.add('on');
        $white.classList.remove('on');
        $box_apple.classList.remove('on_apple');
        $box_apple2.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $box_apple3.classList.remove('move_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    } else if (29000 < measure) {
        $point_move.classList.add('on');
        $black.classList.remove('on');
        $white.classList.remove('on');
        $box_apple.classList.remove('on_apple');
        $box_apple2.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $box_apple3.classList.remove('move_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $snow_white.classList.remove('on');
    }else { // それ以外のとき
        // 全部消す
        $box_apple.classList.remove('on_apple');
        $box_apple2.classList.remove('on_apple');
        $box_apple3.classList.remove('on_apple');
        $box_apple3.classList.remove('move_apple');
        $snow_white_mini.classList.remove('on');
        $box_fixed.classList.remove('on');
        $blink.classList.remove('on');
        $point_move.classList.remove('on');
        $snow_white.classList.remove('on');
    }
});
document.getElementById("box_apple3").addEventListener("click",function() {
    this.classList.add("fall_apple")
    this.classList.remove("move_apple")
}) 
document.getElementById("rip").addEventListener("click",function() {
    $blink.classList.add('on');
    $snow_white.classList.remove('on');
    $point_move.classList.remove('on');
})
window.addEventListener('scroll',function() {
    let measure = window.scrollY
    console.log(measure);
    if (20000 < measure && 27000 > measure) {
        $black.classList.add('on');
        $white.classList.remove('on');
    }else if (23000 < measure) {
        $white.classList.add('on');
    }else {
        $black.classList.remove('on');
        $white.classList.remove('on');
    }
});
window.addEventListener('scroll',function() {
    let measure = window.scrollY
    console.log(measure);
    if (21000 < measure) {
        $eat_apple.classList.add('on');
    }else {
        $eat_apple.classList.remove('on');
    }
});
window.addEventListener('scroll',function() {
    let measure = window.scrollY
    console.log(measure);
    if (28000 < measure) {
        $snowwhite_sleep.classList.add('on');
        $point_move.classList.add('on');
    }else {
        $snowwhite_sleep.classList.remove('on');
    }
});
window.onload = function() {
    $spinner.classList.add('loaded');
  }