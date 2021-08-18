
/*회원가입 클릭*/
$(function(){
    $(".choose_box").click(function(){
        $(".choose_box").removeClass("on");
        $(this).addClass("on");

        if($(".choose_box").hasClass("on")){
            $(".button").addClass("on");
        };

        if($(".choose_child").hasClass("on")){
            $(".child_conts").css("display","block");
        }else{
            $(".child_conts").css("display","none");
        };

        if($(".choose_build").hasClass("on")){
            $(".build_conts").css("display","block");
            $(".button_zone").css("display","none");
            $(".zone_build").css("display","block");
        }else{
            $(".build_conts").css("display","none");
            $(".button_zone").css("display","block");
            $(".zone_build").css("display","none");
        };
    });   
});

$(function(){
    $(".child_agree").click(function(){
        $(this).children(".agrcon_check").toggleClass("on");
    });
});

$(function(){
    $(".req_put").focusin(function(){
        $(this).addClass("fcs");
        $(".req_put.did").removeClass("fcs");
    });
    $(".req_put").focusout(function(){
        $(this).removeClass("fcs");
    });
});


/*약관 동의*/
$(function(){
    $(".agree_text dt").click(function(){
        $(this).children(".agr_all_check").toggleClass("on");

        if($(".agr_all_check").hasClass("on")){
            $(".button").addClass("on");
            $(".agree_conts").css("display","none");
        }else{
            $(".button").removeClass("on");
            $(".agree_conts").css("display","block");
        };
    });

    $(".agrcon_left").click(function(){
        $(this).children(".agrcon_check").toggleClass("on");
        $(this).parent(".agr_contact").toggleClass("in");
    });
});


/*약관상세 배경 padding*/
$(function(){
    if($(".button_zone").hasClass("fix_bottom")){
        $(".Contents").css("padding-bottom","65px");
    };
});


/*소셜로그인*/
function sobt_male(){
    $(".btn_female").removeClass("on");
    $(".btn_male").addClass("on");
}
function sobt_female(){
    $(".btn_male").removeClass("on");
    $(".btn_female").addClass("on");
}
function sobt_local(){
    $(".btn_foreign").removeClass("on");
    $(".btn_local").addClass("on");
}
function sobt_foreign(){
    $(".btn_local").removeClass("on");
    $(".btn_foreign").addClass("on");
}

$(function(){
    $(".btn_social").click(function(){
        if($(".btn_local").hasClass("on")){
            $(".button").addClass("on");
        };
        if($(".btn_foreign").hasClass("on")){
            $(".button").addClass("on");
        };
    });
});

// $(function(){
//     $(".req_put.did").attr("disabled",true);
// });




/*로그인*/
$(function(){
    $(".login_put").on("focus", function(){
        $(".login_conts").addClass("mn_top");
    });
    $(".login_put").on("blur", function(){
        $(".login_conts").removeClass("mn_top");
    });
});


/*메인 홈화면*/
$(window).scroll(function() {  
	if ($(".main_top").offset().top > 30){
		$(".main_top").addClass("bgin");
	} else {
		$(".main_top").removeClass("bgin");
	}
});


/*받은 선물*/
$(function(){
    $(".end_link").click(function(){
        $(".gift_end").css("display","block");
        $(this).parents(".trans_list").css("display","none");
    });
});


/*자동충전*/
$(function(){
    $(".auto_bel").click(function(){
        $(".auto_bel").removeClass("ing");
        $(this).addClass("ing");
        $(".auto_check").removeClass("on");
        $(this).children().children().children(".auto_check").addClass("on");

        if($(".auto_bel_add").hasClass("ing")){
            $(".button").addClass("on");
        }else{
            $(".button").removeClass("on");
        }
    });
});


/*일반충전*/
$(function(){
    $(".btn_selt").click(function(){
        $(".btn_selt").removeClass("on");
        $(this).addClass("on");
    });

    $(".way_zone").click(function(){
        $(".way_zone").removeClass("on");
        $(this).addClass("on");
    });
});

