// iki variabel primitif
const s = "halo"
console.log(typeof s);


//iki object
const s1 = new String('Hello');
console.log(typeof s1);


// iki object literal
const buku = {
    judul: 'dancok',
    penulis: 'toyol',
    tahun: '2020'
};
console.log(buku);


// iki object constructor
function Buku(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
const buku1 = new Buku('taek','ngeseng','2090');
console.log(buku1);


// iki constructor ben fungsi gamasuk ning properties
// makane disimpen ning prototype
Buku.prototype.ulasanBuku = function(){
    return `${this.title} ditulis oleh ${this.author} pada tahun ${this.year}`;
};
console.log(buku1.ulasanBuku());


// inheritance
function Majalah(title, author, year, month){
    Buku.call(this,title,author,year);
    this.month = month;
}
// inherit prototype
Majalah.prototype = Object.create(Buku.prototype);
const majalah1 = new Majalah('ngeseng','kali','2091','Mar');
console.log(majalah1.ulasanBuku());


// create object
const dancokMatamu = {
    getDancok: function(){
        return `${this.bgst} was ${this.ajg}`;
    }
};
const dancok1 = Object.create(dancokMatamu,{
    bgst: {value: 'Bajol'},
    ajg: {value: 'Impostor'}
});
console.log(dancok1);