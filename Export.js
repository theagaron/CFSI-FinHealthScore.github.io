//To prevent a bug in IE where the global use of the 'viz' variable
//  interferes with the div id 'viz' (in the html), the following line is needed:
//  Note: this line does not appear in the tutorial videos but should still be used
//    and is in all of the included js files. 

function exportPDF() {
	viz.showExportPDFDialog();
}

function exportData() {
	viz.showExportDataDialog();
}

function exportWorkbook() {
	viz.showDownloadWorkbookDialog();
}

function exportImage() {
	viz.showExportImageDialog();
}
