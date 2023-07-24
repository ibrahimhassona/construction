"use strict";
// Home Page 
// Links 

let links = document.querySelectorAll('.links li');
links.forEach(function(e){
   
    e.addEventListener('click',function(){
        for(let i = 0 ; i< links.length ; i++){
            links[i].classList.remove('active-link')
        }
        e.classList.add('active-link')
    })
})



// Landing Slider 
let rightBtn = document.querySelectorAll('.arrows li')[0]
let lefttBtn = document.querySelectorAll('.arrows li')[1]
let items_cir = document.querySelectorAll('.landing-c li')
let sliderStore =[

     {
        fP :'A LEADING COMPANY IN ITS BUSINESS',
        head : `WE BAILD <span>YOUR</span> DREAMS`,
        tP:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ullam qui accusamus.\n                 Nesciunt ea ...\n `,
      
    },
    {
        fP :'PROFESSIONAL CONSTRUCTION COMPANY',
        head : `WE IMPROVE <span>YOUR</span> BUSINESS`,
        tP:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ullam qui accusamus.\n                 Nesciunt ea ...\n `,
        
    },
    {
        fP :'WE DIFFER FROM EVERYONE',
        head : `WE BAILD <span>YOUR</span> DREAMS`,
        tP:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ullam qui accusamus.\n                 Nesciunt ea ...\n `,
       
    },
    {
        fP :'WE OFFER OUR BEST',
        head : `WE IMPROVE <span>YOUR</span> BUSINESS`,
        tP:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa ullam qui accusamus.\n                 Nesciunt ea ...\n `,
       
    }
]
let fp = document.querySelector('.changed-content .fp')
let lp = document.querySelector('.changed-content .lp')
let h2 = document.querySelector('.changed-content h2')
function changeConent(){
    for(let cir = 0 ;cir < sliderStore.length ; cir++){
        items_cir[cir].classList.remove('active-c')
    }
    items_cir[counter].classList.add('active-c')
    fp.innerHTML = sliderStore[counter].fP
    lp.innerHTML = sliderStore[counter].tP
    h2.innerHTML = sliderStore[counter].head
}
let counter = 0;
lefttBtn.addEventListener('click',function(){
// change content 

    
    if(counter == sliderStore.length-1){
        counter = -1;
    }

    counter++
    // console.log(counter)
    changeConent()
    

})
rightBtn.addEventListener('click',function(){
    
    // change content 

    if(counter === 0){
        
        counter = sliderStore.length;
    }
    counter--
    changeConent()
})
// change content dainameclly
setInterval(() => {
    if(counter == sliderStore.length-1){
        counter = -1;
    }
   
    counter++
    changeConent()

}, 3000);


// Scrolling & who we  
let who_W_imge = document.querySelector('.who-we .container .image')
let section_whoWe = document.querySelector('.who-we');
let correctLable = document.querySelectorAll('.fa-check')
window.onscroll = function(){

        if(window.scrollY >= section_whoWe.offsetTop -300 && window.innerWidth > 800){
            who_W_imge.classList.add('movingLeft')
            who_W_imge.style.right ='0%'
            setTimeout(()=>{
                correctLable.forEach((e)=>{
                    e.style.color='#4CAF50' 
                    e.style.borderColor='#4CAF50' 
                })
            },500)
        }else{
            who_W_imge.classList.remove('movingLeft')
            who_W_imge.style.right ='-40%'
            setTimeout(()=>{
                correctLable.forEach((e)=>{
                    e.style.color='#ffbe00' 
                    e.style.borderColor='#ffbe00' 
                })
            },500)

        }   
        window.innerWidth < 800 ? who_W_imge.style.position='unset':who_W_imge.style.position='absolute'

// Up btn 

let upBtn = document.querySelector('.footer .container > a i');
        if(window.scrollY > 700){
            upBtn.style.opacity='1'
            upBtn.style.zIndex='20'
        }else{
            upBtn.style.opacity='0'
            upBtn.style.zIndex='-3'
        }

// Fixed Nav 
let navBar = document.querySelector('.main-nav') ;
    if(window.scrollY > 300){
        navBar.classList.add('fixed-nav')
    }else{
        navBar.classList.remove('fixed-nav')
    }
}


// Category
let gallery = document.querySelector('.gallery')
let boxs = document.querySelectorAll('.gallery .box')
let fe_list = document.querySelectorAll('.features-list li')
let isClicked = false;

fe_list.forEach(function(li){
    isClicked = true
    li.addEventListener('click',removeActive);
    li.addEventListener('click',fillteration);

})


// remove active class from lis
function removeActive(){
    fe_list.forEach((li)=>{
          li.classList.remove('active-class');
          this.classList.add('active-class');
        });
}

// Fillteration the Items 
function fillteration(){
    boxs.forEach(box=>{
        box.style.transform='scale(0)';
        box.style.display='none';
    });
    let data = document.querySelectorAll('.'+this.dataset.fillter);
    data.forEach(d=>{
        d.style.display='block';
        setTimeout(() => {
            d.style.transform='scale(1)';
        }, 200);
    })

}

