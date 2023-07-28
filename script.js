let audioElement=new Audio("voices/1.mp3")
let songIndex=1;
let songItem =Array.from(document.getElementsByClassName("audioItem"));
console.log(songItem);

let song=[
    
    {Filepath: "1.mp3" , coverpath: "flags/bahrain.webp"},
    {Filepath: "2.mp3", coverpath:"flags/saudiaimg.webp"},
    {Filepath: "3.mp3", coverpath:"flags/swizerland.jpg"},
    {Filepath: "4.mp3", coverpath:"flags/afghanistan4.webp"},
    {Filepath: "5.mp3", coverpath:"flags/algeria5.webp"},
    {Filepath: "6.mp3", coverpath:"flags/anguilla6.webp"},
    {Filepath: "7.mp3", coverpath:"flags/antartica7.webp"},
    {Filepath: "8.mp3", coverpath:"flags/canada14.webp"},
    {Filepath: "9.mp3", coverpath:"flags/pakistan.webp"},
    {Filepath: "10.mp3", coverpath:"flags/armenia8.webp"},
    {Filepath: "11.mp3", coverpath:"flags/azerbaijan9.webp"},
    {Filepath: "12.mp3", coverpath:"flags/bangladesh10.webp"},
    {Filepath: "13.mp3", coverpath:"flags/belgium11.webp"},
    {Filepath: "14.mp3", coverpath:"flags/brazel12.webp"},
    {Filepath: "15.mp3", coverpath:"flags/cambodia13.webp"},
    {Filepath: "16.mp3", coverpath:"flags/china15.webp"},
    {Filepath: "17.mp3", coverpath:"flags/colombia16.webp"},
    {Filepath: "18.mp3", coverpath:"flags/germany.webp"},
    {Filepath: "19.mp3", coverpath:"flags/egypt18.webp"},
    {Filepath: "20.mp3", coverpath:"flags/england19.webp"},
    {Filepath: "21.mp3", coverpath:"flags/france20.webp"},
    {Filepath: "22.mp3", coverpath:"flags/honk gong.webp"},
    {Filepath: "23.mp3", coverpath:"flags/india.webp"},
    




];

songItem.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src=song[i].coverpath;
}); 

Array.from(document.getElementsByClassName("audiochange")).forEach(element => {element.addEventListener("click", ()=>
{
    if (songIndex==element.id){
    if (audioElement.paused){
    songIndex-=parseInt(element.id);
    audioElement.src=`voices/${songIndex}.mp3`;
    audioElement.play();
    }
    else{
    audioElement.pause();
    }
}
    else{
    songIndex=parseInt(element.id);
    audioElement.src=`voices/${songIndex}.mp3`;
    audioElement.play();
    }

})

});