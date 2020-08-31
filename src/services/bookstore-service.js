
export default class BookstoreService {
 data = [
   {
    id: 1,
    title: 'React in action',
    author: 'Mark Tilens Tomas',
    price: 1000,
    coverImage: "https://miro.medium.com/max/1106/1*LBGsC4QJxR0Jcqrk2WmDpw.png"
  },
  {
    id: 2,
    title: 'Vue in action',
    author: 'Erik Hanchett',
    price: 1521,
    coverImage: "https://www.programwitherik.com/content/images/2018/05/Hanchett-Vue-MEAP-HI.png"
  },
  {
    id: 3,
    title: 'Redux in action',
    author: 'Marc Garreau',
    price: 2153,
    coverImage: "https://skladchik.com/attachments/garreau-redux-meap-hi-jpg.333541/"
  }
];

  getBooks() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    })
  }
}