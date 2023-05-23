var emp_id = localStorage.getItem("emp_id");
console.log(emp_id);
var username = localStorage.getItem("emp_name");
console.log(username);
document.getElementById('name').innerHTML=username;

const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    

for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
}
for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                 && currYear === new Date().getFullYear() ? "active" : "";
    liTag += `<li class="${isToday}">${i}</li>`;
}
for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
}
currentDate.innerHTML = `${months[currMonth]} ${currYear} `; // passing current mon and yr as currentDate text
daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
icon.addEventListener("click", () => { // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
        // creating a new date of current year & month and pass it as date value
        date = new Date(currYear, currMonth, new Date().getDate());
        currYear = date.getFullYear(); // updating current year with new date year
        currMonth = date.getMonth(); // updating current month with new date month
    } else {
        date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
});
});







//                      ------GET LEAVES DATA-------
leavesarray=[]
function test(){



    fetch('http://localhost:8080/WizardLeave/leave/',{
        method: 'GET'
      })
    
        .then(res => res.json())
        .then(data => {
            var compensatory=0;
            var personaltimeoff=0;
            var lossofpay=0;
          data.forEach((repo) => {
            // console.log(repo)
            Object.entries(repo).forEach(([key, value]) => {
    
              if((key=="emp_id" & value == emp_id))
              {
                if(repo["leave_type_id"]==1)
                    {   
                        compensatory++;
                        document.getElementById('compensatory').innerText=compensatory;
                        document.getElementById('compensatory').style.color="green";
                        if(compensatory>=24){
                            document.getElementById('compensatory').style.color="red";
                        }
                    }
                 else if(repo["leave_type_id"]==2){
                        lossofpay++;
                        document.getElementById('lossofpay').innerText=lossofpay;
                        document.getElementById('lossofpay').style.color="green";
                        if(lossofpay>=24){
                            document.getElementById('lossofpay').style.color="red";
                        }
                 }   
                 else{
                    personaltimeoff++;
                    document.getElementById('personaltimeoff').innerText=personaltimeoff;
                    document.getElementById('personaltimeoff').style.color="green";
                        if(personaltimeoff>=24){
                            document.getElementById('personaltimeoff').style.color="red";
                        }
                 }
                
              }
    
            });
          });
           
        })
        .catch(error => console.log(error))
        console.log(compensatory.value)
    
        
    }
    setTimeout(function() {graph()},200);
    function graph(){
        val1=document.getElementById('compensatory').innerHTML;
        val2=document.getElementById('lossofpay').innerHTML;
        val3=document.getElementById('personaltimeoff').innerHTML;
        console.log(val1,"dhahk")
        arr=[val1,val2,val3]
        
        // arr=[3,4,5]
        typeofleaves=["Compensatory","Loss of Pay","Personal time off"]
            console.log("JHhjkhkjsd")
            const ctx = document.getElementById('canvas');
                    new Chart(ctx, {
                      type: 'bar',
                      data: {
                        labels: arr,
                        datasets: [{
                          label: typeofleaves,
                          data: arr,
                          borderWidth: 1,  
                          backgroundColor: ["#ffd8d8","ffd8d8"]
                        }]
                      },
                      options: {
                        scales: {
                          y: {
                            beginAtZero: true
                          }
                        }
                      }
                    })
        
    }
       
    test();
    // x=["compensatory","loss of pay","personal time off"]
    // val1=document.getElementById('compensatory').value;
    // val2=document.getElementById('lossofpay').value;
    // val3=document.getElementById('personaltimeoff').value;
    // y=[val1,val2,val3]
    // alert(y);
    

 