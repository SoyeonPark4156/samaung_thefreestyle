$(document).ready(function(){
    // 해시태그 클립보드 복사기능
    $("#tag_copy_btn").click(function(){
       const tag_copy = document.getElementById("copy_tag");
       $(tag_copy).attr('type','text');
    //    $(tag_copy).val($('#tag_text').text());
    //    tag_copy.select();
        $(tag_copy).select();
       document.execCommand('copy');
       $(tag_copy).attr('type','hidden');
        alert("복사되었습니다")
    })
    ////////////////////////////////////

    // 슬라이드
    $(function(){
        $('#slide_wrap').slick({
            slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
            infinite : true, 	//무한 반복 옵션	 
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed :500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : true,			// 자동 스크롤 사용 여부
            autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            prevArrow : "<button type='button' class='slick-prev'></button>",		// 이전 화살표 모양 설정
            nextArrow : "<button type='button' class='slick-next'></button>",		// 다음 화살표 모양 설정
            dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
            draggable : true, 	//드래그 가능 여부
            fade: true,
            cssEase: 'linear',
            
            responsive: [ // 반응형 웹 구현 옵션
                {  
                    breakpoint: 720, 
                    settings: {
                        slidesToShow: 1,
                        prevArrow : false,
                        nextArrow : false,
                        fade :false,
                        centerMode: true,
                        variableWidth: true
                    } 
                }
            ]

        });

        $('.slick-dots li button').text("");
        let pause_btn = `<li class="pause_btn"></li>`
        $('.slick-dots').append(pause_btn);

        let progress_bar = `<div class="progress_bar"></div>`
        $('.slick-dots li button').append(progress_bar);

        // // auto_slide();
        // auto_gauge();
        // $('slick-dots li button').click(function(){
        //     clearInterval(inter_guage);
        //     auto_gauge();
        // })

        $(document).on('click','.pause_btn',function(){
            $('#slide_wrap').slick('slickPause')
            $(this).toggleClass('play_btn')
        })
        $(document).on('click','.play_btn',function(){
                $('#slide_wrap').slick('slickPlay')
        })
       
        console.log($('#slide_wrap').slick('slickCurrentSlide'));
      })
    //   let inter_guage =""
    //   function auto_gauge(){
    //         // $('.slick-dots li button .progress_bar').css({left : '-100%'})
    //         if(('slick-dots li').hasClass('slick-active')){
    //             inter_guage = setInterval(function(){
    //                 $('.slick-dots li.slick-active').children('button').children('.progress_bar').animate({
    //                     left : 0
    //                 },3000)
    //             },3000)
    //         }
    //   }

    //   let inter_guage =""
    //   function auto_slide() { 
    //     clearInterval(inter_guage)
    //     inter_guage = setInterval(function(){
    //         auto_gauge();
    //     }, 3000);
    // }
   
})
