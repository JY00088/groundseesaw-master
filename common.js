$('body').prepend('<header>');
$('body').append('<footer>');


$('header').load('./inc.html header>div', head);
$('footer').load('./inc.html footer>div', foot);

// $('svg').delay(3000, function(){$('#svg').fadeOut()});


let idx = localStorage.idx || 0;

const elMain = document.querySelector('main')
const elHeader01 = document.querySelector('header')


function head() {
    console.log(idx);

    console.log(
        $('header div').find('a').eq(idx)
    )
    /* $('header div a').eq(idx).css('color','pink');  */
    $('header div').find('a').eq(idx).addClass('aaa');

    $('header div a').click(function(){

        let idx = $(this).data().num;
        localStorage.idx = idx;

/* 
        localStorage.setItem('idx',2); //idx값 수정
        localStorage.getItem('idx');   //idx값 가져오기

        localStorage.removeItem('idx'); //삭제
        localStorage.clear(); //로컬스토리지 모두 삭제
 */
       
    })
    
    function addStyle03(n) { //스크롤 내릴때
        if (n < 110) {
            console.log(n);
            elHeader03.style.marginTop = -n * 0.4 + 'px';
         }
        // console.log(elHeader.scrollWidth,'여기')
        if (elHeader.scrollWidth > 484) { 
        elHeader.style.width = window.innerWidth * 0.9 - (n * 12) + 'px';
            const headSize = elHeader.scrollHeight
            

        //console.log(window.innerWidth)
        }
        
        let box1 = document.querySelector('.displayheader')
        // console.log(box1.clientHeight,'this')
        let i = box1.clientHeight;
        // console.log(i,'ii');
        elHeader01.style = `height:${i}px;`
                // console.log(headSize)
        // console.log('1')
        // elHeader01.style = `height:${headSize*3}px;`;
        // console.log('2')

        //elHeadertop.offsetTop - window.innerHeight * 0.9 < window.pageYOffset;
    }

    

    let pos = { y: 0, y2: 0, state: true }
    let offset = [];
    let play;
    
    const elHeadertop = document.querySelector('header .displayheader');
    const elHeader = document.querySelector('header .displayheader .text-header03 img');
    const elHeader03 = document.querySelector('header .displayheader .text-header03');
    
    
    //let i = elHeadertop.clientHeight;

    // elMain.style = `margin-top:${i+55}px;`

    window.addEventListener('scroll', function () {
        // console.log(elHeader);
        pos.y = window.pageYOffset;
        pos.state = (pos.y > pos.y2) ? true : false; // if문 한줄로 요약
        pos.y2 = pos.y;


        if (pos.state) {
            
        } else {
            
        }
        addStyle03(pos.y);

        

        // elHeader의 높이값을 구하세요

        // let i = 헤더의 높이값.

        // elMain.style = `margin-top:${i}px;`
        // console.log(elHeadertop.clientHeight,'높이값');
        
        //let i = elHeadertop.clientHeight;
        // elMain.style = `margin-top:${i}px;`


    })
    

    const elOne = document.querySelector('.boxsvg'),
            elOnesvg = document.querySelector('.svground');
    let click = false; // 클릭 여부
    
    let moving = false; // 움직이는 중인지 여부

    
    elOne.addEventListener('click',function(){
        let ifToggle = elOne.classList.toggle('svgOn')
        if (ifToggle==false) {
            elOnesvg.style = `width: 15%; height: 15%; left:43%; bottom: 0; position: absolute; background-color: transparent;`
        } else {
            elOnesvg.style = `width: 100%; background-color: palevioletred;`
        }
        // elOne.classList.toggle('on')
    });

    let moved; // 움직임 여부
    let didScroll;
    let fixBox = document.querySelector('.svground');
    let fixBoxHeight = fixBox.offsetHeight;
    

    window.addEventListener('scroll', function () {

        if (window.pageYOffset > 10) {
            fixBox.classList.add('show');
            
        }
        else {
            fixBox.classList.remove('show');
        }

        if (window.pageYOffset == 0) {
            elOne.classList.add('ac');
        } else {
            elOne.classList.remove('ac');
        }
        //moved = true;
    })
    

    
    
}

function foot() {
    console.log(idx);

    console.log(
        $('footer div').find('a').eq(idx)
    )
    $('footer div').find('a').eq(idx).addClass('show');
    
    let pos = { y: 0, y2: 0, state: true }
    const elFooterbtn = document.querySelector('.btnbox .footerbtn')
    
    elFooterbtn.addEventListener('click', function () {
        console.log(elFooterbtn)
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        
    })


    const btnani = document.querySelector('.btnbox');

    window.addEventListener('scroll', function () {
        

        if (window.pageYOffset == 0) {
            btnani.classList.add('sc');
        } else {
            btnani.classList.remove('sc');
        }

        pos.y = window.pageYOffset;
        pos.state = (pos.y > pos.y2) ? true : false; // if문 한줄로 요약
        pos.y2 = pos.y;

        console.log(pos.y)

        if (pos.y < 10) {
            elFooterbtn.classList.remove('show');
            elFooterbtn.classList.add('active');
            console.log('active')
        }
        else {
            elFooterbtn.classList.add('show');
            elFooterbtn.classList.remove('active');
        }

    })
    // elFooterbtn.addEventListener('click', function () {
    //     console.log(elFooterbtn)
    // })
    
    // option { left, top, behvior }
}





//#헤더 로드(  )

//#내용 로드( 히스토리, 리소스 누적)


//svg 페이지열릴때 100% 포지션 앱솔르투 제트인덱스- 헤더 메인애들보다 맨위에
//떠있는 지속시간을 자파스크립트에서 몇초가 지나면 밑으로 내려버림
// 스크롤시 탑값을 밑으로 떨어트려 트렌지션Y -> 밖으로 안보이게 내보냄
//눌러ㅆ을때 클릭이벤트 내려가고 다시 뜨고 
