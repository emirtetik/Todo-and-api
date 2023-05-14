let url = "https://www.bilgisayargetigi.com";
let youtube = "Bilgisayar Genetiği";
let result;

//! 1- Karakter sayısı bul.
result = url.length;
result = youtube.length;
result = youtube.replace(" ", "").length; // (replace(" ", "")) bu ifadeyle string ifadelerin içindeki boşlukları alabılırsın

//! 2- Youtube değişkeni kaç karakterden oluşuyor
result = youtube.split(" ").length;   Array çevirdi ve boşluklardan itibaren kaç kelimeden oluştugunu buldu.
result = url.split(".").length;        Array çevirdi ve noktalardan itibaren kaç kelimeden oluştugunu buldu.              

//! 3- Kanal adı başlangıç kontrol
result = youtube.startsWith("rBilgisayar");bir string neyle başlıyosa true yada false ile onu şart ekleyebılırız.
result = url.startsWith("https");
if (result) {
  console.log("yapılacaklar.");
} else {
  console.log("false döndü");
}

//! 4- Kelime kontrolü
if (youtube.indexOf("Genetiği") > -1) {   indexOf ile kelime numara aratabılırız.
  console.log("çalıştı");
} else {
  console.log("çalışmadı");
}

//! 5- Url ve Youtube Değişken Birleştir
youtube = youtube.toLowerCase().replace(" ", "-"); kelime arasına boşluk yerine tire koyabılırız.
/* url = url.replace("com", "com/"); */            com buldu ve com/ şeklinde yazdırdık. 

let newUrl = url.replace(url, url + youtube);     url dedik ki url + youtubesin.
newUrl = `${url}/${youtube}`                      bir üstekini backtick ile kolaylıkla yapılabılır.

console.log(newUrl);


// let ile değişkenler değiştirlebilir ama const ile değiştiremessin 