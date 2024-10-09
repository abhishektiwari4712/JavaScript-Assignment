const btn = document.getElementById('btn');
const iname = document.getElementById('name');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const table = document.getElementById('table');
let idCount = 1;

function addEntries(name, contact, email) {
    let rowE = document.createElement('tr');

    let idBox = document.createElement('td');
    idBox.innerHTML = `${idCount}`;

    let nBox = document.createElement('td');
    nBox.innerHTML = `${name}`;

    let cBox = document.createElement('td');
    cBox.innerHTML = `${contact}`;

    let eBox = document.createElement('td');
    eBox.innerHTML = `${email}`;

    
    let x1 = document.createElement('td');
    let b1 = document.createElement('button');
    b1.innerHTML = `Edit`;
    x1.appendChild(b1);

    let x2 = document.createElement('td');
    let b2 = document.createElement('button');
    b2.innerHTML = `Delete`;
    x2.appendChild(b2);

    rowE.appendChild(idBox);
    rowE.appendChild(nBox);
    rowE.appendChild(cBox);
    rowE.appendChild(eBox);
    rowE.appendChild(x1);
    rowE.appendChild(x2);

    table.appendChild(rowE);

    b2.addEventListener('click', () => {
        table.removeChild(rowE);
        updateIds();
        idCount--;
    })

    b1.addEventListener('click', () => {
        if (b1.innerHTML === 'Edit') {
            b1.innerHTML = 'Update';
            nBox.contentEditable = true;
            cBox.contentEditable = true;
            eBox.contentEditable = true;
            nBox.focus();
        } else {
            b1.innerHTML = 'Edit';
            nBox.contentEditable = false;
            cBox.contentEditable = false;
            eBox.contentEditable = false;
        }
    });
}

function updateIds() {
    let rows = table.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i++) { 
        rows[i].getElementsByTagName('td')[0].innerHTML = i;
    }
}

btn.addEventListener('click', () => {
    console.log("button clicked");

    if(iname.value === "" || contact.value === "" || email.value === "") {
        alert("Please provide the information");
    } else {
        let nameV = iname.value;
        let contactV = contact.value;
        let emailV = email.value;

        console.log(nameV, contactV, emailV);

        addEntries(nameV,contactV,emailV);
        idCount++;
        iname.value = "";
        contact.value = "";
        email.value = "";   
    }
})