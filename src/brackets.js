/* eslint-disable  complexity, fp/no-let, sonarjs/cognitive-complexity */
function isBalanced(input) {
  const stack = [];

  for (let item in input) {
    const bracket = input[item];
    const lastIndex = stack.length - 1;
    if (bracket === '[') {
      stack.push(bracket);
    } else if (bracket === '{') {
      stack.push(bracket);
    } else if (bracket === '<') {
      stack.push(bracket);
    } else if (bracket === '(') {
      stack.push(bracket);
    } else if (bracket === ']') {
      if (stack[lastIndex] === '[') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (bracket === '}') {
      if (stack[lastIndex] === '{') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (bracket === '>') {
      if (stack[lastIndex] === '<') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (bracket === ')') {
      if (stack[lastIndex] === '(') {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else {
      continue;
    }
  }

  return stack.length === 0;
}

console.log('(([])) is balanced', isBalanced('(([]))'));
console.log('([]) is balanced', isBalanced('([])'));
console.log('([>]) is balanced', isBalanced('([>])'));
console.log('([]>) is balanced', isBalanced('([]>)'));
console.log('([][]) is balanced', isBalanced('([][])'));
console.log('([][]<>)() is balanced', isBalanced('([][]<>)()'));
console.log('([][]<>)(abc) is balanced', isBalanced('([][]<>)(abc)'));
