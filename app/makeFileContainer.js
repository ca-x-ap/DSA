"use strict";

function makeFileContainer({ name, size, link }) {
	const //
		href = link ? `href="${link}"` : "",
		download = link ? `download="${name}"` : "",
		NclassName = 'class="file_name"',
		SclassName = 'class="file_size"',
		namevalue = name || "Empty",
		sizevalue = size || "...",
		namehtml = `<a ${href} ${download} ${NclassName}">${namevalue}</a>`,
		sizehtml = `<i ${SclassName}> ${sizevalue}KB</i>`,
		html = namehtml + sizehtml,
		File = document.createElement("div");

	File.classList = "file-container-element";
	File.insertAdjacentHTML("beforeend", html);

	if (handler_onFileButton) {
		File.addEventListener("click", handler_onFileButton, false);
	}

	return File;
}
