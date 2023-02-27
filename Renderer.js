class Renderer {
  renderUser(firstName, lastName, city, state, picture) {
    let userData = { firstName, lastName, city, state, picture };

    const source = $("#user-data").html();
    const template = Handlebars.compile(source);
    const newHTML = template(userData);
    $(".user-container").append(newHTML);
  }

  renderFriends(friends) {
    let friendData = { friends };

    const source = $("#friends-data").html();
    const template = Handlebars.compile(source);
    const newHTML = template(friendData);
    $(".friends-container").append(newHTML);
  }

  renderQuote(quote) {
    let quoteData = { quote };

    const source = $("#quote-data").html();
    const template = Handlebars.compile(source);
    const newHTML = template(quoteData);
    $(".quote-container").append(newHTML);
  }

  renderAboutMe(about) {
    let aboutData = { about };

    const source = $("#about-data").html();
    const template = Handlebars.compile(source);
    const newHTML = template(aboutData);
    $(".meat-container").append(newHTML);
  }

  renderPokemon(pokemonName, pokemonImg) {
    let pokemonData = { pokemonName, pokemonImg };

    const source = $("#pokemon-data").html();
    const template = Handlebars.compile(source);
    const newHTML = template(pokemonData);
    $(".pokemon-container").append(newHTML);
  }
}
