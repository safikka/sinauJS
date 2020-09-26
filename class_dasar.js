class Buku{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${this.year} years old`;
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore(){
        return 'Barnes & Noble';
    }
}

// object nya
const buku1 = new Buku('Haj','sda','2019');
buku1.revise('2090');
console.log(buku1);

// static 
console.log(Buku.topBookStore());

// subclass
class Majalah extends Buku{
    constructor(title, author, year, month){
        super(title, author, year); //nyeluk constructor class Buku gawe super
        this.month = month; //nambah properties month ning class Majalah
    }
}

const maj1 = new Majalah('kent','nigsing','2008','Jan');
console.log(maj1.getSummary());