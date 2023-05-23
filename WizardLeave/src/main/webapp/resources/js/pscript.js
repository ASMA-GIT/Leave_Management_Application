

var emp_id = localStorage.getItem("emp_id");
console.log(emp_id);
var username = localStorage.getItem("emp_name");
console.log(username);


      //            -------- Update password

      const checkCurrentPassword = function() {
        cp=document.getElementById('cp').value;
        np=document.getElementById('np').value;
        fetch('http://localhost:8080/WizardLeave/employee/',{
              method: 'GET'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            emp_details=data;
            data.forEach((repo) => {
              if(repo["emp_id"] == emp_id  && repo["password"] == cp)
              updatePassword(repo);
            })
          })
    }
  
  
  const updatePassword = function(empjson){
    console.log(empjson);
  
    updateEmployeeRow = {
      "dept_id" : empjson["dept_id"],
      "designation" : empjson["designation"],
      "dob":empjson["dob"],
      "emp_id":empjson["emp_id"],
      "emp_mail":empjson["emp_mail"],
      "first_name":empjson["first_name"],
      "gender_id":empjson["gender_id"],
      "joining_date":empjson["joining_date"],
      "last_name":empjson["last_name"],
      "password":np
    }
    console.log(updateEmployeeRow);
  
  
    fetch('http://localhost:8080/WizardLeave/employee/update',{
      method:"PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json" 
          },
          body: JSON.stringify(updateEmployeeRow)
        })
        .then(res =>{
            if(res.ok){
                alert("success");
            }
            else
                alert("failed");
            res.json()
        })
        .catch(err => console.log(err));
  }

// userprofile

  fn = document.getElementById('fn');
    ln = document.getElementById('ln');
    em = document.getElementById('ema');
    des = document.getElementById('des');
    $('#gen').prop('disabled', true);
    dob = document.getElementById('dob');

    function selectElement(id, valueToSelect) {  
      let element = document.getElementById(id);
      element.value = valueToSelect;
    }
    
    $("#submitupdateduser").attr("disabled", true);
    document.getElementById("submitupdateduser").style.opacity=0.3;
    $("#cancleEdit").attr("disabled", true);
    document.getElementById("submitupdateduser").style.opacity=0.3;




    // user details edit
    const enableEdit = function(){

      fn.removeAttribute("readonly");
      ln.removeAttribute("readonly");
      em.removeAttribute("readonly");
      des.removeAttribute("readonly");
      gen.removeAttribute("readonly");
      $('#gen').prop('disabled', false);
      dob.removeAttribute("readonly");
      $("#submitupdateduser").attr("disabled", false);
      document.getElementById("submitupdateduser").style.opacity=1;
      $("#cancleEdit").attr("disabled", false);
    document.getElementById("cancleEdit").style.opacity=1;
    }


     // cancel user details edit
    const cancleEdit = function(){
      fn.readOnly = true;
      ln.readOnly = true;
      em.readOnly = true;
      des.readOnly = true;
      $('#gen').prop('disabled', true);
      dob.readOnly = true;
      $("#submitupdateduser").attr("disabled", true);
      document.getElementById("submitupdateduser").style.opacity=0.3;
      $("#cancleEdit").attr("disabled", true);
      document.getElementById("submitupdateduser").style.opacity=0.3;

    }

    const profile = function() {

    fetch('http://localhost:8080/WizardLeave/employee/',{
            method: 'GET'
      })

        .then(res => res.json())
        .then(data => {
          console.log(data);

          data.forEach((repo) => {
            
              if((repo["emp_id"] == emp_id))
              {
                const date = new Date(repo["dob"]);
                var dobMonth;
                if(date.getMonth()<10)
                  dobMonth=0+""+(date.getMonth()+1)
                var d =  date.getFullYear()+"-"+ dobMonth +"-"+ date.getDate() ;
                
                fn.setAttribute("value",repo["first_name"]);
                ln.setAttribute("value",repo["last_name"]);
                em.setAttribute("value",repo["emp_mail"]);
                des.setAttribute("value",repo["designation"]);
                dob.setAttribute("value",d);
                selectElement('gen',repo["gender_id"])
            
              }

          });

        })
        .catch(error => console.log(error));
    }
    profile();


    //                -------------update user details------------------


const getUserDetailsToEdit = function() {
    console.log("hettyt")
    fetch('http://localhost:8080/WizardLeave/employee/',{
          method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        emp_details=data;
        data.forEach((repo) => {
          if(repo["emp_id"] == emp_id )
          updateEmployeeDetails(repo);
        })
      })
  }
  
  
  const updateEmployeeDetails = function(empjson){
    console.log("hettyt")
    console.log(fn.value);
    console.log(ln.value);
    var designation = des.value;
    var dobirth = dob.value;
    var email= em.value;
    var lname = ln.value;
    var fname = document.getElementById('fn').value;
    console.log(fname)
    var gender = gen.value;
  
    updateEmpDetails= {
      "dept_id" : empjson["dept_id"],
      "designation" : designation,
      "dob":dobirth,
      "emp_id":emp_id,
      "emp_mail":email,
      "first_name":fname,
      "gender_id":gender,
      "joining_date":empjson["joining_date"],
      "last_name":lname,
      "password":empjson["password"]
    }
  
  
    fetch('http://localhost:8080/WizardLeave/employee/update',{
      method:"PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json" 
          },
          body: JSON.stringify(updateEmpDetails)
        })
        .then(res =>{
            if(res.ok){
              swal("Updated successfully");
              fn.readOnly = true;
              ln.readOnly = true;
              em.readOnly = true;
              des.readOnly = true;
              $('#gen').prop('disabled', true);
              dob.readOnly = true;
              username=updateEmployeeDetails["first_name"];
              $("#submitupdateduser").attr("disabled", true);
              document.getElementById("submitupdateduser").style.opacity=0.3;
              $("#cancleEdit").attr("disabled", true);
              document.getElementById("submitupdateduser").style.opacity=0.3;
            }
            else
                alert("update failed");
            res.json()
        })
        .catch(err => console.log(err));
  }