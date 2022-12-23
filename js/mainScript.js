document.getElementById('calulateBtn').addEventListener('click', function () {
    const selectedV = lengthOfParent('selectedV', 'li');
    const perPlayerField = getInputFieldValue('perPlayerField');
    let playerExpenses = selectedV * perPlayerField;

    setInnerText('playerExpenses', playerExpenses);
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
        const selectVNoticeLength = lengthOfParent('selectedV', 'span');
        if (selectVNoticeLength === 1) {
            document.getElementById('selectNotice').remove();
        }

        const selectedVLength = lengthOfParent('selectedV', 'li');
        if (selectedVLength === 5) {
            return;
        }

        const selectedV = document.getElementById('selectedV');
        const newChild = document.createElement('li');
        const playerName = player.childNodes[1].innerText;
        newChild.innerText = playerName;

        const selectedVChilds = document.querySelectorAll('#selectedV li');
        for (const child of selectedVChilds) {
            if (child.innerText === playerName) {
                alert('Already Selected Player');
                return;
            }
        }
        selectedV.appendChild(newChild);
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