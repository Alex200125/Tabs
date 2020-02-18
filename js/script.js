window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    let hideTabContent = a => {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

        let showTabContent = b => {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });  

    //timer

    let deadLine = '2020-03-10';

    let getTimeRemaining = endtime => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            for(var key in t) {
                if(String(t[key]).length < 2) {
                    t[key] = "0" + t[key];
                }
            }

            if(t.hours < 0 && t.minutes < 0 && t.seconds < 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else {
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds; 
            }
            
            if(t.total <= 0 || (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0)) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    // console.log(Date.parse(deadLine) - Date.parse(new Date()));

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');

        document.body.style.overflow = 'hidden';
    }); 

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //FORM

    let message = {
        loading: "Загрузка",
        success: "Спасибо, всё сработало",
        filed: "Что-то не так"
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
       event.preventDefault();
       form.appendChild(statusMessage); 

       let request = new XMLHttpRequest();

       request.open('POST', 'server.php'); 
       request.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8');
       
       let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj); 

       request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.filed;
            }
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = "";
        }

    });

    //kontact FORM
    let fm = document.getElementById('form'),
        inp = fm.querySelectorAll('input');

    fm.addEventListener('submit', function(event) {
        event.preventDefault();
        fm.appendChild(statusMessage);

        let req = new XMLHttpRequest();

        req.open('POST', 'server.php');
        req.setRequestHeader('Content-Type', 'application/json', 'charset=utf-8');

        let fData = new FormData(fm);

        let object = {};
        fData.forEach(function(value, key) {
            object[key] = value;
        });

        let json = JSON.stringify(object);

        req.send(json);
        
        req.addEventListener('readystatechange', function() {
            if(req.readyState < 4) {
                statusMessage.innerHTML = message.loading;
                // setInterval(sayTochka, 1000);
                
                
                // function sayTochka() {
                //     statusMessage.innerHTML += ".";  
                // }
                    
                
            } else if(req.readyState == 4 && req.status == 200) {
                statusMessage.innerHTML = message.success;
                
            } else {
                statusMessage.innerHTML = message.filed;
            }
        });
        
        

        for(let j = 0; j < 2; j++) {
            for(let i = 0; i < inp[j].length; i++) {
                inp[i].value = "";
            }
        }
        
    }); 
        

    

    

     
});