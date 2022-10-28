// コンテンツ読み込み後実行
$(window).on('load', function (){

    // 繰り返しの実行
    $(function() {
    for(var i = 0; i <150; i++){
        console.log(i,"インデックス")
        // スライド画像のsrcの配列を定義
        var slide_img_array = ["dog.png","cat.png","chick.png","horse.png","pig.png","toumei.png","toumei.png","toumei.png"];
        // スライド画像の枚数に応じた範囲の乱数を生成
        var random = Math.floor( Math.random() * slide_img_array.length);
        console.log(random,"乱数")
        //乱数に応じて表示する画像のsrcを配列から取得
        var slide_img_src = slide_img_array[random];
        console.log(slide_img_src,"スライド画像のsrc")
        // 乱数から取得した画像に変更
        $(".slide-img"+i).attr("src","img/" + slide_img_src);
    }
    })
});




// スタートボタンを押したとき実行
$('#btn_play').on("click", function () {

    // 1.動画を再生する
    $('#video').get(0).play();


    // 2.スライド動作して消える
    setTimeout(function(){
    $(".slide-img0").animate(
    { right:1150 }, 3000, "linear");
    $(".slide-img0").fadeOut(1);
    }, 1000);
    setTimeout(function(){
    $(".slide-img1").animate(
    { right:1150 }, 3000, "linear");
    $(".slide-img1").fadeOut(1);
    }, 1200);
    setTimeout(function(){
    $(".slide-img2").animate(
    { right:1050 }, 3000, "linear");
    $(".slide-img2").fadeOut(1);
    }, 1400);
    setTimeout(function(){
    $(".slide-img3").animate(
    { right:1050 }, 3000, "linear");
    $(".slide-img3").fadeOut(1);
    }, 1600);
    setTimeout(function(){
    $(".slide-img4").animate(
    { right:1050 }, 3000, "linear");
    $(".slide-img4").fadeOut(1);
    }, 1800);
        setTimeout(function(){
        $(".slide-img5").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img5").fadeOut(1);
        }, 2000);
        setTimeout(function(){
        $(".slide-img6").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img6").fadeOut(1);
        }, 2200);
        setTimeout(function(){
        $(".slide-img7").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img7").fadeOut(1);
        }, 2400);
        setTimeout(function(){
        $(".slide-img8").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img8").fadeOut(1);
        }, 2600);
        setTimeout(function(){
        $(".slide-img9").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img9").fadeOut(1);
        }, 2800);
        setTimeout(function(){
        $(".slide-img10").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img10").fadeOut(1);
        }, 3000);
        setTimeout(function(){
        $(".slide-img11").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img11").fadeOut(1);
        }, 3200);
        setTimeout(function(){
        $(".slide-img12").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img12").fadeOut(1);
        }, 3400);
        setTimeout(function(){
        $(".slide-img13").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img13").fadeOut(1);
        }, 3600);
        setTimeout(function(){
        $(".slide-img14").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img14").fadeOut(1);
        }, 3800);
        setTimeout(function(){
        $(".slide-img15").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img15").fadeOut(1);
        }, 4000);
        setTimeout(function(){
        $(".slide-img16").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img16").fadeOut(1);
        }, 4200);
        setTimeout(function(){
        $(".slide-img17").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img17").fadeOut(1);
        }, 4400);
        setTimeout(function(){
        $(".slide-img18").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img18").fadeOut(1);
        }, 4600);
        setTimeout(function(){
        $(".slide-img19").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img19").fadeOut(1);
        }, 4800);
        setTimeout(function(){
        $(".slide-img20").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img20").fadeOut(1);
        }, 5000);
        setTimeout(function(){
        $(".slide-img21").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img21").fadeOut(1);
        }, 5200);
        setTimeout(function(){
        $(".slide-img22").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img22").fadeOut(1);
        }, 5400);
        setTimeout(function(){
        $(".slide-img23").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img23").fadeOut(1);
        }, 5600);
        setTimeout(function(){
        $(".slide-img24").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img24").fadeOut(1);
        }, 5800);
        setTimeout(function(){
        $(".slide-img25").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img25").fadeOut(1);
        }, 6000);
        setTimeout(function(){
        $(".slide-img26").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img26").fadeOut(1);
        }, 6200);
        setTimeout(function(){
        $(".slide-img27").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img27").fadeOut(1);
        }, 6400);
        setTimeout(function(){
        $(".slide-img28").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img28").fadeOut(1);
        }, 6600);
        setTimeout(function(){
        $(".slide-img29").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img29").fadeOut(1);
        }, 6800);
        setTimeout(function(){
        $(".slide-img30").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img30").fadeOut(1);
        }, 7000);
        setTimeout(function(){
        $(".slide-img31").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img31").fadeOut(1);
        }, 7200);
        setTimeout(function(){
        $(".slide-img32").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img32").fadeOut(1);
        }, 7400);
        setTimeout(function(){
        $(".slide-img33").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img33").fadeOut(1);
        }, 7600);
        setTimeout(function(){
        $(".slide-img34").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img34").fadeOut(1);
        }, 7800);
        setTimeout(function(){
        $(".slide-img35").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img35").fadeOut(1);
        }, 8000);
        setTimeout(function(){
        $(".slide-img36").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img36").fadeOut(1);
        }, 8200);
        setTimeout(function(){
        $(".slide-img37").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img37").fadeOut(1);
        }, 8400);
        setTimeout(function(){
        $(".slide-img38").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img38").fadeOut(1);
        }, 8600);
        setTimeout(function(){
        $(".slide-img39").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img39").fadeOut(1);
        }, 8800);
        setTimeout(function(){
        $(".slide-img40").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img40").fadeOut(1);
        }, 9000);
        setTimeout(function(){
        $(".slide-img41").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img41").fadeOut(1);
        }, 9200);
        setTimeout(function(){
        $(".slide-img42").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img42").fadeOut(1);
        }, 9400);
        setTimeout(function(){
        $(".slide-img43").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img43").fadeOut(1);
        }, 9600);
        setTimeout(function(){
        $(".slide-img44").animate(
        { right:1050 }, 3000, "linear");
        $(".slide-img44").fadeOut(1);
        }, 9800);
    });








    // ドラム成功のときは画像変更
