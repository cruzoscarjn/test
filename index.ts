

function test(k: number, key: string): string {
  const cleanedKey = key.replace(/-/g, '');
  let formattedKey = '';

  const isEven = cleanedKey.length % k === 0;
  const operand = isEven ? 0 : 1;

  for (let i = cleanedKey.length - 1; i >= 0; i--) {
    if( (i + operand) % k === 0 && i !== cleanedKey.length - 1 && i !== 0) {
      formattedKey = '-' + cleanedKey[i].toUpperCase() + formattedKey;
    } else {
      formattedKey = cleanedKey[i].toUpperCase() + formattedKey;
    }
  }

  return formattedKey;
}


console.log('RESULT:', test(2, '2-5g-3-J')); // Expected input; 2-5g-3-J  output: "2-5G-3J"
console.log('RESULT:', test(4, '5F3Z-2e-9-w')); // Expected input; 5F3Z-2e-9-w output: "5F3Z-2E9W"
