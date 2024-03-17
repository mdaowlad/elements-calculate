document.getElementById('btn-first').addEventListener('click', function(){
    // console.log('btn')
    const getInputField = document.getElementById('text-field');
    const newField = getInputField.value;
    // console.log(newField);
    const  cm = .03937007874 ;
    const totalInch = newField * cm *10;
    console.log(totalInch);
    const inchesFiled = document.getElementById('inches-field');
    console.log(inchesFiled);
inchesFiled.innerText = totalInch;
getInputField.value = ``
;
})