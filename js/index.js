function generateRow(nombre, poblacion) {
  const tableRef = document
    .getElementById('myTable')
    .getElementsByTagName('tbody')[0];

  // Insert a row in the table at the last row
  const newRow = tableRef.insertRow();

  // Insert a cell in the row at index 0
  const newCell = newRow.insertCell(0);

  // Append a text node to the cell
  const newText = document.createTextNode(nombre);
  newCell.appendChild(newText);
}
function handleSave() {
  generateRow();
  const nombre = document.getElementById('nombre');
  const poblacion = document.getElementById('poblacion');
}
