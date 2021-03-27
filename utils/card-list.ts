type CardType = {
  mark: string;
  num: number;
};

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

export const cardList = cardGenerator();
