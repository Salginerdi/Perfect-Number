// Mükemmel Sayı Uygulaması (6 - 28 - 496)

// Kural: Elimizdeki sayının bölenleri sayımızın iki katıysa bu sayıya mükemmel sayı denir.
// Örnek: 6 = 1,2,3,6 // 12=6.2 // 6 bir mükemmel sayıdır.
// Bir sayının tam bölünmesi için en fazla yarısına kadar gidebiliriz.

function isPerfectNumber(number) {
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }
  toplam += 1 + number;

  if (toplam == number * 2) {
    document.write("Bu bir mükemmel sayıdır!");
  } else {
    document.write("Bu sayı bir mükemmel sayı değildir!");
  }
}

isPerfectNumber(496);
