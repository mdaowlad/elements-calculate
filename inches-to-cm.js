document.getElementById('btn-first2').addEventListener('click', function(){
    // console.log('btn')
    const getInputField = document.getElementById('text-field2');
    const newField = getInputField.value;
    // console.log(newField);
    const  inch = 2.54 ;
    const totalInch = newField * inch;15
    console.log(totalInch);
    const inchesFiled = document.getElementById('inches-field2');
    console.log(inchesFiled);
inchesFiled.innerText = totalInch;
getInputField.value = ``
;
})