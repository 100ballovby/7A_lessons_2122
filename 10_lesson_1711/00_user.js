/*
1) alert(message) - выводит сообщение в окошке
2) prompt(question, default) - пользовательский ввод
3) confirm(message) - подтверждение действия (возвращает true/false)
*/

alert('Hello, world!');

let name = prompt('Whats ur name?', '')
alert('Hello, ' + name + '!')

let boss = confirm('You are boss??', '')
alert(boss)
// confirm всегда возвращает логическое значение

