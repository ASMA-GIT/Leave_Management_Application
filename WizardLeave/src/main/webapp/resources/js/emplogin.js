//                 -----Fetching employee details ----

const fetchDataBtn = document.querySelector('#fetchdata')
    
    // gets data from API and sets the content of #result div
    const getData = function() {
      emp_id=document.getElementById('logid').value;
      emp_password =document.getElementById('loginpass').value;
      console.log(emp_password);
      localStorage.setItem("emp_id",emp_id);

      fetch('http://localhost:8080/WizardLeave/employee',{
        method: 'GET'
      })

        .then(res => res.json())
        .then(data => {
          console.log(data);


//                                VALIDATE LOGIN FORM DATA
          console.log(emp_id);
          console.log(emp_password);

          data.forEach((repo) => {
              if((repo["emp_id"] == emp_id)&&(repo["password"]== emp_password))
              {
                
                window.location.assign("dashboard.html");
              }
           
          });

//        fetching employee name
          empdetailsobj=data;
          data.forEach((repo) => {
            Object.entries(repo).forEach(([key, value]) => {
              if(key == "emp_id" && value ==emp_id){
              console.log(JSON.stringify(repo, null, 2));
              emp_name=repo["first_name"];
            //   console.log(emp_name);
              localStorage.setItem("emp_name",emp_name);
              }
            });

          });

        })
        .catch(error => console.log(error))
    }
    
    fetchDataBtn.addEventListener('click', getData)