$(function(){
    $(".way_wrap").children(".way_zone:first-child").addClass("on");
    //$(".charge_select").children(".btn_selt:first-child").addClass("on");
});


function bt_card(){
    $(".way_contain").css("display","none");
    $(".contain_card").css("display","block");
    $(".button_zone").removeClass("gif");
}
function bt_account(){
    $(".way_contain").css("display","none");
    $(".contain_account").css("display","block");
    $(".button_zone").removeClass("gif");
}
function bt_virtual(){
    $(".way_contain").css("display","none");
    $(".contain_virtual").css("display","block");
    $(".button_zone").removeClass("gif");
}
function bt_phone(){
    $(".way_contain").css("display","none");
    $(".contain_phone").css("display","block");
    $(".button_zone").removeClass("gif");
}
function bt_gift(){
    $(".way_contain").css("display","none");
    $(".contain_gift").css("display","block");
    $(".button_zone").addClass("gif");
}

$(function(){
    if($(".way_wrap").hasClass("doub_wrap") === false){
        $(".way_zone").css("margin-right","7px");
    }

    if($(".way_card").hasClass("on")){
        $(".contain_card").css("display","block");
    }
    if($(".way_account").hasClass("on")){
        $(".contain_account").css("display","block");
    }
    if($(".way_virtual").hasClass("on")){
        $(".contain_virtual").css("display","block");
    }
    if($(".way_phone").hasClass("on")){
        $(".contain_phone").css("display","block");
    }
    if($(".way_gift").hasClass("on")){
        $(".contain_gift").css("display","block");
    }
});

$(function(){
   $(".code_put").focusin(function(){
    $(this).addClass("fcs");
   });
});

function appendCode(){
    var txt_code = document.createElement("div");
    txt_code = 
    "<div class='done_code'><span class='code_pan'>WEL2</span>-<span class='code_pan'>0210</span>-<span class='code_pan'>102E</span>-<span class='code_pan'>A87C</span></div>";
    $(".gift_zone").append(txt_code);
};


/*상품권*/
$(function(){
    $(".error .gicard_left img").attr("src", "../images/sv_way_gift.svg");
});


/*선물보내기*/
$(function(){
    $(".send_put").keypress(function(){
        $(".send_ch_box").removeClass("on");
        $(this).parents(".send_ch_box").addClass("on");

        if($(".send_ch_box").hasClass("on")){
            $(".button").addClass("on");
        }else{
            $(".button").removeClass("on");
        }
    });
    $(".send_put").on("blur", function(){
        $(".send_ch_box").removeClass("on");
    });

    $(".btn_minus").click(function(){
        $(this).parents(".send_ch_box").css("display","none");
    });
});

// function appendSend(){
//     var txt_send = document.createElement("div");
//     txt_send = 
//     "<div class='send_ch_box did'><input type='text' class='send_put ff_robo' value='010-1234-5678'><p class='btn_minus' onclick='del_send();'></p></div>";
//     $(".terms_title").append(txt_send);
// };


/*보낸 선물함*/
$(function(){
    $(".sent_link").click(function(){
        $(".sent_end").css("display","block");
        $(this).parents(".trans_list").css("display","none");
    });

    // $(".bt_month").click(function(){
    //     $(".bt_month").removeClass("on");
    //     $(this).addClass("on");
    // });
});


/*당겨쓰기*/
$(function(){
    $(".pull_agree").click(function(){
        $(this).children(".agrcon_check").toggleClass("on");
    });
});

$(function(){
    $(".bt_poss_etc").click(function(){
        $(".hidd_menu").toggleClass("on");
    });
    $(".hidd_back").click(function(){
        $(this).parents(".hidd_menu").removeClass("on"); 
    });
});

$(function(){
    $(".modal_bg").click(function(){
        $(this).parents(".modaling").hide();
    });

    $(".b-close").click(function(){
        $(".modaling").hide();
    });
});


