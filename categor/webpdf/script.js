document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phone = document.getElementById('phone').value;
    let money = document.getElementById('money').value;

    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.textContent = firstName;
    cell2.textContent = lastName;
    cell3.textContent = phone;
    cell4.textContent = money;

    document.getElementById('dataForm').reset();
});

document.getElementById('downloadPDF').addEventListener('click', function () {
    let table = document.getElementById('dataTable');
    let html = table.outerHTML;

    let style = `
        <style>
            table { width: 100%; border-collapse: collapse; }
            table, th, td { border: 1px solid black; }
            th, td { padding: 10px; text-align: left; }
        </style>
    `;

    let win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>Submitted Data</title>');
    win.document.write(style);
    win.document.write('</head><body>');
    win.document.write(html);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
});
