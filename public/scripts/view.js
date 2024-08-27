
let listOfEntries = document.querySelectorAll("li");

// add event listener to all the li in the list
listOfEntries.forEach((li, index) => {
    li.addEventListener("click", () => { 
        
        document.getElementById("li-index").value = index;

        document.getElementById("indexForm").submit();
        
    });
});



// adds h1 and p tag to display a specific memory
function addElement(parentElement, title, content){
    const header = document.createElement("h1");
    const para = document.createElement("p");

    setAttribute(header, "id", "clicked-title");
    setAttribute(para, "id", "clicked-content");

    header.innerHTML = title;
    para.innerHTML = content;
    parentElement.appendChild(header);
    parentElement.appendChild(para);
    setAttribute(parentElement, "id", "clicked-container");
} 

// this remove element after viewing the specific memory
function removeElement(element) {
    element.remove();
}

// this toggle the id of the li to show up and hide
function toggleList(list){
    list.forEach((item) => {
        item.classList.toggle("hide-li");
    });
}

// this set att
function setAttribute(element, attr, attrValue) {
    element.setAttribute(attr, attrValue);
}

function removeAttribute(element, attr) {
    element.removeAttribute(attr);
}

function editMemory (currTitle, CurrContent) {
    const body = document.querySelector(".body-container");
    const containerDiv = document.createElement('div');
    containerDiv.className = 'edit-body-container';

    const form = document.createElement('form');
    form.action = 'submit-edit';
    form.id = 'edit-content';
    form.method = 'POST';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.placeholder = currTitle;
    titleInput.required = true;

    const contentTextarea = document.createElement('textarea');
    contentTextarea.name = 'content';
    contentTextarea.id = 'content';
    contentTextarea.placeholder = CurrContent;
    contentTextarea.required = true;

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'done';
    submitButton.id = 'submit-btn';

    form.appendChild(titleInput);
    form.appendChild(contentTextarea);
    form.appendChild(submitButton);

    containerDiv.appendChild(form);

    body.appendChild(containerDiv);
}




