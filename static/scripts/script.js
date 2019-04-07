// import { link } from "fs";

function reply_click(clicked_id)
{
    alert(clicked_id);
}

var images = ['/static/arrival.jpg', '/static/deadpool.jpg', '/static/guardianGalaxy.jpg', '/static/hidden.jpg', '/static/interstellar.jpg', '/static/lalaland.jpg', '/static/nocturnalAnimals.jpg', '/static/splittt.jpg', '/static/suicide-squad.jpg', '/static/legend.jpg'];
var imageName = ["Arrival", "Deadpool", "Guardians Of The Galaxy", "Hidden Figures", "Interstellar", "La La Land", "Nocturnal Animals", "Split", "Suicide Squad", "Legend"];
var currentImage = 0;
var links = ['https://www.youtube.com/watch?v=tFMo3UJ4B4g','https://www.youtube.com/watch?v=gtTfd6tISfw', 'https://www.youtube.com/watch?v=d96cjJhvlMA', 'https://www.youtube.com/watch?v=5wfrDhgUMGI', 'https://www.youtube.com/watch?v=2LqzF5WauAw',
'https://www.youtube.com/watch?v=0pdqf4P9MB8', 'https://www.youtube.com/watch?v=-H1Ii1LjyFU', 'https://www.youtube.com/watch?v=84TouqfIsiI', 'https://www.youtube.com/watch?v=CmRih_VtVAs', 'https://www.youtube.com/watch?v=yI3v6KfR9Mw'];

var respnse = [];

function goNext() {

    currentImage++;
    respnse.push(1);
    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }
    alert(respnse);

    document.getElementById("mainImage").src = images[currentImage];
    document.getElementById("title").innerHTML = "<b>"+imageName[currentImage]+"</b>";
}

function dislike_next(){

    currentImage++;
    respnse.push(-1);
    //loop back to the first image
    if(currentImage >= images.length) {
        currentImage = 0;
    }
    alert(respnse);

    document.getElementById("mainImage").src = images[currentImage];
    document.getElementById("title").innerHTML = "<b>"+imageName[currentImage]+"</b>";
}

//function trailer(){
  //  for(var i=0; i<currentImage.length;i++)
    //    window.open(links[i]);
//}

function trailer(){
    window.open(links[currentImage]);
}

/*$.ajax({
	url:/app/ai.py
	method: "POST"
	data:{title: title}
});*/