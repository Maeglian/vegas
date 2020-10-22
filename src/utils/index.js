function searchInGamesRes(games, query) {
  return games.filter((game) => {
    const str = query.trim().toLowerCase();
    const title = game.item_title.toLowerCase();
    return title.includes(str);
  });
}

export default searchInGamesRes;
