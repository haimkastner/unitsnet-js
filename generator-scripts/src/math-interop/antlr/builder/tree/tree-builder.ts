import { CodePointBuffer, CodePointCharStream, CommonTokenStream } from 'antlr4ts';
import { arithmeticLexer as ArithmeticLexer } from '../../grammatical/arithmeticLexer'
import { arithmeticParser as ArithmeticParser, EquationStringContext } from '../../grammatical/arithmeticParser';
import { ArithmeticGrammarListener } from '../tree/arithmetic-grammar-listener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

// Read input expression
const inputExpression = "150 % ((({x} * Math.Sqrt(9)) * Math.PI) - Math.Pow(5, 2))";
// Create an ANTLR input stream from the input expression

const inputBuffer = Buffer.from(inputExpression);

const codePointBuffer = new CodePointBuffer(inputBuffer, inputBuffer.length);

const inputStream = CodePointCharStream.fromBuffer(codePointBuffer);

// Create lexer
const lexer = new ArithmeticLexer(inputStream);

// Create a token stream using the lexer
const tokenStream = new CommonTokenStream(lexer);

// Create a parser
const parser = new ArithmeticParser(tokenStream);
const equation: EquationStringContext = parser.equationString();

const listener = new ArithmeticGrammarListener();
parser.addParseListener(listener);

ParseTreeWalker.DEFAULT.walk(listener, equation);

const ast = listener.getAst();

const serialized = ast!.execute();
console.log(serialized);


export function getCodeForFormula(formula: string): string {
	const inputBuffer = Buffer.from(formula);
	const codePointBUffer = new CodePointBuffer(inputBuffer, inputBuffer.length);
	const inputStream = CodePointCharStream.fromBuffer(codePointBUffer);
	
	const lexer = new ArithmeticLexer(inputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new ArithmeticParser(tokenStream);

	const equationString: EquationStringContext = parser.equationString();
	
	const listener = new ArithmeticGrammarListener();
	parser.addParseListener(listener);
	
	ParseTreeWalker.DEFAULT.walk(listener, equationString);
	return listener.getAst()!.execute() as any;
}



/* (x - 5) * 2

//
const valueA = x - 5;
const result = valueA - 2;
return result;
     

      *
     / \
    -   2
   / \
  x   5



*/