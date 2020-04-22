const leftDoubleQuoteRegex = /(^|\s)"/;
const leftSingleQuoteRegex = /(^|\s)'/;

/**
 * Replaces quotes and ellipses in the text with their nice variants.
 * 
 * @param {string} text The text with "ugly quotes"
 * @returns {string} The text with “nice quotes”
 */
function niceQuotes(text) {
    let match, index;
    while (match = leftDoubleQuoteRegex.exec(text)) {
        text = text.substring(0, match.index) + match[1] + "“" + text.substring(match.index + match[0].length);
    }
    while (match = leftSingleQuoteRegex.exec(text)) {
        text = text.substring(0, match.index) + match[1] + "‘" + text.substring(match.index + match[0].length);
    }
    while ((index = text.indexOf("\"")) !== -1) {
        text = text.substring(0, index) + "”" + text.substring(index + 1);
    }
    while ((index = text.indexOf("'")) !== -1) {
        text = text.substring(0, index) + "’" + text.substring(index + 1);
    }
    while ((index = text.indexOf("...")) !== -1) {
        text = text.substring(0, index) + "…" + text.substring(index + 3);
    }
    return text;
}

export default niceQuotes;
