let hour= document.getElementById('hour')
let minute= document.getElementById('minute')
let second= document.getElementById('second')
let date= document.getElementById('date')

setInterval(()=>{
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dateTime= new Date()

    let currentDate= dateTime.getDate()
    let currentDay = days[dateTime.getDay()]
    
    let h=dateTime.getHours()
    let m=dateTime.getMinutes()
    let s= dateTime.getSeconds()

    calculatedHour=30*h+m/2+s/120
    if (calculatedHour>12){
        calculatedHour=calculatedHour-12
    }
    calculatedMin=6*m+s/10
    calculatedSec=6*s

    hour.style.transform=`rotate(${calculatedHour}deg)`
    minute.style.transform=`rotate(${calculatedMin}deg)`
    second.style.transform=`rotate(${calculatedSec}deg)`
    if (currentDate.toString().length==1){
        currentDate='0'+ currentDate.toString()
}    
    date.innerHTML=`<span class="span">${currentDate} \\ ${currentDay} </span>`








},1000)