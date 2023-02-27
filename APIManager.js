class APIManager {
  constructor() {
    this.data = {};
    this.renders = new Renderer();
  }

  loadData() {
    return $.get(`https://randomuser.me/api/?results=7`).then((randomUser) => {
      const firstName = randomUser.results[0].name.first;
      const lastName = randomUser.results[0].name.last;
      const city = randomUser.results[0].location.city;
      const state = randomUser.results[0].location.state;
      const picture = randomUser.results[0].picture.medium;

      this.data["firstName"] = firstName;
      this.data["lastName"] = lastName;
      this.data["city"] = city;
      this.data["state"] = state;
      this.data["picture"] = picture;

      this.renders.renderUser(firstName, lastName, city, state, picture);

      const friends = [];
      for (let i = 1; i < randomUser.results.length; i++) {
        const firstName = randomUser.results[i].name.first;
        const lastName = randomUser.results[i].name.last;
        let friendArrayObj = { firstName: firstName, lastName: lastName };
        friends.push(friendArrayObj);
        this.data["friends"] = friends;
      }

      this.renders.renderFriends([...friends]);

      return $.get(`https://api.kanye.rest/`).then((quoteRes) => {
        const quote = quoteRes.quote;
        this.data["quote"] = quote;

        this.renders.renderQuote(quote);

        return $.get(
          `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`
        ).then((aboutMe) => {
          const about = aboutMe;
          this.data["about"] = about;

          this.renders.renderAboutMe(about);

          let randomId = Math.floor(Math.random() * 949);
          return $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(
            (pokemonRes) => {
              let pokemonName = pokemonRes.name;
              let pokemonImg = pokemonRes.sprites.front_default;
              let pokemonUpperCase =
                pokemonName[0].toUpperCase() + pokemonName.substring(1);
              this.data["pokemonName"] = pokemonUpperCase;
              this.data["pokemonImg"] = pokemonImg;

              this.renders.renderPokemon(pokemonUpperCase, pokemonImg);
            }
          );
        });
      });
    });
  }
}
