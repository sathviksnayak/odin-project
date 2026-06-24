function analyzeArray(arr) {
  const sum = arr.reduce((total, current) => total + current, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export default analyzeArray;