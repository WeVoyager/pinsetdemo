window.addEventListener('DOMContentLoaded', () => {
    let option = {
        rootMargin: '0px',
        threshold: buildThreshold()
    }

    function buildThreshold() {
        let thresholds = [];
        let numSteps = 10;

        for (let i = 0; i < numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    const target = document.querySelectorAll('.service-animation span');
    const imgTarget = document.querySelectorAll('.service-animation-img');
    const objTarget = document.querySelectorAll('.service-animation-obj');
    const listTarget = document.querySelector('.another-promotion__list-area');

    let txtAnimation = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0){
                entry.target.style = 'transform: translateY(0); opacity: 1;'
            }
        })
    }, option)

    let imgAnimation = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0){
                entry.target.classList.add('active')
            }
        })
    }, option)

    target.forEach((el) => {
        txtAnimation.observe(el);
    })

    imgTarget.forEach((el) => {
        imgAnimation.observe(el);
    })

    objTarget.forEach((el) => {
        txtAnimation.observe(el);
    })

    txtAnimation.observe(listTarget);
})