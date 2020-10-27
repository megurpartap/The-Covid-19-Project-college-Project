var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
fname.addEventListener('click', () => {fname.value = nill;})

verify = () => {
    if (fname.value === '' || fname.value === 'Enter a First Name') {
        fname.value = 'Enter a First Name'
        fname.style.backgroundColor = "#c1c1c1"
        fname.style.color = "white"
        return false
    } else if (lname.value === '' || lname.value === 'Enter a last Name') {
        lname.value = 'Enter a last Name'
        lname.style.backgroundColor = "#c1c1c1"
        lname.style.color = "white"
        lname.placeholder = 'Enter a Last Name'
        return false
    }else {
        return true
    }
}