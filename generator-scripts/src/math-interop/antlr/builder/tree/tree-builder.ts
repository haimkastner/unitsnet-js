import { CodePointBuffer, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { arithmeticLexer as ArithmeticLexer } from '../../grammatical/arithmeticLexer'
import { arithmeticParser as ArithmeticParser, EquationStringContext } from '../../grammatical/arithmeticParser';
import { ArithmeticGrammarListener, IdentifierRemapping } from '../tree/arithmetic-grammar-listener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { IdGenerator } from '../../../../id-generator';

import ts from 'typescript';

export function getCodeForFormula(formula: string, variableIdentifierRemapping?: IdentifierRemapping): ts.Statement[] {
	// Convert the input into a stream
	const inputBuffer = Buffer.from(formula);
	const codePointBUffer = new CodePointBuffer(inputBuffer, inputBuffer.length);
	const inputStream = CodePointCharStream.fromBuffer(codePointBUffer);

	// Pass the input stream through the lexer and pipe the result to the parser
	const lexer = new ArithmeticLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new ArithmeticParser(tokenStream);

	// Enter the grammar's root rule
	const equationString: EquationStringContext = parser.equationString();

	// Register the tree listener that'll take care of building the AST
	const listener = new ArithmeticGrammarListener(new IdGenerator(), variableIdentifierRemapping);
	parser.addParseListener(listener);

	ParseTreeWalker.DEFAULT.walk(listener, equationString);

	// Execute the AST to get the TS *code* for the formula
	return listener.getAst()!.execute();
}
