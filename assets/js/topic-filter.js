(function () {
  var nav = document.querySelector(".topic-filter");
  if (!nav) return;

  var buttons = nav.querySelectorAll(".topic-button");
  var pubs = document.querySelectorAll(".publication[data-topics]");
  var groups = document.querySelectorAll(".publication-group, .publication-section");

  function apply(topic) {
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.topic === topic));
    });
    pubs.forEach(function (p) {
      p.hidden = topic !== "" && p.dataset.topics.split(" ").indexOf(topic) === -1;
    });
    groups.forEach(function (g) {
      g.hidden = !g.querySelector(".publication:not([hidden])");
    });

    var url = new URL(window.location.href);
    if (topic) url.searchParams.set("topic", topic);
    else url.searchParams.delete("topic");
    history.replaceState(null, "", url);
  }

  nav.addEventListener("click", function (e) {
    var button = e.target.closest(".topic-button");
    if (button) apply(button.dataset.topic);
  });

  var initial = new URLSearchParams(window.location.search).get("topic") || "";
  if (!nav.querySelector('[data-topic="' + initial + '"]')) initial = "";
  nav.hidden = false;
  apply(initial);
})();
