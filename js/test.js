var loopText2 = setTimeout(textLoop, 1000);
var loopText = setTimeout(textTyping, 1000);


function textLoop() {
    var brText = document.querySelectorAll('.effect-text__cont__text-area2:nth-of-type(1) span'),
        brText2 = document.querySelectorAll('.effect-text__cont__text-area2:nth-of-type(2) span'),
        brFirstChild = document.querySelector('.effect-text__cont__text-area2:nth-of-type(1)'),
        copyText = brFirstChild.cloneNode(true);
    copyText.querySelectorAll('span').forEach((el) => {
        el.style = "";
    });
    setTimeout(() => {
        brText.forEach((el, idx) => {
            setTimeout(() => {
                el.style = 'transform: translateY(-100%) rotate3d(1,1,1, -20deg); opacity: 0;';
            }, 30 * idx)
        })
        brText2.forEach((el, idx) => {
            setTimeout(() => {
                el.style = 'transform: translateY(0); opacity: 1;';
            }, 30 * idx)
        })
        setTimeout(() => {
            document.querySelector('.effect-text__cont2').append(copyText);
            brFirstChild.remove();
            loopText2 = setTimeout(textLoop, 1000);
        }, 1000);
    }, 1000)
}



var brIdx = 0;

function textTyping(){
    var brText = document.querySelector('.effect-text__cont__text-area'),
    brArr = [['영','업',' ','전','화','번','호','가',' ','없','습','니','다','.'],['오','는',' ','문','의','를',' ','소','화','하','기','도',' ','바','쁩','니','다','.']];
    brArr[brIdx].forEach((el, idx) => {
        setTimeout(() => {
            brText.innerHTML += el;
            if(idx == brArr[brIdx].length - 1){
                brArr[brIdx].forEach((el2, idx2) => {
                    setTimeout(() => {
                        brText.innerHTML = brText.innerHTML.substring(0, brText.innerHTML.length - 1);
                        if(idx2 == brArr[brIdx].length - 1){
                                brIdx == 0 ? brIdx = 1 : brIdx = 0;
                                loopText = setTimeout(textTyping, 1000);
                        }
                    }, 50 * (idx2 + 1))
                })
            }
        }, 100 * idx)
    })
    //     brText2 = document.querySelectorAll('.effect-text__cont__text-area:nth-of-type(2) span');
    // brText.forEach((el,idx) => {
    //     setTimeout(() => {
    //         el.style = 'opacity: 1';
    //     }, 100 * idx)
    // })
}