$(window).on('keydown', function(e) {

    const pos_drum = $(".drum-img").offset();
    const pos_item0 = $(".slide-img0").offset();


    if (pos_item0.left >= pos_drum.left+37.5) {
        if(pos_item0.left <= pos_drum.left+112.5){
            if(e.keyCode === 13){
                
        // 得点したときの画像に一瞬変更
        $(".drum-img").attr("src","img/success.png");
        setTimeout(function(){
            $(".drum-img").attr("src","img/mato.png");            
            }, 100);
            }}}
        });


$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item1 = $(".slide-img1").offset();

if (pos_item1.left >= pos_drum.left+37.5) {
if(pos_item1.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item2 = $(".slide-img2").offset();

if (pos_item2.left >= pos_drum.left+37.5) {
if(pos_item2.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item3 = $(".slide-img3").offset();

if (pos_item3.left >= pos_drum.left+37.5) {
if(pos_item3.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item4 = $(".slide-img4").offset();

if (pos_item4.left >= pos_drum.left+37.5) {
if(pos_item4.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item5 = $(".slide-img5").offset();

if (pos_item5.left >= pos_drum.left+37.5) {
if(pos_item5.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item6 = $(".slide-img6").offset();

if (pos_item6.left >= pos_drum.left+37.5) {
if(pos_item6.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item7 = $(".slide-img7").offset();

if (pos_item7.left >= pos_drum.left+37.5) {
if(pos_item7.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item8 = $(".slide-img8").offset();

if (pos_item8.left >= pos_drum.left+37.5) {
if(pos_item8.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item9 = $(".slide-img9").offset();

if (pos_item9.left >= pos_drum.left+37.5) {
if(pos_item9.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item10 = $(".slide-img10").offset();

if (pos_item10.left >= pos_drum.left+37.5) {
if(pos_item10.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item11 = $(".slide-img11").offset();

if (pos_item11.left >= pos_drum.left+37.5) {
if(pos_item11.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item12 = $(".slide-img12").offset();

if (pos_item12.left >= pos_drum.left+37.5) {
if(pos_item12.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item13 = $(".slide-img13").offset();

if (pos_item13.left >= pos_drum.left+37.5) {
if(pos_item13.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item14 = $(".slide-img14").offset();

if (pos_item14.left >= pos_drum.left+37.5) {
if(pos_item14.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item15 = $(".slide-img15").offset();

if (pos_item15.left >= pos_drum.left+37.5) {
if(pos_item15.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item16 = $(".slide-img16").offset();

if (pos_item16.left >= pos_drum.left+37.5) {
if(pos_item16.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item17 = $(".slide-img17").offset();

if (pos_item17.left >= pos_drum.left+37.5) {
if(pos_item17.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item18 = $(".slide-img18").offset();

if (pos_item18.left >= pos_drum.left+37.5) {
if(pos_item18.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item19 = $(".slide-img19").offset();

if (pos_item19.left >= pos_drum.left+37.5) {
if(pos_item19.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item20 = $(".slide-img20").offset();

if (pos_item20.left >= pos_drum.left+37.5) {
if(pos_item20.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item21 = $(".slide-img21").offset();

if (pos_item21.left >= pos_drum.left+37.5) {
if(pos_item21.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item22 = $(".slide-img22").offset();

if (pos_item22.left >= pos_drum.left+37.5) {
if(pos_item22.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item23 = $(".slide-img23").offset();

if (pos_item23.left >= pos_drum.left+37.5) {
if(pos_item23.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item24 = $(".slide-img24").offset();

if (pos_item24.left >= pos_drum.left+37.5) {
if(pos_item24.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item25 = $(".slide-img25").offset();

if (pos_item25.left >= pos_drum.left+37.5) {
if(pos_item25.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item26 = $(".slide-img26").offset();

if (pos_item26.left >= pos_drum.left+37.5) {
if(pos_item26.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item27 = $(".slide-img27").offset();

if (pos_item27.left >= pos_drum.left+37.5) {
if(pos_item27.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item28 = $(".slide-img28").offset();

if (pos_item28.left >= pos_drum.left+37.5) {
if(pos_item28.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item29 = $(".slide-img29").offset();

if (pos_item29.left >= pos_drum.left+37.5) {
if(pos_item29.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item30 = $(".slide-img30").offset();

if (pos_item30.left >= pos_drum.left+37.5) {
if(pos_item30.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item31 = $(".slide-img31").offset();

if (pos_item31.left >= pos_drum.left+37.5) {
if(pos_item31.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item32 = $(".slide-img32").offset();

if (pos_item32.left >= pos_drum.left+37.5) {
if(pos_item32.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item33 = $(".slide-img33").offset();

if (pos_item33.left >= pos_drum.left+37.5) {
if(pos_item33.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item34 = $(".slide-img34").offset();

if (pos_item34.left >= pos_drum.left+37.5) {
if(pos_item34.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item35 = $(".slide-img35").offset();

if (pos_item35.left >= pos_drum.left+37.5) {
if(pos_item35.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item36 = $(".slide-img36").offset();

if (pos_item36.left >= pos_drum.left+37.5) {
if(pos_item36.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item37 = $(".slide-img37").offset();

if (pos_item37.left >= pos_drum.left+37.5) {
if(pos_item37.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item38 = $(".slide-img38").offset();

if (pos_item38.left >= pos_drum.left+37.5) {
if(pos_item38.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item39 = $(".slide-img39").offset();

if (pos_item39.left >= pos_drum.left+37.5) {
if(pos_item39.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item40 = $(".slide-img40").offset();

if (pos_item40.left >= pos_drum.left+37.5) {
if(pos_item40.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item41 = $(".slide-img41").offset();

if (pos_item41.left >= pos_drum.left+37.5) {
if(pos_item41.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item42 = $(".slide-img42").offset();

if (pos_item42.left >= pos_drum.left+37.5) {
if(pos_item42.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item43 = $(".slide-img43").offset();

if (pos_item43.left >= pos_drum.left+37.5) {
if(pos_item43.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});

$(window).on('keydown', function(e) {

const pos_drum = $(".drum-img").offset();
const pos_item44 = $(".slide-img44").offset();

if (pos_item44.left >= pos_drum.left+37.5) {
if(pos_item44.left <= pos_drum.left+112.5){
if(e.keyCode === 13){
// 得点したときの画像に一瞬変更
$(".drum-img").attr("src","img/success.png");
setTimeout(function(){
$(".drum-img").attr("src","img/mato.png"); 
}, 100);
}}}
});









































































































































































































































































































































































































































































































































































































// ＝＝めも＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 不明点
// ・繰り返し
// ・数字の足し算