// Show More Btn 
const sMBtn = document.querySelector('.see-more');
const loadingLable = document.querySelector('.loading-lable')


    if(isClicked){
        for(let i=9 ; i<boxs.length;i++){
            boxs[i].style.display = 'none'
        }
    }


sMBtn.addEventListener('click', loadMore)

function loadMore(){
    this.style.transform = 'scale(0)'
    loadingLable.style.display = 'block'
    setTimeout(() => {
        loadingLable.style.display = 'none';
        for(let i=0 ; i<boxs.length;i++){
            boxs[i].style.display = 'block'
        }
    }, 2000);
}

// News Btn Read More
let readMore = document.querySelectorAll('.read-more'); 
let monitor = document.querySelector('.monitor-screen')
let container = document.querySelector('.news .container');
readMore.forEach(function(r){
    r.addEventListener('click',function(){
        let p = r.previousElementSibling.cloneNode(true);
        let h = r.previousElementSibling.previousElementSibling.cloneNode(true);
        let d = r.nextElementSibling.cloneNode(true);
        let img = r.parentElement.previousElementSibling.cloneNode(true);
        let close = document.createElement('i');
        close.classList.add("far","fa-window-close","close")
        // Create the monitor screen 
        monitor.appendChild(img)
        monitor.appendChild(h)
        monitor.appendChild(p)
        monitor.appendChild(d)
        monitor.appendChild(close)
        monitor.classList.add('show')

        close.addEventListener('click',function(){
            monitor.classList.remove('show')
            setTimeout(() => {
                monitor.innerHTML =" "
            }, 100);
        })

    })
     
})

// Claints 
let claintSaid = document.querySelectorAll('.clients .box')
let claintImg = document.querySelectorAll('.clients .box img')
let claintP = document.querySelectorAll('.clients .box p')
let claintLis = document.querySelectorAll('.clients .circles-slider li')

function removeClasses(){
    for(let i = 0 ; i < claintSaid.length ; i++){
        claintImg[i].classList.remove('img-change-position');
        claintP[i].classList.remove('p-change-position');
        claintLis[i].classList.remove('active-c');
    }
}
let counter2 = 0 ;

setInterval(() => {
    counter2++
    removeClasses()

    if(counter2 >= claintImg.length){
        counter2=0
    }
    claintImg[counter2].classList.add('img-change-position');
    claintP[counter2].classList.add('p-change-position');
    claintLis[counter2].classList.add('active-c');
}, 4000);
   
// Change tap of companies
let rightCompBtn = document.querySelector('.companies  .fa-angle-right');
let leftCompBtn = document.querySelector('.companies  .fa-angle-left');
let companiesPhotos = document.querySelectorAll('.companies .tape img')
function removeClassesCompanies(){
    for(let i=0 ; i < companiesPhotos.length ; i++){
    companiesPhotos[i].classList.remove('active-companeis')
    }
}
let counter3 = 0;
setInterval(()=>{  // auto
    counter3++
    removeClassesCompanies()
    if(counter3 >= companiesPhotos.length){
        counter3=0
    }
    companiesPhotos[counter3].classList.add('active-companeis');

},2000)

rightCompBtn.addEventListener('click',function(){
     // right btn
        counter3++
        removeClassesCompanies()
        if(counter3 >= companiesPhotos.length){
            counter3=0
        }
        companiesPhotos[counter3].classList.add('active-companeis');
})
leftCompBtn.addEventListener('click',function(){
    // left btn
    if(counter3 <= 0){
        counter3=companiesPhotos.length
    }   
       counter3--
       removeClassesCompanies()
       
       companiesPhotos[counter3].classList.add('active-companeis');
})

// Footer Date 
let yearUpdate = document.querySelector('.year');
yearUpdate.textContent =new Date().getFullYear()

// when the inner width of the window bigger than the small screen 
// give the links .hidden class then 
//  when we clicked on list minue show it from the right side via given it other class
let linksParent = document.querySelector('.links')
let menuIcon = document.querySelector('.menu');

// if(window.innerWidth <= 767){
//     linksParent.classList.add('hidden')
// }else{
//     linksParent.classList.remove('hidden')
// }

menuIcon.addEventListener('click',function(){
    if(linksParent.classList.contains('hidden')){
        linksParent.classList.toggle('show-nav')
        menuIcon.classList.toggle('fa-bars')
        menuIcon.classList.toggle('fa-times')
    }
})


// design the loader shape with css & animation then make it show when the window loading 
let loaderParent = document.createElement('div');
let loader = document.createElement('div');
loaderParent.className='loaderParent';
loader.className='loader';
loader.innerHTML='Loading...'
loaderParent.appendChild(loader)
document.body.appendChild(loaderParent)
setTimeout(()=>{
        document.body.removeChild(loaderParent)
},6000)

