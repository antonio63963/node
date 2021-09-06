const  express = require('express');
const  router = express.Router();
const { getAllBooks, insertGenre, deleteGenre } = require('../controllers/book');


// const user1 = {
//   author: ['6134996677f648686e9ee7c7'],
//   genre: ['6134a04c60de4e15a6e086b5', '6134a04c60de4e15a6e086b8'],
//   title: 'У КОГО КАКАЯ ЖОПА',
//   description: `Жопу морковка растила в земле —
//   теперь эта жопа у нас на столе!`,
//   pic: "https://balka-book.com/files/2020/05_25/12_09/u_files_store_6_4931.jpg"
// }
// const user3 = {
//   author: ['6134a4cebb009e11c3bdfb7a'],
//   genre: ['6134a04c60de4e15a6e086b2', '6134a04c60de4e15a6e086b3'],
//   title: 'ЛИСЬЯ НОРА. КНИГА 1',
//   description: `«Лисья нора» повествует о команде «Лисов» - игроков экси (вымышленный спорт), которые, будучи отбросами в жизни, пытаются подняться со дна турнирной таблицы и выиграть чемпионат страны. Главный герой, Нил Джостен, скрывается от своего темного прошлого, однако, став частью команды, вынужден сражаться не только с соперниками, но и с новоиспеченными товарищами, каждый из которых хранит свои секреты.`,
//   pic: "https://lavkababuin.com/image/cache/alias/lisbya-nora-904240/lisbya-nora-904240-main-1000x1000.jpg"
// }
// const user2 = {
//   author: ['6134996677f648686e9ee7c6', '6134996677f648686e9ee7c5'],
//   title: 'ПЯТЬ НОЧЕЙ У ФРЕДДИ. НЕПРАВИЛЬНЫЕ',
//   description: `Пять ночей у Фредди. Серебряные глаза «Пять ночей у Фредди. Серебряные глаза» - популярная онлайн-игра, завоевавшая сердца пользователей. Одноименный роман-ужастик Скотта Коутона в стиле фэнтези захватывает читателя с первых строчек. Читателя окутывает искусно созданная атмосфера, он становится участником, увлекается интригой сюжета и неожиданной развязкой. Первая книга дилогии. Пять ночей у Фредди. Неправильные Книга «Пять ночей у Фредди. Неправильные» Скотта Коутона - заряд адреналина. Она основана на одноименной компьютерной игре в жанре ужасов. Игра заслужила высокие оценки поклонников жанра. Фантастический роман приближает читателя к ощущениям главных героев, позволяет понять дух игры, узнать, что случилось ранее. Подробнее: https://lavkababuin.com/pyatb-nochey-u-freddi-nepravilbnye-617336/`,
//   pic: "https://lavkababuin.com/image/cache/alias/pyatb-nochey-u-freddi-nepravilbnye-617336/pyatb-nochey-u-freddi-nepravilbnye-617336-main-1000x1000.jpg"
// }
// pushBook(user1);
// pushBook(user2);
// pushBook(user3);
/* GET home page. */
router.get('/', async (req, res, next) => {
  const books = await getAllBooks();
  
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');
  // deleteGenre('6134a4cebb009e11c3bdfb7a');

// console.log(await getBookById('6134a4cebb009e11c3bdfb7b'));
  // insertGenre('61360cf92919f91cdca7adc7', ['6134a04c60de4e15a6e086b7', '6134a04c60de4e15a6e086b8'])
  
  res.render('index', { title: 'Book\'s Hell', books});
});

module.exports = router;
