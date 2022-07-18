// 1 simple function 


const greet = function() {
  console.log("Halo!");
  console.log("Ayo belajar function!");
};

// Panggil function greet dibawah
greet();


// 2 mentapkan fuction 
const hello = function(){
  console.log("Halo!");
  console.log("Saya ferdiansyah");
};

hello();

// 3 arrow function 
const greet = () => {
  console.log("Halo!");
};

greet();

// 4 ARGUMEN 

const greet = (name) => {

  console.log(`halo ${name}`)
};
greet("Guru Domba");

// 5 fungsi dengan banyak argumen 

const add = (number1,number2) => {
  console.log(number1+number2);

};
add(5,7);

// 6 nilai return dalam fungsi 

const half = (number) => {
  return number / 2; // meruturn nilai tuh langsung 
};

const result = half(130);

console.log(`Separuh dari 130 adalah ${result}`);

// 7 nilai return boolean 
const check = (number) => {
  return number % 3 === 0;
};
if (check(123)) {
  console.log("Multiple of 3");
} else {
  console.log("Not a multiple of 3");
}

// 8 scope nilai const

const name="Ninja Ken";
const introduce = (name) => {

  console.log(`Saya ${name}`);
};
introduce("Guru Domba");

console.log(name);

// 9 get max 

const number1 = 103;
const number2 = 72;
const number3 = 189;

const getMax = (a,b,c) => {
  let max = a;
  if (b > max) {
    max = b;
  } if (c > max){
    max = c;
  }
  return max;
};
const max = getMax(number1,number2,number3);
console.log(`Nilai maksimum adalah ${max}`);


const dollar = 14000;
const peso = 1200; 

const hitungNilaiMataUang = (jumlahUang, mataUang) => {
  if(mataUang === "Dollar")  {
    console.log("Jumlah Uang Konversi USD TO IDR = Rp. " + (jumlahUang * dollar));
  } else if(mataUang === "Peso") {
    console.log("Jumlah Uang Konversi PESO TO IDR = Rp. " + (jumlahUang * peso));
  }
}

hitungNilaiMataUang(2, 'Dollar');
