/*
Instructions
Create a webpage that has a form (asks the user for its name,
age, and email address) and when the user clicks submit, open
a text window that writes all the information and asks for his
confirmation. If he clicks on the confirm button, tell him
“congratulations you successfully sent this form” if he clicks on
change information, give him the possibility to change the
information, and ask again for his confirmation.
*/

const infoForm = document.querySelector('#info-form')

infoForm.addEventListener('submit', function(e){
    // alert('submit')
    e.preventDefault()
    submitForm()

});

function submitForm(){
    console.log('submit')

    const name = document.querySelector('#name').value
    const age = document.querySelector('#age').value
    const email = document.querySelector('#email').value
    
    const confirmBox = document.createElement('div')
    confirmBox.classList.add('confirm-box')
    confirmBox.innerHTML = `   
        <h2>Are you sure you want to send this form?</h2>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Email: ${email}</p>
        <button id="confirm">Confirm</button>
        <button id="change">Change information</button>
    `
    confirmBox.style.display = 'block'
    confirmBox.style.position = 'absolute'
    confirmBox.style.top = '50%'
    confirmBox.style.left = '50%'
    confirmBox.style.transform = 'translate(-50%, -50%)'
    confirmBox.style.background = '#FFF'
    confirmBox.style.padding = '20px'
    confirmBox.style.border = '1px solid black'
    confirmBox.style.borderRadius = '15px'
    confirmBox.style.textAlign = 'center'


    document.body.appendChild(confirmBox)
    
    const confirm = document.querySelector('#confirm')
    const change = document.querySelector('#change')
    
    if(confirm){
        alert('Congratulations you successfully sent this form')
    }else if (change){
        alert('Change information')
    }
}
