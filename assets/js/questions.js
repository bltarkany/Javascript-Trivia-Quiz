const questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<scripting>', '<js>', '<javascript>', '<script>'],
        answer: '<script>'
    },{
        question: 'Where is the correct place to insert a JavaScript?',
        choices: ['The <body> section', 'Both the <head> section adn the <body> section are correct>', 'The <head> section', 'Nowhere'],
        answer: 'Both the <head> section adn the <body> section are correct>'
    },{
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['<script name="xxx.js">', '<script href="xxx.js">', '<script type="xxx.js">', '<script src="xxx.js">'],
        answer: '<script src="xxx.js">'
    },{
        question: 'How do you write "Hello World" in an alert box?',
        choices: ['alertBox("Hello World");', 'msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");'],
        answer: 'alert("Hello World");'
    },{
        question: 'How do you create a function in JavaScript?',
        choices: ['function myFunction()', 'function = myFunction()', 'function:myFunction()', 'function{myFunction()}'],
        answer: 'function myFunction()'
    },{
        question: 'How do you call a function named "myFunction"?',
        choices: ['call function myFunction()', 'myFunction()', 'call myFunction()', 'callback myFunction()'],
        answer: 'myFunction()'
    },{
        question: 'How to write an IF statement in JavaScript?',
        choices: ['if i == 5', 'if (i == 5)', 'if i == 5 then', 'if i = 5 then'],
        answer: 'if (i == 5)'
    },{
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        choices: ['if i =! 5 then', 'if (i <> 5)', 'if (i != 5)', 'if i <> 5'],
        answer: 'if (i != 5)'
    },{
        question: 'How does a FOR loop start?',
        choices: ['for i = 1 to 5', 'for (i = 0; i <= 5)', 'for (i <= 5; i++)', 'for (i = 0; i <= 5; i++)'],
        answer: 'for (i = 0; i <= 5; i++)'
    },{
        question: 'How can you add a comment in a JavaScript?',
        choices: ['//This is a comment', '/* this is a comment */', '<!--This is a comment-->', 'This is a comment'],
        answer: '//This is a comment'
    }
];