type CardType = {
  mark: string;
  num: number;
};

// TODO 出力時にrandomにしておく
// Fisher–Yatesアルゴリズムを用いる

const cardGenerator = () => {
  const result: CardType[] = [];
  const marks = ["♠️", "❤️", "♣️", "♦︎"];

  for (let i = 1; i < 14; i++) {
    marks.map((mark) => {
      const createdCard = { mark: mark, num: i };
      result.push(createdCard);
    });
  }
  //   card content log
  //   console.log("cards", result);
  return result;
};

const randomCardList = cardGenerator();

for (var i = randomCardList.length - 1; i > 0; i--) {
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = randomCardList[i];
  randomCardList[i] = randomCardList[r];
  randomCardList[r] = tmp;
}

// console.log("random::", randomCardList);

// テスト用
const testList = [
  { mark: "❤️", num: 10 },
  { mark: "❤️", num: 12 },
  { mark: "❤️", num: 10 },
  { mark: "❤️", num: 11 },
];

export const cardList = testList;

// export const cardList = randomCardList;
