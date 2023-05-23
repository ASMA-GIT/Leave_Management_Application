var emp_id = localStorage.getItem("emp_id");
console.log(emp_id);
var username = localStorage.getItem("emp_name");
console.log(username);

//                            ---- GET LEAVES DATA------

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const leavetype=["","Compensatory","Loss of Pay","Personal Time off"];


var table = document.getElementById('myleaves');
var lhist = document.getElementById('lhistory');

function getLeave() {
    table.innerHTML=""

  fetch('http://localhost:8080/WizardLeave/leave/',{
    method: 'GET'
  })

    .then(res => res.json())
    .then(data => {
      console.log(data);

      data.forEach((repo) => {
        Object.entries(repo).forEach(([key, value]) => {
          if((key=="emp_id" & value == emp_id))
          {
            const date1 = new Date(repo["from_date"]);
            var fromdate =   monthNames[date1.getMonth()]  +" "+ date1.getDate() +" , " + date1.getFullYear();
            const date2 = new Date(repo["to_date"]);
            var todate =  monthNames[date2.getMonth()]  +" "+ date2.getDate() +" , " + date2.getFullYear();
            status=["pending","Accepted","Rejected"]
            if(repo["leave_status_id"]==0)
            var status =`<li style="width:75px; color:red; padding:3px 5px; border-radius:10px">${status[0]}</li>`
            else if(repo["leave_status_id==1"])
            var status =`<li style="width:75px; color:green; padding:3px 5px; border-radius:10px">${status[1]}</li>`
            else
            var status =`<p>${status[2]}</p>`
            console.log(repo["leave_type_id"])

            if(repo["leave_type_id"]==1)
            var leavetypeval = `<i class="fa-solid fa-circle" style="font-size:.7em; padding-right:10px; color:pink"></i>`+leavetype[repo["leave_type_id"]]
            else if(repo["leave_type_id"]==2)
            var leavetypeval = `<i class="fa-solid fa-circle" style="font-size:.7em; padding-right:10px; color:green"></i>`+leavetype[repo["leave_type_id"]]
            else if(repo["leave_type_id"]==3)
            var leavetypeval = `<i class="fa-solid fa-circle" style="font-size:.7em; padding-right:10px; color:blue"></i>`+leavetype[repo["leave_type_id"]]
              row = `<tr>
              <td>${leavetypeval}</td>
              <td>${fromdate} - ${todate}</td>
              <td>${status}</td>
              </tr>`
              table.innerHTML += row;
            
          }

        });
      });
      var tbody =$('table tbody');
      tbody.html($('tr',tbody).get().reverse())
      
    })
    .catch(error => console.log(error))
}
getLeave()



