function getInputFieldValue(idName){
    const string = document.getElementById(idName);
    return parseFloat(string.value);
}
function getElementInnerText(idName){
    const string = document.getElementById(idName);
    return parseFloat(string.innerText);
}
function setInnerText(idName, value) {
    const element = document.getElementById(idName);
    element.innerText = value;
}
function lengthOfParent(idName, childName){
    return document.getElementById(idName).getElementsByTagName(childName).length;
}