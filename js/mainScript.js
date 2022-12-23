document.getElementById('calulateBtn').addEventListener('click', function () {
    const selectedV = document.getElementById('selectedV').getElementsByTagName('li').length;
    const perPlayerField = getInputFieldValue('perPlayerField');
    let playerExpenses = selectedV * perPlayerField;

    setInnerText('playerExpenses', playerExpenses);
    // setInnerText('total', 0);

})

document.getElementById('calulateTotalBtn').addEventListener('click', function () {
    const playerExpenses = getElementInnerText('playerExpenses');
    const managerField = getInputFieldValue('managerField');
    const coachField = getInputFieldValue('coachField');
    let total = playerExpenses + managerField + coachField;

    setInnerText('total', total);
})

const players = document.querySelectorAll('#playerBtn .border-2 .p-5');
for (const player of players) {
    player.childNodes[5].addEventListener('click', function () {
        const selectedVLength = document.getElementById('selectedV').getElementsByTagName('li').length;
        if(selectedVLength===5){
            return;
        }
        const selectedV = document.getElementById('selectedV');
        const newChild = document.createElement('li');
        const playerName = player.childNodes[1].innerText;
        newChild.innerText = playerName;

        selectedV.appendChild(newChild);
        // selectedV.unshift(newChild);
        // insertBefore(newChild, selectedV.firstChild);
        console.log(selectedV);
    })
}


// console.log(test.childNodes[5]);





/*
console.log(test);
console.log('test');
    const perPlayerField = getInputFieldValue('idName');
    const playerExpenses = getElementInnerText('playerExpenses');
    setInnerText('playerExpenses', playerExpenses);


playerBtn
selectedV
perPlayerField
calulateBtn
playerExpenses
managerField
coachField
calulateTotalBtn
total



*/