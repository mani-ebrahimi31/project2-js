let showDiv = document.querySelector('.result');

function showResult(title,value){
    showDiv.firstElementChild.innerHTML = title;
    showDiv.lastElementChild.innerHTML = value;
}
function findMax() {
    let customArray = inpt.value.split(' ');
    let sortedArray = customArray.sort((a, b) => b - a)
    showResult("Max",sortedArray[0])
}
function findMin() {
    let customArray = inpt.value.split(' ');
    let sortedArray = customArray.sort((a, b) => a - b)
    showResult("Min",sortedArray[0])
}
function removeDuplicate() {
    let customArray = inpt.value.split(' ');
    //method 1
    for (let i = 0; i < customArray.length; i++) {
        for (let j = i + 1; j < customArray.length; j++) {
            if (customArray[i] == customArray[j]) {
                customArray.splice(j, 1);
                j--
            }
        }
    }

    showResult("Removed Duplicate",customArray)
    //method 2
    // let uniqueArray = [];

    // for (let value of customArray)
    //     if (uniqueArray.indexOf(value) === -1) uniqueArray.push(value);


    // console.log(uniqueArray);

    //method 3 
    // let uniqueArray = customArray.filter((value, index) => customArray.indexOf(value) === index);
    // console.log(uniqueArray);

    //method4
    // let uniqueArray = [... new Set(customArray)]

    // console.log(uniqueArray);
}
function findDuplicates() {
    let customArray = inpt.value.split(' ');

    //method 1
    result = customArray.filter((value, index) => customArray.indexOf(value) !== index);
    duplicateArray = result.filter((value, index) => result.indexOf(value) === index);
    
    //method 2
    // let duplicateArray = [];
    // for (let i = 0; i < customArray.length; i++) {
    //     for (let j = i + 1; j < customArray.length; j++) {
    //         if (customArray[i] == customArray[j] && duplicateArray.indexOf(customArray[i]) === -1) {
    //             duplicateArray.push(customArray[i]);
    //         }
    //     }
    // }
    showResult("Duplicates",duplicateArray)
}