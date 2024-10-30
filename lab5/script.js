// Завдання 1
window.onload = setMaxDate;

function setMaxDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const maxDate = `${yyyy}-${mm}-${dd}`;

    document.getElementById("birthDate").setAttribute("max", maxDate);
}

function validateForm() {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const idCard = document.getElementById("idCard").value;
    const birthDate = document.getElementById("birthDate").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    const [day, month, year] = birthDate.split('.');
    const inputDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    const nameRegex = /^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ]\.[А-ЯҐЄІЇ]\.$/;
    const idRegex = /^[A-ZА-Я]{2} №\d{6}$/;
    const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressRegex = /^м\.\s[А-ЯҐЄІЇ][а-яґєії'.,\s-]+$/;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com)$/;


    if (!fullName || !idCard || !birthDate || !address || !email) {
        alert("Будь ласка, заповніть всі поля.");
        return false;
    }
    else if (!nameRegex.test(fullName)) {
        alert("Некоректне ім'я.");
        return false;
    }
    else if (!idRegex.test(idCard)) {
        alert("Некоректний ID-карт.");
        return false;
    }
    else if (!dateRegex.test(birthDate)) {
        alert("Некоректна дата народження.");
        return false;
    }
    else if (inputDate.getFullYear() !== Number(year) || inputDate.getMonth() + 1 !== Number(month) ||
        inputDate.getDate() !== Number(day)) {
        alert("Некоректна дата народження.");
        return false;
    }
    else if (inputDate > currentDate) {
        alert("Дата народження з майбутнього.");
        return false;
    }
    else if (!addressRegex.test(address)) {
        alert("Некоректна адреса.");
        return false;
    }
    else if (!emailRegex.test(email)) {
        alert("Некоректний email.");
        return false;
    }

    document.getElementById("outputFullName").textContent = fullName;
    document.getElementById("outputІdCard").textContent = idCard;
    document.getElementById("outputBirthDate").textContent = birthDate;
    document.getElementById("outputAddress").textContent = address;
    document.getElementById("outputEmail").textContent = email;

    document.getElementById("fullName").value = '';
    document.getElementById("idCard").value = '';
    document.getElementById("birthDate").value = '';
    document.getElementById("address").value = '';
    document.getElementById("email").value = '';

    return true;
}


// Завдання 2
const table = document.getElementById('colorTable');
const colorPicker = document.getElementById('colorPicker');

for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement('td');
        const cellNumber = i * 6 + j;
        cell.textContent = cellNumber.toString();

        cell.addEventListener('mouseenter', () => {
            if (cellNumber === 2) {
                cell.style.backgroundColor = getRandomColor();
            }
        });

        cell.addEventListener('click', () => {
            if (cellNumber === 2) {
                cell.style.backgroundColor = colorPicker.value;
            }
        });

        cell.addEventListener('dblclick', () => {
            if (cellNumber === 2) {
                changeColumnColor(j - 1);
            }
        });

        row.appendChild(cell);
    }
    table.appendChild(row);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColumnColor(colIndex) {
    const cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        if (i % 6 === colIndex) {
            cells[i].style.backgroundColor = colorPicker.value;
        }
    }
}
