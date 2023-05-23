//                          ---- POST SIGN UP FORM DATA ---- 

const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const formData = new FormData(form);
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
    console.log(formDataJsonString);

    fetch('http://localhost:8080/WizardLeave/employee',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
           
          },
          body: formDataJsonString
       
    })
    .then(res =>{
      if(res.ok){
        swal("Registration Success!");
        window.onload("index.html")
      }
      else{
        swal("Registration failed!");
      }
      res.json()
  })
    .catch(err => console.log(err));
})