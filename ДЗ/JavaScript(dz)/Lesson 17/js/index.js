let array_dom = ["1", "2", "3", "sea", "user", 23, "22", 22, 33, "11", "look"];
let parent_dom = document.body;
let li = ["<li>", "</li>"];

array_dom.map(function(Item) {
  parent_dom.innerHTML += li[0] + Item + li[1];
});