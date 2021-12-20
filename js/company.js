window.addEventListener('DOMContentLoaded', () => {
    let imgOption = {
        rootMargin: '0px',
        threshold: buildTreshold()
    }

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

    const target = document.querySelectorAll('.about-us span');
    const target2 = document.querySelector('.video-ratio');
    const target2a = document.querySelectorAll('.video-ratio');
    const target3 = document.querySelector('.column-link img');

    let companyOb = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0){
                entry.target.style = "transform: translateY(0); opacity: 1;";
            }
        })
    },imgOption)

    target.forEach((el) => {
        companyOb.observe(el);
    })

    try{
        companyOb.observe(target2);
    }catch{
        target2a.forEach((el) => {
            companyOb.observe(el);
        })
    }

    try{
        companyOb.observe(target3);
    }catch{}
})