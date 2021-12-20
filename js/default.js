document.addEventListener("DOMContentLoaded", function () {
    let textOption = {
        rootMargin: '0px',
        threshold: buildTreshold()
    }

    let imgOption = {
        rootMargin: '0px',
        threshold: buildTreshold()
    }

    let observer = new IntersectionObserver(moveScroll, textOption);
    let observer2 = new IntersectionObserver(moveScroll, imgOption);

    function buildTreshold() {
        let thresholds = [];
        let numSteps = 10;

        for (let i = 0; i < numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    function moveScroll(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('cp-off');
            }
            // else if(entry.intersectionRatio < 1){
            //     entry.target.classList.remove('cp-off');
            // }
        });
    }

    const target = document.querySelectorAll('.cp-text');
    const target2 = document.querySelectorAll('.cp-img');

    target.forEach((el) => {
        observer.observe(el);
    })

    target2.forEach((el) => {
        observer2.observe(el);
    })

    const colorChange1 = document.querySelector('.education-review');

    let observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.2 && entry.intersectionRatio < 0.7) {
                document.querySelector('html').style = "background: #FDFAF6";
            } else {
                document.querySelector('html').style = "";
            }
        })
    }, imgOption)

    observer3.observe(colorChange1);


    const difPortLine = document.querySelectorAll('.charge-company__default');

    let observer4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animation');
            }
            // else if(entry.intersectionRatio < 1){
            //     entry.target.classList.remove('animation');
            // }
        })
    }, imgOption);

    difPortLine.forEach((el) => {
        observer4.observe(el);
    });


    const promotionCp = document.querySelectorAll('.cp-div');

    var idx = 0,
        setCptxt = '';

    let observer5 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            var cpDivText = entry.target.children[0].lastElementChild.children;
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('cp-off');
                for (var cptxt of cpDivText) {
                    cptxt.classList.add('cp-active__text');
                }
                if (entry.intersectionRatio > 0.3) {
                    setCptxt = setTimeout(() => {
                        for (let cptxt of cpDivText) {
                            setTimeout(() => {
                                cptxt.classList.add('cp-off-text');
                            }, 100 * idx);
                            idx++;
                        }
                        idx = 0;
                    }, 1000);
                }
            }
        })
    }, imgOption);

    promotionCp.forEach((el) => {
        observer5.observe(el);
    })

    const questionCp = document.querySelectorAll('.link__default');

    let observer6 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('cp-off');
                setTimeout(() => {
                    entry.target.classList.add('shadow');
                }, 1000);
            }
        })
    }, imgOption);

    questionCp.forEach((el) => {
        observer6.observe(el);
    })


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

    observer7.observe(dividingLine);


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

    //상품별 이미지, 설명

    let prImgArray = [];

    function prImgPreload() {
        for (let i = 0; i < prImgPreload.arguments.length; i++) {
            prImgArray[i] = new Image();
            prImgArray[i].src = prImgPreload.arguments[i];
        }
    }

    prImgPreload(
        "../img/package-bg3.jpg",
        "../img/package-bg4.jpg",
        "../img/package-bg5.jpg",
        "../img/package-bg6.jpg",
        "../img/package-bg7.jpg"
    )

    const prDis = {
        prTxt: {
            blog: {
                title: '핀셋 브랜드 블로그',
                txt: {
                    txt1: '핀셋 마케팅의 대표 상품 중 하나입니다.',
                    txt2: '블로그 하나로 여러분 사업의 브랜딩, 마케팅',
                    txt3: '모두를 잡고 광고효과를 극대화합니다.'
                },
                url: 'service-blog.html'
            },
            advert: {
                title: '핀셋 홍보단',
                txt: {
                    txt1: '대부분의 체험단, 기자단의 실제 비용은 1-2만원밖에 안드는것 아셨나요?',
                    txt2: '이름만 그럴싸한 상품과는 다릅니다. 제대로 노출시켜 광고효과를 극대화합니다.'
                },
                url: 'service-pr.html'

            },
            youtube: {
                title: '핀셋 유튜브 브랜딩',
                txt: {
                    txt1: '유튜브 브랜딩을 해준다는 회사들이 많습니다.',
                    txt2: '과연 이런 회사들의 유튜브는 어떻게 운영되고 있을까요?'
                },
                url: 'service-youtube.html'
            },
            keywords: {
                title: '핀셋 키워드 광고',
                txt: {
                    txt1: '대부분의 키워드 광고가 효율이 안나는 이유가 무엇일까요?',
                    txt2: '저희 핀셋마케팅에서 확인하세요.'
                },
                url: 'service-keywords.html'
            },
            website: {
                title: '핀셋 홈페이지 제작',
                txt: {
                    txt1: '홈페이지를 공장처럼 찍어내면 여러분의 상품, 서비스를',
                    txt2: '제대로 판매할수 있을까요? 핀셋 아카데미의 전문 개발자,',
                    txt3: '웹디자이너, 카피라이팅 전문가의 모든것을 적용시켜 드립니다'
                },
                url: 'service-homepage.html'
            },
            academy: {
                title: '핀셋 아카데미',
                txt: {
                    txt1: '3일만에 1기 전원마감을 시킨 강의. 말이 필요없습니다.',
                    txt2: '대행사의 대표들, 전문직, 자영업자 대표들,',
                    txt3: '예비창업자 모두가 들으러오는 마케팅 교육입니다.'
                },
                url: 'service-academy.html'
            }
        }
    }

    var imgArray = [
        "../img/package-bg2.jpg",
        "../img/package-bg3.jpg",
        "../img/package-bg4.jpg",
        "../img/package-bg5.jpg",
        "../img/package-bg6.jpg",
        "../img/package-bg7.jpg"
    ]

    // 개별 상품 메뉴 클릭 이벤트
    const singlePR = document.querySelectorAll('.single-promotion__menu li');

    function getElementIndex(element, range) {
        if (!!range) return [].indexOf.call(element, range);
        return [].indexOf.call(element.parentNode.children, element);
    }

    singlePR.forEach((el) => {
        el.addEventListener('click', PrTrans);
    })

    var prIdx = 0;

    function PrTrans(element, idx) {
        singlePR.forEach((el) => {
            el.removeEventListener('click', PrTrans);
            el.classList.remove('active');
        });

        prIdx = 0;
        this.classList.add('active');

        const PrTxtCont = document.querySelector('.single-promotion__detail__text-container');
        const PrTxt = PrTxtCont.children;
        var dataIdx = this.dataset.index;

        setTimeout(() => {
            //배경이미지 변경
            var prImgCont = document.querySelector('.single-promotion__detail__cont');

            prImgCont.style.background = `url(${imgArray[dataIdx]}) no-repeat center / 100% 100%`;

            //개별 상품의 내용 리셋
            for (let txt of PrTxt) {
                if (txt.classList.contains('single-promotion__detail__text-area')) {
                    if (txt.childNodes[0].classList.contains('text-area__text')) {
                        setTimeout(() => {
                            txt.remove();
                        })
                    }
                }
            }

            //제목 변경
            PrTxt[0].children[0].innerHTML = Object.values(prDis.prTxt)[dataIdx].title;
            //개별 상품의 내용 적용
            for (let [key, value] of Object.entries(prDis.prTxt)) {
                if (key == this.dataset.type) {
                    var sumTag = [];
                    const viewMore = PrTxt[PrTxt.length - 1];

                    viewMore.children[0].setAttribute('href',`${Object.values(value.url).join('')}`);
                    viewMore.remove();
                    for (let replaceTxt of Object.values(value.txt)) {
                        var pTag = document.createElement('p'),
                            spanTag = document.createElement('span');

                        pTag.classList.add('single-promotion__detail__text-area');
                        pTag.classList.add('cp-active__text');
                        spanTag.classList.add('text-area__text');
                        pTag.appendChild(spanTag);
                        spanTag.innerText = `${replaceTxt}`;
                        PrTxtCont.append(pTag);
                    }
                    PrTxtCont.append(viewMore);
                }
            }

            for (let NodeList of PrTxt) {
                setTimeout(() => {
                    NodeList.classList.add('cp-off-text')
                }, 150 * prIdx)
                prIdx++
            }

            setTimeout(() => {
                singlePR.forEach((el) => {
                    el.addEventListener('click', PrTrans);
                });
            }, 800);
        }, 1400);

        for (let NodeList of PrTxt) {
            setTimeout(() => {
                NodeList.classList.remove('cp-off-text')
            }, 150 * prIdx)
            prIdx++
        }
    }
})