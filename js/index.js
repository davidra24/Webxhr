function generateRow(nombre, poblacion) {
  const tableRef = document
    .getElementById('myTable')
    .getElementsByTagName('tbody')[0];

  // Insert a row in the table at the last row
  const newRow = tableRef.insertRow();

  // Insert a cell in the row at index 0
  const newCell = newRow.insertCell(0);
  const auxCell = newRow.insertCell(1);

  // Append a text node to the cell
  const newText = document.createTextNode(nombre);
  const auxText = document.createTextNode(poblacion);
  newCell.appendChild(newText);
  auxCell.appendChild(auxText);
}
function handleSave() {
  const nombre = document.getElementById('nombre').value;
  const poblacion = document.getElementById('poblacion').value;
  generateRow(nombre, poblacion);
}