/*포인트전환 이용동의*/
$(function(){
    $(".point_agree").click(function(){
        $(this).children(".agrcon_check").toggleClass("on");

        if($(".point_agree").children(".agrcon_check").hasClass("on")){
            $(".button").addClass("on");
        }else{
            $(".button").removeClass("on");
        }
    });
});

/*포인트 가져오기*/
$(function(){
    $(".point_put").focusin(function(){
        $(".button").addClass("on");
    });
});


/*footer 클릭*/
$(function(){
    $(".ft_center").click(function(){
        $(".ft_center").removeClass("on");
        $(this).addClass("on");
    });
});

$(function(){
    $(".ft_btqr").click(function(){
        $(this).parents(".ft_wrap").addClass("qq");
        $(".quick_wrap").slideToggle();
    });

    $(".ft_btcode").click(function(){
        $(this).parents(".ft_wrap").removeClass("qq");
        $(".quick_wrap").slideToggle();
    });
});


/*사용하기*/
$(function(){
    $(".pull_put").on("focus", function(){
        $(this).parents(".use_form").addClass("fcs");
        $(this).next(".useint").addClass("ing");
        $(".use_box").css("display","none");
    });
    $(".pull_put").on("blur", function(){
        $(this).parents(".use_form").removeClass("fcs");
        $(".use_box").css("display","block");
    });
});


/*내역보기*/
$(function(){
    $(".agebel").click(function(){
        $(this).toggleClass("check");
        $(".balance").slideToggle();
    });

    $(".link_hide").click(function(){
        $(this).parents(".box_possible").addClass("hide_possible");
        $(".hidd_menu").removeClass("on");
    });

    $(".bt_poss_arr").click(function(){
        $(this).parents(".box_possible").removeClass("hide_possible");
    });

    $(".bt_month").click(function(){
        $(".bt_month").removeClass("on");
        $(this).addClass("on");
        $(".btn_srch_gift").removeClass("ing");
        $(".srch_detail_time").removeClass("see");
    });

    $(".bt_detail").click(function(){
        $(".srch_detail_time").addClass("see");
        $(".btn_srch_gift").addClass("ing");
    });

    $(".minical_input").click(function(){
        $(".minical_input").removeClass("in");
        $(this).addClass("in");
    });
});


/*회원탈퇴*/
$(function(){
    $(".draw_dl dt").click(function(){
        $(this).toggleClass("on");
    });
});


/*faq*/
$(function(){
    $(".list_faq").parent(".inwhite").css("border","none");

    $(".kinds_box").click(function(){
		$(this).closest("li").toggleClass("on").siblings().removeClass("on");
	});
});


/*문의하기*/
$(function(){
    $(".inq_table tbody tr").click(function(){
        $(this).css("background", "#f5f5f5");
    });
});


/*고객센터*/
$(function(){
    $(".resist_put").focusin(function(){
        $(this).parent(".resist_line").addClass("in");
    });

    $(".btn_ident").click(function(){
        $(".btn_ident").removeClass("on");
        $(this).addClass("on");
    });
});

function bt_resident(){
    $(".id_conts").css("display","none");
    $(".conts_resident").css("display","block");
}
function bt_driver(){
    $(".id_conts").css("display","none");
    $(".conts_driver").css("display","block");
}
function bt_alien(){
    $(".id_conts").css("display","none");
    $(".conts_alien").css("display","block");
}
function bt_passport(){
    $(".id_conts").css("display","none");
    $(".conts_passport").css("display","block");
}


/*이벤트팝업*/
$(function(){
    $(".today_check").click(function(){
        $(this).toggleClass("on");
    });
});


/*이벤트*/
$(function(){
    $(window).scroll(function() {  
        if ($(".main_top").offset().top > 30){
            $(".main_top").addClass("bgin");
        } else {
            $(".main_top").removeClass("bgin");
        }
    });
    
    $(".common_round").click(function(){
        $(".common_round").removeClass("ch");
        $(this).addClass("ch");
    });
})
