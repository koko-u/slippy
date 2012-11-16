SyntaxHighlighter.brushes.Haskell = function()
{
  var keywords = 'case class data default deriving do else if import in infix infixl ' +
    'infixr instance let module newtype of then type where';
  var functions = 'abs acos acosh all and any appendFile applyM asTypeOf ' +
    'asin asinh atan atan2 atanh break catch ceiling compare concat concatMap ' +
    'const cos cosh curry cycle decodeFloat div divMod drop dropWhile elem ' +
    'encodeFloat enumFrom enumFromThen enumFromThenTo enumFromTo error even ' +
    'exp exponent fail filter flip floatDigits floatRadix floatRange floor ' +
    'fmap foldl foldl1 foldr foldr1 fromEnum fromInteger fromIntegral fromRational ' +
    'fst gcd getChar getContents getLine head id init interact ioError isDenormalized ' +
    'isIEEE isInfinite isNaN isNegativeZero iterate last lcm length lex lines log logBase ' +
    'lookup map mapM mapM_ max maxBound maximum maybe min minBound minimum mod negate ' +
    'not notElem null odd or otherwise pi pred print product properFraction putChar putStr ' +
    'putStrLn quot quotRem read readFile readIO readList readLn readParen reads readsPrec ' +
    'realToFrac recip rem repeat replicate return reverse round scaleFloat scanl scanl1 ' +
    'scanr scanr1 seq sequence sequence_ show showChar showList showParen showString ' +
    'shows showsPrec significand signum sin sinh snd span splitAt sqrt subtract succ ' +
    'sum tail take takeWhile tan tanh toEnum toInteger toRational truncate uncurry ' +
    'undefined unlines until unwords unzip unzip3 userError words writeFile zip zip3 ' +
    'zipWith zipWith3';
  var datatypes = 'Bool Char String Ordering Int Integer Float Double Maybe Either ' + 
    'IO IOError EQ GT True False LT Just Nothing';
  
  this.regexList = [
    { regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
    { regex: /"([^"](\\\s+\\)*)*"/gm , css: 'string'   },
	  { regex: new RegExp('\'[a-z0-9]\'', 'gm'),		            css: 'string' },			// strings
    { regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' }, // data type
	 	{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions' },
	 	{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' },
	 	{ regex: /::|_/gm,		css: 'keyword bold' },
    { regex: /=|\^|&amp;|&lt;|&gt;|\/|-|\+|\*|@/gm, css: 'color1' },
  ];
	// this.regexList = [
	// 	{ regex: new RegExp('^---.*$', 'gm'),	                  css: 'comments' },			// one line comments
	// 	{ regex: new RegExp('^\{-[\s\S]*?-}', 'gm'),		        css: 'comments' },			// multiline comments
	// 	{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
	// 	{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
	// 	{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' }, // data type
	// 	{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },
	// 	{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' },
	// 	{ regex: new RegExp(this.getKeywords(operators), 'gmi'),			css: 'color1' }			// operators and such
	// ];
};

SyntaxHighlighter.brushes.Haskell.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Haskell.aliases	= ['haskell', 'hs'];
