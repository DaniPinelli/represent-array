
const MyArray = [{"name":"Jonh Smith", "title":"Newbie Programer","buttontext":"Follow","avatar": "https://reqres.in/img/faces/7-image.jpg"},{"name":"Alesha Doe", "title":"FullStack Programer","buttontext":"Add Friend","avatar": "https://reqres.in/img/faces/8-image.jpg"},{"name":"Jessica Jones", "title":"Copywriter","buttontext":"View Text", "avatar": "https://reqres.in/img/faces/11-image.jpg"}]

const MyDeformedArray = [{"firstName":"Juanse Laverde", "title":"Singer","buttontext":"Sing","icon": "https://reqres.in/img/faces/7-image.jpg"},{"firstName":"Alesha Doe", "title":"Newbie","buttontext":"Add Oil","icon": "https://reqres.in/img/faces/8-image.jpg"},{"firstName":"Jonas Uala", "title":"Lier","buttontext":"View Text", "icon": "https://reqres.in/img/faces/11-image.jpg"}]

let thirdArray = [];

function Person(name, title, buttontext, avatar) {
    this.name = name;
    this.title = title;
    this.buttontext = buttontext;
    this.avatar = avatar;
  }

   

    for(let i = 0; i < MyDeformedArray.length; i++){

      let person = new Person(MyDeformedArray[i]["firstName"],MyDeformedArray[i]["title"],MyDeformedArray[i]["buttontext"],MyDeformedArray[i]["icon"])  
      
      thirdArray.push(person);

    }

 //console.log(thirdArray);

// for(let i = 0; i < MyDeformedArray.length; i++){
//     name = MyDeformedArray[i]["firstName"];
//     title = MyDeformedArray[i]["title"];
//     buttontext = MyDeformedArray[i]["buttontext"];
//     avatar = MyDeformedArray[i]["icon"];
// }

const MyStudents = MyArray.concat(thirdArray);
let arrayHTML = "";

for (let i = 0; i < MyStudents.length; i++) {
    arrayHTML += '<div class="card personDiv">\
        <img src= " ' + MyStudents[i]["avatar"] + ' " class="faceImg" alt="avatar">\
        <div class="card-body">\
        <h5 class="personName">' + MyStudents[i]["name"] + '</h5>\
        <p class="personTitle">' + MyStudents[i]["title"] + '</p>\
        <a href="#" class="btn-primary buttontext" style="padding:0"><span class="textbutton">' + MyStudents[i]["buttontext"] + '</span></a>\
        </div>\
        </div>'
        }

    let arrayDiv = document.getElementById("arrayDiv");
     arrayDiv.innerHTML = arrayHTML;

   
    






 




 