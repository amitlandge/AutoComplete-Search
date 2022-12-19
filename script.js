let input = document.querySelector(".text");
let search = document.querySelector(".search");
let list = document.querySelector(".list");

let arr = [];
input.addEventListener("input", (e) => {
  let inputVal = e.target.value;
  if (inputVal) {
    arr = city_names.filter((item) => {
      return item.toLocaleLowerCase().startsWith(inputVal.toLocaleLowerCase());
    });

    arr = arr.map((item) => {
      return (item = "<li>" + item + "</li>");
    });
    list.classList.add("active");
    showData(arr);
    let dataList = document.querySelectorAll(".list>li");
    for (i = 0; i < dataList.length; i++) {
      dataList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    list.classList.remove("active");
  }
});
function select(item) {
  let selectedData = item.textContent;
  input.value = selectedData;
}

function showData(element) {
  let listItem;
  if (!element.length) {
    userVal = input.value;
    listItem = "<li>" + userVal + "</li>";
  } else {
    listItem = element.join("");
  }
  list.innerHTML = listItem;
}
