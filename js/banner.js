/**
 * Created by ȽȽ on 2019/11/30.
 * ����ֲ���js
 */
$(() => {

    $('<div class="banner-box">' +
    '<img src="img/index/banner1.png" class="banner-img1" alt="ͼƬ1"/>' +
    '<img src="img/index/banner2.png" class="banner-img2" alt="ͼƬ2"/>' +
    '<img src="img/index/banner3.png" class="banner-img3" alt="ͼƬ3"/>' +
    '<img src="img/index/banner4.png" class="banner-img4" alt="ͼƬ4"/>' +
    '<img src="img/index/banner1.png" class="banner-img5" alt="ͼƬ5"/>' +
    '<div class="arrow-left"><img src="img/index/arrow-left.png" class="banner-img6" alt="ͼƬ5"/></div>' +
    '<div class="arrow-right"><img src="img/index/arrow-right.png" class="banner-img7" alt="ͼƬ5"/></div>' +
    '<ul class="list-inline banner-circle"><li></li><li></li><li></li><li></li><li></li></ul>' +
    '</div>').appendTo('div.banner>div')


    let timer, a = 1
    $('div.banner-box').css('backgroundImage', `url(img/index/banner${a}.png)`)
    timer = setInterval(() => {
        a += 1
        $('div.banner-box').css('backgroundImage', `url(img/index/banner${a}.png)`)
            .css('transition', 'all 1s linear')
        if (a >= 4 ) a = 0

        //console.log(a)
    },4000)

    $('div.banner-box').on('mouseenter', () => {
        clearInterval(timer)
    })
    $('div.banner-box').on('mouseleave', () => {
        timer = setInterval(() => {

            $('div.banner-box').css('backgroundImage', `url(img/index/banner${a}.png)`)
                .css('transition', 'all 1s linear')
            a += 1
            if (a > 4 ) a = 1

            console.log(a)
        },4000)
    })
})