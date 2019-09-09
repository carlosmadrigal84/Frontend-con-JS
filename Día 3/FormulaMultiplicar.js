

const data = [1, 2, 3, 4];

const multiplicar = value => item => {
    const result = item * value;
    return result;
};

const multiplicarPor2 = multiplicar(2);
const multiplicarPor5 = multiplicar(5);
const multiplicarPor7 = multiplicar(7);

const result = data.map(multiplicar);

console.log(result);
/*tenemos un array, el cual queremos multiplicar por un número

La función const mps multiplica el cada índice del array(con map)
por el valor que ponemos entre paréntesis en const multiplicarPor...*/