let list= document.querySelector('.list');


const show=()=>{ 
    if(document.body.classList.contains('show')){
        document.body.classList.add('close');
        document.body.classList.remove('show');
    }else{
        document.body.classList.add('show');
        document.body.classList.remove('close');
    }
}

list.onclick=show;


const quotes1= [
    'Relationships end too soon because people stop putting in the same effort to keep you, as they did to win you.',
    'Far too many people are looking for the right person, instead of trying to be the right person.',
    'Everything that irritates us about others can lead us to an understanding of ourselves.',
    'When you don’t talk, there’s a lot of stuff that ends up not getting said.',
    'A great relationship doesn’t happen because of the love you had in the beginning, but how well you continue building love until the end.',
    'A successful relationship requires falling in love multiple times, but always with the same person.',
];
const quotes2=[
    'It doesn’t matter who hurt you, or broke you down. What matters is who made you smile again.',
    'He can’t read your mind. So take a moment to let him know how you really feel.',    
    'A true relationship is two imperfect people refusing to give up on each other.',
    'All relationships go through hell, real ones get through it.',
    'Don’t let someone to change who you are, to become what they need.',
    'No matter how busy a person’s day may be, if they really care, they will always find time for you.'
];
let c1= document.querySelector('.C1');
let c2= document.querySelector('.C2');
let c3= document.querySelector('.C3');


function first()
{
    for(let i=0; i<6; i++){
        function changeQ2(){
            c2.innerHTML=quotes1[i];
        }
        function changeQ3(){
            if(i===5){
                c3.innerHTML=quotes2[i];
                again();
            }else{
              c3.innerHTML=quotes2[i];
            }
            }
        function wait(){
            setTimeout(changeQ3,i*8000);
        }
        setTimeout(wait,4000);
        setTimeout(changeQ2,i*8)
    }
}

function again()
{
    for(let i=0; i<6; i++){
        function changeQ2(){
            c2.innerHTML=quotes1[i];
        }
        function changeQ3(){
            if(i===11){
                c3.innerHTML=quotes2[i];
                first();
            }else{
              c3.innerHTML=quotes2[i];
            }
        }
        function wait(){
            setTimeout(changeQ3,i*8000);
        }
        setTimeout(wait,4000);
        setTimeout(changeQ2,i*8000)
    }
}

first();