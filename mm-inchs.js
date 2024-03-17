document.getElementById('btn-first3').addEventListener('click', function(){
    // console.log('btn')
    const getInputField = document.getElementById('text-field3');
    const newField = getInputField.value;
    // console.log(newField);
    const  mm = .03937007874 ;
    const totalInch = newField * mm ;
    console.log(totalInch);
    const inchesFiled = document.getElementById('inches-field3');
    console.log(inchesFiled);
inchesFiled.innerText = totalInch;
getInputField.value = ``
;
})