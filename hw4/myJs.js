fetch("https://ajax.test-danit.com/api/swapi/films")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      document.write(
        "</br>" +
          "</br>" +
          "Title:" +
          " " +
          data[i].name +
          "</br>" +
          "</br>" +
          "Characters: " +
          " " +
          "</br>" +
          data[i].characters +
          "</br>" +
          "</br>" +
          "Episode_id:" +
          " " +
          data[i].episodeId +
          "</br>" +
          "Opening_crawl:" +
          " " +
          data[i].openingCrawl +
          "</br>" +
          "</br>" +
          "</br>" +
          "__________________________________"
      );
    }
  });
