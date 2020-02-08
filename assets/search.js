// select the search by id and add event listener for typing
document.getElementById('search').addEventListener('keyup', search);

// search function
function search(search) {
    // declare const
    const input = document.getElementById("search");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");

    // Loop through all of the table rows, and hide those that don't match the search input
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          const txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            // hide if they don't math search input
            tr[i].style.display = "none";
          }
        }
      }
}