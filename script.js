let cnt = 0; //클릭횟수를 저장하는 변수

document.querySelector('#btn').addEventListener('click', function(){
     cnt++;

     if(cnt % 2 == 1) {
         document.querySelector('#btn').value='light mode';
         document.body.style.backgroundColor='black';
         document.body.style.color='white';
     } else {
         document.querySelector('#btn').value='dark mode';
         document.body.style.backgroundColor='white';
         document.body.style.color='black';
     }

 });