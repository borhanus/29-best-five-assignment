document.getElementById('calulateBtn').addEventListener('click', function () {
    const selectedV = lengthOfParent('selectedV', 'li');
    const perPlayerField = getInputFieldValue('perPlayerField');
    const selectedVLength = lengthOfParent('selectedV', 'li');

    if(isNaN(perPlayerField) || perPlayerField <= 0){
        alert('Please add valid input (NO: 0, -, abc)');
        return;
    }
    else if(selectedVLength < 1){
        alert('Select at least one player');
        return;
    }

    let playerExpenses = selectedV * perPlayerField;
    setInnerText('playerExpenses', playerExpenses);
})

document.getElementById('calulateTotalBtn').addEventListener('click', function () {
    const playerExpenses = getElementInnerText('playerExpenses');
    const managerField = getInputFieldValue('managerField');
    const coachField = getInputFieldValue('coachField');

    if(isNaN(managerField) || isNaN(coachField) || managerField < 0 || coachField < 0){
        alert('Please add valid input (NO: -, abc)');
        return;
    }

    let total = playerExpenses + managerField + coachField;
    setInnerText('total', total);
})

const players = document.querySelectorAll('#playerBtn .border-2 .p-5');
for (const player of players) {
    player.childNodes[5].addEventListener('click', function (event) {
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

        // Disabled Alternative
        // const selectedVChilds = document.querySelectorAll('#selectedV li');
        // for (const child of selectedVChilds) {
        //     if (child.innerText === playerName) {
        //         alert('Already Selected Player');
        //         return;
        //     }
        // }
        event.target.setAttribute('disabled', false);
        event.target.style.background = 'DimGray';
        selectedV.appendChild(newChild);
    })
}