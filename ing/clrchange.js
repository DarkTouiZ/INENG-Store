function changeColour1()
        {
            document.getElementById('clr').src='23-looneytoons.jpg';
        }
        
function changeColour2()
        {
            document.getElementById('clr').src='23-burgerkings.jpg';
        }

function changeColour3()
        {
            document.getElementById('clr').src='23-kfc.jpg';
        }

function changeColour4()
        {
            document.getElementById('clr').src='23-minions.jpg';
        }

function changeColour5()
        {
            document.getElementById('clr').src='23-mcdonald.jpg';
        }

 function changeColour6()
        {
            document.getElementById('clr').src='23-starbucks.jpg';
        }


const allFilterItems = document.querySelectorAll('.filter-item');

const allFilterBtns = document.querySelectorAll('.btn-filter');

allFilterBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        showFilterefContent(btn);
    })
});

function showFilterefContent(btn)
{
    allFilterItems.forEach((item)=>{
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none"
        }
    });
}

function resetActiveBtn()
{
    allFilterBtns.forEach((btn)=>{
        btn.classList.remove('active-btn');
    });
}

function scroller() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  function redirectToOtherWebsite1() {
    window.location.href = 'https://ineng-store.vercel.app/';
  }
  function redirectToOtherWebsite2() {
    window.location.href = 'https://ineng-store.vercel.app/cart';
  }
  function redirectToOtherWebsite3() {
    window.location.href = 'https://product-details-ed195.web.app/';
  }