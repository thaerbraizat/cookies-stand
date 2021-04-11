'use strict';
let sum=0;
const seattle ={
    min:23,
    max:65,
    AVG:6.3,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNUmber:[],


    genRandomnumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(23,65);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNUmber[i] =Math.floor(this.genN[i] *6.3);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNUmber.length;i++ ){
              sum=sum +this.simulateNUmber[i];
        }return (sum);

    } ,
    createSEATTle:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="seattle";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNUmber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum +" cookies";
    }
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
seattle.genRandomnumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
seattle.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
seattle.totall();
seattle.createSEATTle();
let sum1=0;
const Tokyo ={
    min:3,
    max:24,
    AVG:1.2,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNUmber:[],


    genRandomnumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(3,24);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNUmber[i] =Math.floor(this.genN[i] *1.2);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNUmber.length;i++ ){
              sum1=sum1 +this.simulateNUmber[i];
        }return (sum1);

    } ,
    createSEATTle:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Tokyo";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNUmber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum1 +" cookies";
    }
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Tokyo.genRandomnumber();
// let a=[];
// a = Tokyo.genN;
// console.log(a);
Tokyo.simuLate();
// let b =Tokyo.simulateNUmber;
// console.log(b);
// let c =Tokyo.totall();
// console.log(c);
Tokyo.totall();
Tokyo.createSEATTle();

let sum2=0;
const Dubai ={
    min:11,
    max:38,
    AVG:3.7,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNUmber:[],


    genRandomnumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(11,38);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNUmber[i] =Math.floor(this.genN[i] *3.7);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNUmber.length;i++ ){
              sum2=sum2 +this.simulateNUmber[i];
        }return (sum2);

    } ,
    createSEATTle:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Dubai";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNUmber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum2 +" cookies";
    }
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Dubai.genRandomnumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
Dubai.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
Dubai.totall();
Dubai.createSEATTle();

let sum3=0;
const Paris ={
    min:20,
    max:38,
    AVG:2.3,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNUmber:[],


    genRandomnumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(11,38);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNUmber[i] =Math.floor(this.genN[i] *3.7);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNUmber.length;i++ ){
              sum3=sum3 +this.simulateNUmber[i];
        }return (sum3);

    } ,
    createSEATTle:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Paris";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNUmber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum3 +" cookies";
    }
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Paris.genRandomnumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
Paris.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
Paris.totall();
Paris.createSEATTle();
let sum4=0;
const Lima ={
    min:2,
    max:16,
    AVG:4.6,
    workHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    genN:[],
    simulateNUmber:[],


    genRandomnumber:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
            this.genN[i]=randomIntFromInterval(11,38);

        }
    },
    simuLate:function (){
        for(let i=0 ;i<this.workHours.length;i++ ){
          this.simulateNUmber[i] =Math.floor(this.genN[i] *3.7);   
    }
},
    totall:function(){
        for(let i=0 ;i<this.simulateNUmber.length;i++ ){
              sum4=sum4 +this.simulateNUmber[i];
        }return (sum4);

    } ,
    createSEATTle:function() {
        let first = document.getElementById(mainn);
        let h2 =document.createElement('h2');
        mainn.appendChild(h2);
        h2.textContent="Lima";

        let unorderList = document.createElement('ul');
        mainn.appendChild(unorderList);
        let li = null;
        for(let i = 0 ; i < this.workHours.length ; i++){
            li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent = this.workHours[i] + ": "+this.simulateNUmber[i] +" cookies";
        }
        li = document.createElement('li');
            unorderList.appendChild(li);
            li.textContent ="Total :  "+sum4 +" cookies";
    }
}


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
Lima.genRandomnumber();
// let a=[];
// a = seattle.genN;
// console.log(a);
Lima.simuLate();
// let b =seattle.simulateNUmber;
// console.log(b);
// let c =seattle.totall();
// console.log(c);
Lima.totall();
Lima.createSEATTle();




