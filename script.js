function countWordsAndChars() {
	var text = document.getElementById('textInput').value;
	var words = text.trim().split(/\s+/);
	var wordCount = words.length;

	// Remove spaces before counting characters
	var charCount = text.replace(/\s/g, '').length;

	document.getElementById('wordCount').innerHTML = 'Word Count: ' + wordCount;
	document.getElementById('charCount').innerHTML =
		'Character Count: ' + charCount;
}
