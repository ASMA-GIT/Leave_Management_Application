var emp_id = localStorage.getItem("emp_id");
console.log(emp_id);
var username = localStorage.getItem("emp_name");
console.log(username);
var emp_details={}

useridautoset = document.getElementById('emp_id');
useridautoset.setAttribute("value",emp_id);
var emp_email;
// const getEmpData =async() =>{
//     let ip;
//     await fetch(`http://localhost:8080/WizardLeave/employee/${emp_id}`,{
//         method: 'GET'
//       })

//         .then(res => res.json())
//         .then(data => {
//           console.log(data)
//           ip = data.emp_mail
//         }) 
// }
// getEmpData()
// console.log(getEmpData());


//                      -----POST Leave apply data-----
var state=""
const leave = document.getElementById('leave');

leave.addEventListener('submit',function(e){
    e.preventDefault();
    const formData = new FormData(leave);
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
    console.log(formDataJsonString);

    if(state=="accept"){

    fetch('http://localhost:8080/WizardLeave/leave',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        
        },
        body: formDataJsonString

    
    })
    .then(res =>{
        if(res.ok){
            
            const getEmpData =async() =>{
                let ip;
                await fetch(`http://localhost:8080/WizardLeave/employee/${emp_id}`,{
                    method: 'GET'
                  })
            
                    .then(res => res.json())
                    .then(data => {
                      console.log(data)
                      ip = data.emp_mail
                      console.log(ip)
                      Email.send({
                        SecureToken : "e5e6e4e9-6bcd-4638-b19f-c03e0564a1cb",
                        To : "asmashaheen.shah@gmail.com",
                        From : "asma.shaheen@wavemaker.com",
                        Subject : "Leave applied",
                        Body : "Your Leave has been successfully recorded"
                    }).then(
                      message => console.log(message)
                    );
                    }) 
            }  
            getEmpData();      

          swal({
            title: "Leave applied",
            icon: "success",
            button: "ok",
          });
          
            
        }
        else
            {
              swal("Unsuccessful!");
            }
        res.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  else{
    console.log("reject")
  }
})
    //                         ----DATE RESTRICT--
    
    var date = new Date();
    var cdate = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getUTCFullYear();
    if(cdate<10){
        cdate = "0"+cdate;
    }
    if(month<10){
        month = "0"+month;
    }
    var mindate = year+"-"+month+"-"+cdate;
    document.getElementById('from_date').setAttribute('min',mindate);
    // document.getElementById('from_date').setAttribute('value',mindate);
    
    document.getElementById('to_date').setAttribute('min',mindate);
    function setToDate(){
        var from = document.getElementById('from_date');
        console.log(from.value);
        document.getElementById('to_date').setAttribute('min',from.value);

    }

//                    ---------Restrict selecting holiday dates------------

function check_leavedate(val,thisid){
    const d = new Date(val);
    const day =d.getDay();
  
  
    var counter =0;
    function isHoliday(verifydateval){
      fetch('http://localhost:8080/WizardLeave/holiday/',{
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          data.forEach((repo) => {
            const holdate = new Date(repo["holiday_date"]);
            // console.log(holdate)
            var d1 =   holdate.getDate() +"/" + holdate.getMonth() +"/"+ holdate.getFullYear();
            const verifydatevall= new Date(verifydateval);
            var d2= verifydatevall.getDate() +"/" +  verifydatevall.getMonth() +"/"+verifydatevall.getFullYear();
            if(d1==d2){
              return true
            }
          })
          
        })
        return false
    }
    var ans =isHoliday(val);
    console.log("ans",ans)
    if(day ==0 || day ==6 ){
    thisid.style.outlineColor = "red";
    thisid.style.borderColor = "red";
    var dateid = thisid.id
    if(dateid =="from_date"){
      document.getElementById('fromdateerror').innerHTML="you selected a holiday"
    document.getElementById('fromdateerror').style.color="red"
    }
    else{
      document.getElementById('todateerror').innerHTML="you selected a holiday"
      document.getElementById('todateerror').style.color="red"
    }
  }
  else{
    thisid.style.outlineColor = "";
    thisid.style.borderColor = "";
    document.getElementById('fromdateerror').innerHTML=""
    document.getElementById('todateerror').innerHTML=""
    state="accept"
  }
}

const cancelapply = function(){
    document.getElementById("leave").reset();
}