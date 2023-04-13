// $(document).ready(function(){
//     // 해시태그 클립보드 복사기능
//     $("#tag_copy_btn").click(function(){
//        const tag_copy = document.getElementById("copy_tag");
//        $(tag_copy).attr('type','text');
//     //    $(tag_copy).val($('#tag_text').text());
//     //    tag_copy.select();
//         $(tag_copy).select();
//        document.execCommand('copy');
//        $(tag_copy).attr('type','hidden');
//         alert("복사되었습니다")
//     })
//     ////////////////////////////////////

//     // 슬라이드
//     $(function(){
//         $('#slide_wrap').slick({
//             slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
//             infinite : true, 	//무한 반복 옵션	 
//             slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
//             slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
//             speed :500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
//             arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
//             dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
//             autoplay : true,			// 자동 스크롤 사용 여부
//             autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
//             pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
//             vertical : false,		// 세로 방향 슬라이드 옵션
//             prevArrow : "<button type='button' class='slick_prev'></button>",		// 이전 화살표 모양 설정
//             nextArrow : "<button type='button' class='slick-next'></button>",		// 다음 화살표 모양 설정
//             dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
//             draggable : true, 	//드래그 가능 여부
//             fade: true,
//             cssEase: 'linear',
            
//             responsive: [ // 반응형 웹 구현 옵션
//                 {  
//                     breakpoint: 720, 
//                     settings: {
//                         slidesToShow: 1,
//                         prevArrow : false,
//                         nextArrow : false,
//                         fade :false,
//                         centerMode: true,
//                         variableWidth: true
//                     } 
//                 }
//             ]

//         });

//         $('.slick-dots li button').text("");
//         let pause_btn = `<li class="pause_btn"></li>`
//         $('.slick-dots').append(pause_btn);

//         let progress_bar = `<div class="progress_bar"></div>`
//         $('.slick-dots li button').append(progress_bar);


//         $(document).on('click','.pause_btn',function(){
//             $('#slide_wrap').slick('slickPause')
//             $(this).toggleClass('play_btn')
//         })
//         $(document).on('click','.play_btn',function(){
//                 $('#slide_wrap').slick('slickPlay')
//         })
       
//         console.log($('#slide_wrap').slick('slickCurrentSlide'));
//       })
   
   
// })

$(document).ready(function(){
    progress();

    //해시태그 클립보드 복사기능
    $("#tag_copy_btn").click(function(){
        const tag_copy = '#삼성TheFreestyle #더프리스타일 #TheFreestyle #올라운드플레이어 #삼성더프리스타일플레이어#더프리스타일체험이벤트 #삼성전자이벤트 #삼성라이프스타일TV #삼성TV'
    //     $(tag_copy).attr('type','text');
    //      $(tag_copy).select();
    //     document.execCommand('copy');
    //     $(tag_copy).attr('type','hidden');
    //      alert("복사되었습니다")
        
        // writeText()의 인자로 넣은 텍스트가 복사된다.
        window.navigator.clipboard.writeText(tag_copy).then(() => {
        // 복사가 완료되면 이 부분이 호출된다.
        alert("복사되었습니다.");
  });
    })
    
     
});

function progress(){

    const $slider = $('.slider');
    const $progress = $('.progress .bar'); //프로그래스 바 

    //슬라이드가 실행되면 첫번째 $progress에 active 추가
    $slider.on('init', (event, slick) => {
        $progress.eq(0).addClass('active');
    });

    $('.slider').slick({
        slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed :500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 2000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,		// 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick_prev'></button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick_next'></button>",		// 다음 화살표 모양 설정
        draggable : true, 	//드래그 가능 여부
        fade: true,
        cssEase: 'linear',
        
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 721, 
                settings: {  
                    slidesToShow: 1,
                    prevArrow : false,
                    nextArrow : false,
                    fade :false,
                    variableWidth: true
                } 
            }
        ]

    });

    //슬라이드가 바뀌면 $progress에 active 추가
    $slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        $progress.eq(nextSlide).addClass('active').siblings().removeClass('active');
    });

    //$progress를 클릭했을 때, 해당 슬라이드로 이동
    $progress.on('click', function (){
        if (!$(this).hasClass('active')) {
        const bar_index = $(this).index();
        $slider.slick('slickGoTo', bar_index);
        }
    });

    //멈춤버튼과 재생버튼
    $('.pause_btn').on('click',function(){
        $(this).addClass('none')
        $('.play_btn').removeClass('none')
        $('.slider').slick('slickPause')
        $progress.removeClass('active')
    });
    
    $('.play_btn').on('click',function(){
        $('.pause_btn').removeClass('none')
       $('.slider').slick('slickPlay')
        $(this).addClass('none')
    });
            
}

