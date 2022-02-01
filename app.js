const buttonCopy = document.querySelectorAll(".code-snippet--copy");
const codeSnippet = document.querySelectorAll(".code-snippet");

for(let i = 0 ; i < buttonCopy.length ; i++){
    buttonCopy[i].addEventListener('click', () => {
        codeSnippet[i].select();
        document.execCommand('copy');
        buttonCopy[i].innerHTML = "copied";
        setTimeout( () => { buttonCopy[i].innerHTML = "copy"}, 3000)
    })
}

