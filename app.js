
const MyArray = [{"name":"Jonh Smith", "title":"Newbie Programer","buttontext":"Follow","avatar": "https://reqres.in/img/faces/7-image.jpg"},{"name":"Alesha Doe", "title":"FullStack Programer","buttontext":"Add Friend","avatar": "https://reqres.in/img/faces/8-image.jpg"},{"name":"Jessica Jones", "title":"Copywriter","buttontext":"View Text", "avatar": "https://reqres.in/img/faces/11-image.jpg"}]

const MyDeformedArray = [{"firstName":"Juanse Laverde", "title":"Singer","buttontext":"Sing","icon": "https://reqres.in/img/faces/7-image.jpg"},{"firstName":"Alesha Doe", "title":"Newbie","buttontext":"Add Oil","icon": "https://reqres.in/img/faces/8-image.jpg"},{"firstName":"Jonas Uala", "title":"Lier","buttontext":"View Text", "icon": "https://reqres.in/img/faces/11-image.jpg"}]

const resultArray = MyDeformedArray.map(item => {
    return{
      ...item,
      name: `${item.firstName}`,
      avatar: `${item.icon}`
    }
  })

const MyStudents = MyArray.concat(resultArray);
let arrayHTML = "";

let printHtml = (array) => {

  for (let i = 0; i < array.length; i++) {
    arrayHTML += '<div class="card personDiv">\
        <img src= " ' + array[i]["avatar"] + ' " class="faceImg" alt="avatar">\
        <div class="card-body">\
        <h5 class="personName">' + array[i]["name"] + '</h5>\
        <p class="personTitle">' + array[i]["title"] + '</p>\
        <a href="#" class="btn-primary buttontext" style="padding:0"><span class="textbutton">' + array[i]["buttontext"] + '</span></a>\
        </div>\
        </div>'
        }
}

printHtml(MyStudents);

   let labelSearch = document.getElementById("labelSearch");
   let buttonSearch = document.getElementById("buttonSearch");

  
  labelSearch.onkeyup=() => {

  let searched = labelSearch.value;
  let result = MyStudents.filter(student => student.name.toLowerCase().includes(searched.toLowerCase()));
   
  printHtml(result);
}



let arrayDiv = document.getElementById("arrayDiv");
arrayDiv.innerHTML = arrayHTML;



 

 
    


  



 




 