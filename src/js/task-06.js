const refs = {
  input: document.querySelector("#validation-input"),
};

function upDate(ad, rem) {
  refs.input.classList.add(ad);
  refs.input.classList.remove(rem);
}

refs.input.addEventListener("blur", (e) => {
  if (e.target.value.length === +refs.input.getAttribute("data-length")) {
    upDate("valid", "invalid");
  } else {
    upDate("invalid", "valid");
  }
});
