
    
    // const btn = document.querySelector('#sub');
   
    // // btn.addEventListener('click', (e)=>{
    // //     e.preventDefault();
    // //     console.log('clicked');
    // // } );
    // // btn.addEventListener('mouseover', (e)=>{
    // //     e.preventDefault();
    // //     console.log('hovering');
    // // } );
    // // btn.addEventListener('mouseout', (e)=>{
    // //     e.preventDefault();
    // //     console.log('now mouse out');
    // // } );


    // btn.addEventListener('click',onSubmit);

    // function onSubmit(e) {
    //     const name = document.querySelector('#name').value;
    // const email = document.querySelector('#email').value;
    //     e.preventDefault();
    //     if(name === '' || email === '') {
    //         document.querySelector('#msg').innerHTML = 'Please enter all fields';
    //     }
    //     else{
    //         document.querySelector('#msg').innerHTML = `name: ${name} email: ${email}`;
    //     }
    // }



    function UserReg() {
    //  e.target.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#contact').value;
    let userDetails = {
        name:name,
        emailId:email,
        Contact:phone
    };
    let u = JSON.stringify(userDetails);
      localStorage.setItem("userDetails",u);
    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("Phone",phone);
    // console.log(name  + " "+email  + " "+ phone);
    }


//     let myObj = {
//         naam:"Rishbah",
//         phone : 12344,
//     };
// let myObj_serialized = JSON.stringify(myObj);
//     localStorage.setItem("myObj", myObj_serialized);
//      let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
   
