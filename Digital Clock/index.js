let hour= document.getElementById('hour')
let minute= document.getElementById('minute')
let second= document.getElementById('second')
let date= document.getElementById('date')

setInterval(()=>{
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dateTime= new Date()
    dateDay=dateTime.toString().slice(4,16)

    
    
    let h=dateTime.getHours()
    let m=dateTime.getMinutes()
    let s= dateTime.getSeconds()
    if (h>12){
        h=h-12
    }
    if (h.toString().length==1){
        h='0'+h
    }
    if (m.toString().length==1){
        s='0'+m
    }
    if (s.toString().length==1){
        s='0'+s
    }


    hour.innerHTML=`<span >${h} </span>`
    minute.innerHTML=`<span >${m} </span>`
    second.innerHTML=`<span >${s} </span>`

 
    date.innerHTML=`<span class="span">${dateDay} </span>`








},1000)