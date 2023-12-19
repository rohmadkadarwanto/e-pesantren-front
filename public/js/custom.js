function formatDate(dateString) {
  if (dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  } else {
    return '-';
  }
}

function getFamilyInfo(member) {
  if (member) {
    return `${member.nama ? member.nama : '-'}`;
  } else {
    return '-';
  }
}

// Function to initialize DataTable
function initializeDataTable(selector, options, buttonContainer) {
    // Destroy existing DataTable if it exists
    if ($.fn.DataTable.isDataTable(selector)) {
        //$(selector).DataTable().destroy();
    }

    // Reinitialize DataTable
    let dataTable = $(selector).DataTable(options);

    if (buttonContainer) {
        dataTable.buttons().container().appendTo(buttonContainer);
    }

    return dataTable;
}
