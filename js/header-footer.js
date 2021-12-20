window.addEventListener('DOMContentLoaded', () => {
    //창 크기 변경 시 이벤트 발생
    var resizeThrottle = _.throttle(menuHeight, 500);

    window.addEventListener('resize', resizeThrottle);

    function menuHeight() {
        var menu = document.querySelector('.burger-menu'),
            menuHeight = window.innerHeight,
            gnbHeight = document.querySelector('header').clientHeight;
        menuHeight = menuHeight - gnbHeight;
        menu.style.height = `${menuHeight}px`
    }
    setTimeout(() => {
        menuHeight();
    }, 800);

    // service.style = 'height';

    //버거메뉴 클릭 이벤트
    const menuBtn = document.querySelector('.burger-menu-btn');

    const btnThrottle = _.throttle(menuVisible, 500);

    menuBtn.addEventListener('click', btnThrottle);

    function menuVisible() {
        this.classList.toggle('active');
        setTimeout(() => {
            this.classList.toggle('close');
        }, 300);

        var menu = document.querySelector('.burger-menu')
        menu.classList.toggle('visible');
        var menuList = document.querySelectorAll('.eff-list');

        if (menu.classList.contains('visible')) {
            menuList.forEach((el, idx) => {
                setTimeout(() => {
                    el.style = 'transform: translateX(0)';
                }, 100 * idx);
            })

            //메뉴를 열면 html에 overflow : hidden 적용
            document.querySelector('html').style = 'overflow: hidden';
        } else {
            menuList.forEach((el, idx) => {
                setTimeout(() => {
                    el.style = 'transform: translateX(-100%)';
                }, 100 * idx);
            })
            document.querySelector('html').style = '';
        }

        //메뉴 닫기 실행 시 서브메뉴가 열려있으면 서브메뉴도 같이 닫기
        var serviceSub = document.querySelector('.service__sub-menu');

        if (serviceSub.classList.contains('unfold')) {
            document.querySelectorAll('.sub-menu').forEach((el) => {
                el.style = 'opacity: 0';
            })
            setTimeout(() => {
                serviceSub.classList.remove('unfold');
            }, 100)
        }
    }

    //서비스 소개 클릭시 서브 메뉴 등장
    var serviceMenu = document.querySelector('.service');

    serviceMenu.addEventListener('click', subMenu);

    function subMenu() {
        var serviceSub = document.querySelector('.service__sub-menu');

        if (serviceSub.classList.contains('unfold')) {
            document.querySelectorAll('.sub-menu').forEach((el) => {
                el.style = 'opacity: 0';
            })
            setTimeout(() => {
                serviceSub.classList.remove('unfold');
            }, 100)
        } else {
            serviceSub.classList.add('unfold');
            setTimeout(() => {
                document.querySelectorAll('.sub-menu').forEach((el) => {
                    el.style = 'opacity: 1';
                })
            }, 400)
        }
    }


    //스크롤이 맨위가 아니라면 FIXED + 백그라운드 진하게
    window.addEventListener('scroll', gnbOpacity);

    function gnbOpacity(){
        if(window.scrollY > 0){
            document.querySelector('header').classList.add('active');
        }else{
            document.querySelector('header').classList.remove('active');
        }
    }

    //footer

    function buildTreshold() {
        let thresholds = [];
        let numSteps = 5;

        for (let i = 0; i < numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    let imgOption = {
        rootMargin: '0px',
        threshold: buildTreshold()
    }

    const dividingLine = document.querySelector('.dividing-line');

    let observer7 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                document.querySelector('.dividing-line__center-point').classList.add('active');
                setTimeout(() => {
                    document.querySelector('.dividing-line__left-line').classList.add('active');
                    document.querySelector('.dividing-line__right-line').classList.add('active');
                }, 800)

            }
        })
    }, imgOption);

    try{
        observer7.observe(dividingLine);
    }catch{ return; }


    const contact = document.querySelector('.contact-us');

    let observer8 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                document.querySelector('.contact-us__title').classList.add('active');
                setTimeout(() => {
                    document.querySelector('.contact-us__btn').classList.add('active');

                    setTimeout(() => {
                        document.querySelector('.contact-us__text-area').classList.add('active');
                    }, 150)
                }, 150)
            }
        })
    }, imgOption);

    observer8.observe(contact);
});