function moveBack(){
    history.back();
    event.preventDefault();
}


/*사용하기 변동*/
function onInput(){
    var paybtn = document.querySelector('.button');
    var hiddSwipe = document.querySelector('.swipe-vari');
    paybtn.classList.add("on");
    hiddSwipe.style.display = "block";
}


/*비번변경_사업자 인증*/
function certNumb(){
    var certPut1 = document.querySelector('.cert_phone');
    var nextBtn = document.querySelector('.button');
    certPut1.classList.add('finish');
    nextBtn.classList.add('on');
}


/*선물하기*/
function appendSend(){
    if($(".send_ch_box").length < 5){
        $(".terms_title").append(
            '<div class="send_ch_box did">' +
            '<input type="text" class="send_put ff_robo" value="010-1234-5678" />' +
            '<p class="btn_minus"></p>' +
            '</div>'
        )
    };

    $(".btn_minus").click(function(){
        $(this).parents(".send_ch_box").remove();
    });
    $(".button").addClass("on");
}

function appendSend1(){
    if($(".send_ch_box").length < 5){
        $(".terms_title").append(
            '<div class="send_ch_box did">' +
            '<input type="text" class="send_put ff_robo" value="김경아 010-1234-5678" />' +
            '<p class="btn_minus"></p>' +
            '</div>'
        )
    };

    $(".btn_minus").click(function(){
        $(this).parents(".send_ch_box").remove();
    });
}

function appendSend2(){
    if($(".send_ch_box").length < 5){
        $(".terms_title").append(
            '<div class="send_ch_box did">' +
            '<input type="text" class="send_put ff_robo" value="welcome" />' +
            '<p class="btn_minus"></p>' +
            '</div>'
        )
    };

    $(".btn_minus").click(function(){
        $(this).parents(".send_ch_box").remove();
    });
    $(".button").addClass("on");
}