var imgList = Array.from(document.getElementsByClassName("img-item"));
var ligthboxContainer=document.querySelector('.lightbox-container');
var lightboxItem=document.querySelector('.lightbox-item');
var nextButton =document.getElementById('next');
var prevButton=document.getElementById('prev');
var closeButton = document.getElementById('close');
var currentIndex=0;
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click', function(e)
    {
        currentIndex=imgList.indexOf(e.target)
        var imgsrc=e.target.getAttribute('src');
        ligthboxContainer.classList.replace('d-none' , 'd-flex');
        lightboxItem.style.backgroundImage=`url(${imgsrc})`;
    })

}
function nextSlid()
{
    currentIndex++;
    if(currentIndex==imgList.length)
    {
        currentIndex=0;
    }
    var imgsrc=imgList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage=`url(${imgsrc})`;


}

function prevSlid()
{
    currentIndex--;
    if(currentIndex==-1)
    {
        currentIndex=imgList.length-1
    }
    var imgsrc=imgList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage=`url(${imgsrc})`;


}
function closeSlid()
{
    ligthboxContainer.classList.replace('d-flex' , 'd-none');

}
document.addEventListener('keydown', function(e){
    if(e.key=='ArrowRight')
    {
        slid(1)
    }
    else if (e.key=='ArrowLeft') {
        slid(-1)
        
    }
    else if (e.key=='Escape')
    {
        closeSlid()
    }
})
nextButton.addEventListener('click', nextSlid);
prevButton.addEventListener('click' ,prevSlid );
closeButton.addEventListener('click' , closeSlid);
