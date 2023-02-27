class Renderer {
  constructor() {
    const sourceUser = $("#user-data").html();
    this.userTemplate = Handlebars.compile(sourceUser);
    const sourceFriends = $("#friends-data").html();
    this.friendsTemplate = Handlebars.compile(sourceFriends);
    const sourceQuote = $("#quote-data").html();
    this.quoteTemplate = Handlebars.compile(sourceQuote);
    const sourceAbout = $("#about-data").html();
    this.aboutTemplate = Handlebars.compile(sourceAbout);
    const sourcePokemon = $("#pokemon-data").html();
    this.pokemonTemplate = Handlebars.compile(sourcePokemon);
  }

  renderUser(firstName, lastName, city, state, picture) {
    let userData = { firstName, lastName, city, state, picture };
    const newHTML = this.userTemplate(userData);
    $(".user-container").append(newHTML);
  }

  renderFriends(friends) {
    let friendData = { friends };
    const newHTML = this.friendsTemplate(friendData);
    $(".friends-container").append(newHTML);
  }

  renderQuote(quote) {
    let quoteData = { quote };
    const newHTML = this.quoteTemplate(quoteData);
    $(".quote-container").append(newHTML);
  }

  renderAboutMe(about) {
    let aboutData = { about };
    const newHTML = this.aboutTemplate(aboutData);
    $(".meat-container").append(newHTML);
  }

  renderPokemon(pokemonName, pokemonImg) {
    let pokemonData = { pokemonName, pokemonImg };
    const newHTML = this.pokemonTemplate(pokemonData);
    $(".pokemon-container").append(newHTML);
  }
}
