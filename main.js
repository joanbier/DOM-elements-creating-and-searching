// Creating the element in the first form

const addElement = (e, node, txt, attr, value) => {
    e.preventDefault()
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector(".content").appendChild(element);
}


const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
))

// searching the elements in the second form

const searchForm = document.querySelector(".form--search");

const searchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector(".result");
    infoElement.textContent = '';
    const elementsInHTML = document.querySelectorAll(nameElement);
    if (elementsInHTML.length) {
        infoElement.innerHTML = `<p class="result__info">There are <strong> ${elementsInHTML.length} </strong> ${nameElement} elements found in this document</p>`
        showInfo(elementsInHTML, infoElement)
    } else {
        infoElement.innerHTML = `<p class="result__info"> The <strong> ${nameElement} </strong> element was not found in this document</p>`
        return
    }
}

const showInfo = (elementsInHTML, infoElement) => {
    elementsInHTML.forEach(element => {
        const item = document.createElement('div');
        item.className = "element-info";
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>class: ${element.className}</div>
        <div>Height of the element (offsetHeight):  ${element.offsetHeight}</div>
        <div>Width of the element (offsetHeight): ${element.offsetWidth}</div>
        <div>Children (childElementCount): ${element.childElementCount}</div> 
        `;
        infoElement.appendChild(item)
    });
}

searchForm.addEventListener("submit", (e) => searchElements(
    e,
    searchForm.elements['searching-element'].value
))