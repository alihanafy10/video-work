
  const lis = document.querySelectorAll(".under-div ul li");
  const contents = document.querySelectorAll(".content");

contents.forEach((el, idx) => {
    if (idx == 1 || idx == 2) {
          el.style.display ='none'
      }
  })

  lis.forEach((li, index) => {
      li.addEventListener("click", () => {
          lis.forEach((el) => {
            el.classList.remove("active");
        })
      contents.forEach((content) => {
        content.style.display = "none";
      });
      li.classList.add("active");
      contents[index].style.display = "block";
    });
  });


