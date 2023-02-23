const apiManager = new APIManager();

function display() {
  $(".user-container").empty();
  $(".quote-container").empty();
  $(".meat-container").empty();
  $(".friends-container").empty();
  $(".pokemon-container").empty();

  apiManager.loadData();
}
