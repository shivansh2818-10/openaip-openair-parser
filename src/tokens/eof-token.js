const BaseLineToken = require('./base-line-token');
const checkTypes = require('check-types');

/**
 * EOF token. Is not generated by the tokenizer but appended to the token list after tokenizer
 * is finished. Marks the end of the parsed file.
 */
class EofToken extends BaseLineToken {
    static type = 'EOF';

    /**
     * @param {Object} config
     * @param {number} config.lastLineNumber - Last line number of file.
     * @param {typedefs.openaip.OpenairParser.TokenTypes} config.tokenTypes - List of all known token types. Required
     * to do "isAllowedNextToken" type checks.
     */
    constructor(config) {
        const { tokenTypes, lastLineNumber } = config;

        super({ tokenTypes });

        checkTypes.assert.number(lastLineNumber);

        this.lastLineNumber = lastLineNumber;
    }

    canHandle(line) {
        checkTypes.assert.string(line);

        // IMPORTANT cannot handle any line
        return false;
    }

    getAllowedNextTokens() {
        // no token after EOL
        return false;
    }

    getTokenized() {
        return { line: '', lineNumber: this.lastLineNumber };
    }
}

module.exports = EofToken;
