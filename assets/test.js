/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name :     
Date :  
Contact information : 

What does this script do ? 
...

*/

// Your scripting goes here...
/*let tg = []
let yo = table1.querySelectorAll('td');
let ya = table1.querySelectorAll('th');
for (let i = 0; i < 20; i++) {
  if (ya[i]=== Number) {
    tg.push(ya[i]);
  }
  else {
    console.log('ça marche pas enculé')
  }
}
console.log(tg)*/

/*let table = document.querySelectorAll('tbody');
console.log(table);
let table1 = table[0];
console.log(table1);*/


//création de la div qui contiendra le graph et l'insert dans le HTML:
let divGraphique1 = document.createElement("div");
let x = document.getElementById("mw-content-text");
let table1 = document.getElementById("table1");
x.insertBefore(divGraphique1,table1);
divGraphique1.setAttribute("id","divTable1");

//récupération des données et création d'un tableau:
//source des données de table1m
    let tbody = table1.getElementsByTagName("tbody");
    let tr = tbody[0].getElementsByTagName("tr");
//tableau de données:
    let donnees=[];
    let fonctionTableau=()=>{
        for (i=1;i<tr.length;i++){
            let pays=[];
            let th = tr[i].getElementsByTagName("th");
            let div = th[0].getElementsByTagName("div");
            let number = div[0].innerHTML;
            pays.push(number);
            let td = tr[i].getElementsByTagName("td");
                for (y=0;y<td.length;y++){
                    let contenu = td[y].innerHTML;
                    pays.push(contenu);
                }
            donnees.push(pays);
        }
    }
    fonctionTableau();
    console.log(donnees[5]);


let emp = document.getElementById('table1');
let graph1 = document.createElement("div");
graph1.id="dimple1";
table1.parentNode.insertBefore(graph1, table1);


var ctx = document.getElementById("dimple1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});