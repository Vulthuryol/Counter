let add = document.getElementById("increase");
let sub = document.getElementById("subtract");
let no = document.getElementById("num");
let count = 0;

add.onclick = function() {
  count += 1;
  no.innerHTML = count;
};

sub.onclick = function() {
  count -= 1;
  no.innerHTML = count;
  if (count <= 0) {
    no.innerHTML = 0;
    count = 0;
  };
};
