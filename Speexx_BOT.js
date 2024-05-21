document.getElementsByClassName('btn btn-primary action-exercise-button correct')[0].click();

var anwser = []
function Click_on_the_blanks(){
    setTimeout(function(){
        document.getElementsByClassName('btn btn-link solution')[0].click();
        let anwser_el = document.getElementsByClassName('gap form-control');
        for(let test of anwser_el){
            anwser.push(test);
        }
    },1000);

    setTimeout(function(){
        document.getElementsByClassName('btn btn-primary action-exercise-button repeat')[0].click();
    },1000);


    setTimeout(function(){
        var btn = document.getElementsByClassName('input-group-addon');
        var label = document.getElementsByClassName('gap form-control');
        for(let test of btn){
            test.click();
        }
        for(let i=0;i<btn.length;i++){
            while(anwser[i].textContent != label[i].textContent){
                btn[i].click()
            }
        }
    },1000);
    anwser = []
}

function Input_Anwser(){
    setTimeout(function(){
        document.getElementsByClassName('btn btn-link solution')[0].click();
        let anwser_el = document.getElementsByClassName('answer form-control');
        for(let test of anwser_el){
            anwser.push(test);
        }
    },1000)

    setTimeout(function(){
        document.getElementsByClassName('btn btn-primary action-exercise-button repeat')[0].click();
    },1000)


    setTimeout(function(){
        let input_anwser = document.getElementsByClassName('answer form-control');
        for(let i=0;i<input_anwser.length;i++){
            input_anwser[i].value = anwser[i].value
        }
        anwser = [];
    },1000)
    
}
function Mark_the_correct(){
    setTimeout(function(){
        document.getElementsByClassName('btn btn-link solution')[0].click();
        let anwser_el = document.getElementsByClassName('choice');
        for(let test of anwser_el){
            anwser.push(test.checked);
        }
    },1000)

    setTimeout(function(){
        document.getElementsByClassName('btn btn-primary action-exercise-button repeat')[0].click();
    },1000)


    setTimeout(function(){
        let anwser_el = document.getElementsByClassName('choice');
        for(let i=0;i<anwser_el.length;i++){
            anwser_el[i].checked = anwser[i]
        }
        anwser = [];
    },1000)
    
}
function opposite_of_each(){
    setTimeout(function(){
        document.getElementsByClassName('btn btn-link solution')[0].click();
        let anwser_el = document.getElementsByClassName('scrambled-cell ui-state-default ui-draggable ui-draggable-handle ui-droppable');
        for(let test of anwser_el){
            anwser.push(test.textContent);
        }
    },1000)

    setTimeout(function(){
        document.getElementsByClassName('btn btn-primary action-exercise-button repeat')[0].click();
    },1000)


    setTimeout(function(){
        let anwser_el = document.getElementsByClassName('scrambled-cell ui-state-default ui-draggable ui-draggable-handle ui-droppable');
        let drag = false;
        document.addEventListener(
            'mousedown', () => drag = false);
        
        document.addEventListener(
            'mousemove', () => drag = true);
        
        document.addEventListener(
        'mouseup', () => console.log(
            drag ? 'drag' : 'click'));
            
        for(let i=0;i<anwser_el.length;i++){
            let test =  anwser_el[i];
            for(let sim of anwser){
                if(sim.textContent == anwser[i]){
                    anwser_el[i] = sim
                    sim = test
                }
            }
        }
        anwser = []
    },1000)
}
opposite_of_each();
