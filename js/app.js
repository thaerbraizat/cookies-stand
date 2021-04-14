'use strict';
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let arrObject = [];
let workingHour = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

function Seals(name1, min, max, avg, ) {
    this.name1 = name1;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.sumNumber = 0;
    this.genN = [];
    this.simulateNumber = [];
    arrObject.push(this);

}
console.log(arrObject);



let coun1 = new Seals("Seatle", 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
let coun2 = new Seals("Tokyo", 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
let coun3 = new Seals("Dubai", 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
let coun4 = new Seals("Paris", 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);
let coun5 = new Seals("Lima", 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']);


Seals.prototype.genRandomNumber = function () {
    for (let i = 0; i < workingHour.length; i++) {
        this.genN[i] = randomIntFromInterval(this.min, this.max);

    }
};
Seals.prototype.simuLate = function () {
    for (let i = 0; i < workingHour.length; i++) {
        this.simulateNumber[i] = Math.floor(this.genN[i] * this.avg);
    }
}
Seals.prototype.totall = function () {
    for (let i = 0; i < this.simulateNumber.length; i++) {
        this.sumNumber = this.sumNumber + this.simulateNumber[i];
    }

};
Seals.prototype.render = function () {
    let tableRow = document.createElement('tr');
    let table = document.getElementById('dom');
    table.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.name1;
    for (let i = 0; i < workingHour.length; i++) {
        let tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.simulateNumber[i];
    }
    tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.sumNumber;
}

function tableHeader() {
    let mainHtm = document.getElementById('mainn');
    let first = document.createElement('h2');
    mainHtm.appendChild(first);
    first.textContent = 'sales';
    let table = document.createElement('table');
    table.setAttribute('id', 'dom');
    mainHtm.appendChild(table);
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let tabh = document.createElement('th');
    headerRow.appendChild(tabh);
    for (let i = 0; i < workingHour.length; i++) {
        let tabh = document.createElement('th');
        headerRow.appendChild(tabh);
        tabh.textContent = workingHour[i];
    }
    tabh = document.createElement('th');
    headerRow.appendChild(tabh);
    tabh.textContent = "Daily Location Total";
}


function tableFooter() {
    let tableRow = document.createElement('tr');
    let table = document.getElementById('dom');
    table.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = 'totall';
    for (let i = 0; i < workingHour.length; i++) {
        let totall=0;
        for (let j = 0; j < arrObject.length; j++) {
            totall+= arrObject[j].simulateNumber[i];
        }
        let tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent = totall;
    }
    let totall=0;
    for (let i = 0; i < arrObject.length; i++) {
        totall+= arrObject[i].sumNumber;
    }
    tableData = document.createElement('td');
    tableRow.setAttribute('id', 'last');
    tableRow.appendChild(tableData);
    tableData.textContent = totall;
    
}

tableHeader();
for (let i = 0; i < arrObject.length; i++) {
    arrObject[i].genRandomNumber();
    arrObject[i].simuLate();
    arrObject[i].totall();
    arrObject[i].render();
};
tableFooter();

const form =document.getElementById('selasform');
let table = document.getElementById('dom');
let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    form.addEventListener('submit',handleTable);
    function handleTable(event) {
        event.preventDefault();
        let name1 = event.target.nameStore.value;
        // console.log(name1);
        let min = parseInt(event.target.minNumber.value);
        console.log(min);
        let max= parseInt(event.target.maxNumber.value);
        console.log(max);
        let cookies= parseFloat(event.target.avgNumber.value);
          console.log(cookies);
          let newSales = new Seals(name1,min,max,cookies);



     
       newSales.genRandomNumber();
       newSales.simuLate();
       newSales.totall();
       newSales.render();
       deleteRow();
       tableFooter();
    }

    function deleteRow() {   
    var row = document.getElementById("last");
    row.parentNode.removeChild(row);
}
    


// const seattle ={
//     name1:"seatle",
//     min:23,
//     max:65,
//     avg:6.3,
//     workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     sumNumber:0 ,
//     genN:[],
//     simulateNumber:[],


//     genRandomNumber:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//             this.genN[i]=randomIntFromInterval(23,65);

//         }
//     },
//     simuLate:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//           this.simulateNumber[i] =Math.floor(this.genN[i] *6.3);   
//     }
// },
//     totall:function(){
//         for(let i=0 ;i<this.simulateNumber.length;i++ ){
//               this.sumNumber=this.sumNumber +this.simulateNumber[i];
//         }2

//     } ,
//     render:function() {
//         let first = document.getElementById(mainn);
//         let h2 =document.createElement('h2');
//         mainn.appendChild(h2);
//         h2.textContent=this.name1;

//         let unorderList = document.createElement('ul');
//         mainn.appendChild(unorderList);
//         let li = null;
//         for(let i = 0 ; i < this.workHours.length ; i++){
//             li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
//         }
//         li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent ="Total :  "+ this.sumNumber +" cookies";
//     }
// }



// seattle.genRandomNumber();
// // let a=[];
// // a = seattle.genN;
// // console.log(a);
// seattle.simuLate();
// // let b =seattle.simulateNUmber;
// // console.log(b);
// // let c =seattle.totall();
// // console.log(c);
// seattle.totall();
// seattle.render();

// let sum1=0;
// const Tokyo ={
//     min:3,
//     max:24,
//     AVG:1.2,
//     workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     genN:[],
//     simulateNumber:[],


//     genRandomNumber:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//             this.genN[i]=randomIntFromInterval(3,24);

//         }
//     },
//     simuLate:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//           this.simulateNumber[i] =Math.floor(this.genN[i] *1.2);   
//     }
// },
//     totall:function(){
//         for(let i=0 ;i<this.simulateNumber.length;i++ ){
//               sum1=sum1 +this.simulateNumber[i];
//         }return (sum1);

//     } ,
//     render:function() {
//         let first = document.getElementById(mainn);
//         let h2 =document.createElement('h2');
//         mainn.appendChild(h2);
//         h2.textContent="Tokyo";

//         let unorderList = document.createElement('ul');
//         mainn.appendChild(unorderList);
//         let li = null;
//         for(let i = 0 ; i < this.workHours.length ; i++){
//             li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
//         }
//         li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent ="Total :  "+sum1 +" cookies";
//     }
// }



// Tokyo.genRandomNumber();
// // let a=[];
// // a = Tokyo.genN;
// // console.log(a);
// Tokyo.simuLate();
// // let b =Tokyo.simulateNUmber;
// // console.log(b);
// // let c =Tokyo.totall();
// // console.log(c);
// Tokyo.totall();
// Tokyo.render();

// let sum2=0;
// const Dubai ={
//     min:11,
//     max:38,
//     AVG:3.7,
//     workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     genN:[],
//     simulateNumber:[],


//     genRandomNumber:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//             this.genN[i]=randomIntFromInterval(11,38);

//         }
//     },
//     simuLate:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//           this.simulateNumber[i] =Math.floor(this.genN[i] *3.7);   
//     }
// },
//     totall:function(){
//         for(let i=0 ;i<this.simulateNumber.length;i++ ){
//               sum2=sum2 +this.simulateNumber[i];
//         }return (sum2);

//     } ,
//     render:function() {
//         let first = document.getElementById(mainn);
//         let h2 =document.createElement('h2');
//         mainn.appendChild(h2);
//         h2.textContent="Dubai";

//         let unorderList = document.createElement('ul');
//         mainn.appendChild(unorderList);
//         let li = null;
//         for(let i = 0 ; i < this.workHours.length ; i++){
//             li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
//         }
//         li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent ="Total :  "+sum2 +" cookies";
//     }
// }



// Dubai.genRandomNumber();
// // let a=[];
// // a = seattle.genN;
// // console.log(a);
// Dubai.simuLate();
// // let b =seattle.simulateNUmber;
// // console.log(b);
// // let c =seattle.totall();
// // console.log(c);
// Dubai.totall();
// Dubai.render();


// let sum3=0;
// const Paris ={
//     min:20,
//     max:38,
//     AVG:2.3,
//     workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     genN:[],
//     simulateNumber:[],


//     genRandomNumber:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//             this.genN[i]=randomIntFromInterval(11,38);

//         }
//     },
//     simuLate:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//           this.simulateNumber[i] =Math.floor(this.genN[i] *3.7);   
//     }
// },
//     totall:function(){
//         for(let i=0 ;i<this.simulateNumber.length;i++ ){
//               sum3=sum3 +this.simulateNumber[i];
//         }return (sum3);

//     } ,
//     render:function() {
//         let first = document.getElementById(mainn);
//         let h2 =document.createElement('h2');
//         mainn.appendChild(h2);
//         h2.textContent="Paris";

//         let unorderList = document.createElement('ul');
//         mainn.appendChild(unorderList);
//         let li = null;
//         for(let i = 0 ; i < this.workHours.length ; i++){
//             li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
//         }
//         li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent ="Total :  "+sum3 +" cookies";
//     }
// }


// Paris.genRandomNumber();
// // let a=[];
// // a = seattle.genN;
// // console.log(a);
// Paris.simuLate();
// // let b =seattle.simulateNUmber;
// // console.log(b);
// // let c =seattle.totall();
// // console.log(c);
// Paris.totall();
// Paris.render();
// let sum4=0;
// const Lima ={
//     min:2,
//     max:16,
//     AVG:4.6,
//     workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     genN:[],
//     simulateNumber:[],


//     genRandomNumber:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//             this.genN[i]=randomIntFromInterval(11,38);

//         }
//     },
//     simuLate:function (){
//         for(let i=0 ;i<this.workHours.length;i++ ){
//           this.simulateNumber[i] =Math.floor(this.genN[i] *3.7);   
//     }
// },
//     totall:function(){
//         for(let i=0 ;i<this.simulateNumber.length;i++ ){
//               sum4=sum4 +this.simulateNumber[i];
//         }return (sum4);

//     } ,
//     render:function() {
//         let first = document.getElementById(mainn);
//         let h2 =document.createElement('h2');
//         mainn.appendChild(h2);
//         h2.textContent="Lima";

//         let unorderList = document.createElement('ul');
//         mainn.appendChild(unorderList);
//         let li = null;
//         for(let i = 0 ; i < this.workHours.length ; i++){
//             li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent = this.workHours[i] + ": "+this.simulateNumber[i] +" cookies";
//         }
//         li = document.createElement('li');
//             unorderList.appendChild(li);
//             li.textContent ="Total :  "+sum4 +" cookies";
//     }
// }


// Lima.genRandomNumber();
// // let a=[];
// // a = seattle.genN;
// // console.log(a);
// Lima.simuLate();
// // let b =seattle.simulateNUmber;
// // console.log(b);
// // let c =seattle.totall();
// // console.log(c);
// Lima.totall();
// Lima.render();
