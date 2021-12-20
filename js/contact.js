window.addEventListener('DOMContentLoaded', () => {
    var checkBox = document.querySelectorAll('.checkbox-area > div');

    checkBox.forEach((el) => {
        el.addEventListener('click', check);
    })

    function check(){
        this.removeEventListener('click', check);
        if(this.children[1].checked == false){
            this.classList.add('active');
        }else{
            this.classList.remove('active');
        }

        console.log(this.children[1].checked);

        setTimeout(() => {
            checkBox.forEach((el) => {
                el.addEventListener('click', check);
            })
        });
    }

    var budget = document.querySelectorAll('.budget__list');
    var onload = document.querySelectorAll('.onload__list');
    var inputArea = document.querySelector('.input-area');
    var onInputArea = document.querySelector('.onload__input__area');

    budget.forEach((el) => {
        el.addEventListener('click', selectList);
    })

    onload.forEach((el) => {
        el.addEventListener('click', selectList2);
    })

    inputArea.addEventListener('click', trigger)
    onInputArea.addEventListener('click', trigger2)

    function trigger(){
        if(this.classList.contains('active')){
            forTrans(budget, '0', '1')
            this.classList.remove('active');
        }else{
            forTrans(budget, '102', '0')
            this.classList.add('active');
        }
    }

    function trigger2(){
        if(this.classList.contains('active')){
            forTrans(onload, '0', '1')
            this.classList.remove('active');
        }else{
            forTrans(onload, '102', '0')
            this.classList.add('active');
        }
    }

    function selectList(){
        document.querySelector('#budget').value = this.innerText;

        inputArea.classList.add('active');

        forTrans(budget, 102, 0);
    }

    function forTrans(element, operator, value){
        element.forEach((el, idx) => {
            setTimeout(() => {
                el.style = `transform: translateX(${operator}%); opacity: ${value};`;
            }, 50*idx);
        });
    }

    function selectList2(){
        document.querySelector('#onload').value = this.innerText;
        
        onInputArea.classList.add('active');

        forTrans(onload, 102, 0);
    }
})