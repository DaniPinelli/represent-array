
const MyArray = [{"name":"Jonh Smith", "title":"Newbie Programer","buttontext":"Follow","avatar": "https://reqres.in/img/faces/7-image.jpg"},{"name":"Alesha Doe", "title":"FullStack Programer","buttontext":"Add Friend","avatar": "https://reqres.in/img/faces/8-image.jpg"},{"name":"Jessica Jones", "title":"Copywriter","buttontext":"View Text", "avatar": "https://reqres.in/img/faces/11-image.jpg"}]

let arrayHTML = "";

for (let i = 0; i < MyArray.length; i++) {
    arrayHTML += '<div class="card personDiv">\
        <img src= " ' + MyArray[i]["avatar"] + ' " class="faceImg" alt="avatar">\
        <div class="card-body">\
        <h5 class="personName">' + MyArray[i]["name"] + '</h5>\
        <p class="personTitle">' + MyArray[i]["title"] + '</p>\
        <a href="#" class="btn-primary buttontext" style="padding:0"><span class="textbutton">' + MyArray[i]["buttontext"] + '</span></a>\
        </div>\
        </div>'
        }

    
      
     let arrayDiv = document.getElementById("arrayDiv");
     arrayDiv.innerHTML = arrayHTML;

   
    






 




 