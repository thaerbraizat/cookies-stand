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
seattle.createSEATTle();
