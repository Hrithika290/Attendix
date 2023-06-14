"use strict";
let menu, animate;
! function() {
    let e = document.querySelectorAll("#layout-menu"),
        t = (e.forEach(function(e) {
            menu = new Menu(e, {
                orientation: "vertical",
                closeChildren: !1
            }), window.Helpers.scrollToActive(animate = !1), window.Helpers.mainMenu = menu
        }), document.querySelectorAll(".layout-menu-toggle"));
    t.forEach(e => {
        e.addEventListener("click", e => {
            e.preventDefault(), window.Helpers.toggleCollapsed()
        })
    });
    if (document.getElementById("layout-menu")) {
        var l = document.getElementById("layout-menu");
        var o = function() {
            Helpers.isSmallScreen() || document.querySelector(".layout-menu-toggle").classList.add("d-block")
        };
        let e = null;
        l.onmouseenter = function() {
            e = Helpers.isSmallScreen() ? setTimeout(o, 0) : setTimeout(o, 300)
        }, l.onmouseleave = function() {
            document.querySelector(".layout-menu-toggle").classList.remove("d-block"), clearTimeout(e)
        }
    }
    let n = document.getElementsByClassName("menu-inner"),
        s = document.getElementsByClassName("menu-inner-shadow")[0];
    0 < n.length && s && n[0].addEventListener("ps-scroll-y", function() {
        this.querySelector(".ps__thumb-y").offsetTop ? s.style.display = "block" : s.style.display = "none"
    });

    function c(e) {
        "show.bs.collapse" == e.type || "show.bs.collapse" == e.type ? e.target.closest(".accordion-item").classList.add("active") : e.target.closest(".accordion-item").classList.remove("active")
    }
    const i = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
        a = (i.map(function(e) {
            return new bootstrap.Tooltip(e)
        }), [].slice.call(document.querySelectorAll(".accordion")));
    a.map(function(e) {
        e.addEventListener("show.bs.collapse", c), e.addEventListener("hide.bs.collapse", c)
    });
    window.Helpers.setAutoUpdate(!0), window.Helpers.initPasswordToggle(), window.Helpers.initSpeechToText(), window.Helpers.isSmallScreen() || window.Helpers.setCollapsed(!0, !1)
}();


function toggleFields(radio) {
  var additionalFields = document.getElementById("additionalFields");
  
  if (radio.value === "option1") {
    additionalFields.style.display = "none";
  } else {
    additionalFields.style.display = "block";
  }
}

const selectedDateInput = document.getElementById("selected-date");
const datePickerOverlay = document.querySelector(".date-picker-overlay");
const dateGrid = document.querySelector(".date-grid");

selectedDateInput.addEventListener("focus", function () {
  datePickerOverlay.style.display = "block";
});

selectedDateInput.addEventListener("blur", function () {
  datePickerOverlay.style.display = "none";
});

// Generate date cells for the current month
function generateDateCells() {
  dateGrid.innerHTML = "";

  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const cell = document.createElement("div");
    cell.classList.add("date-cell");
    cell.textContent = i;

    cell.addEventListener("click", function () {
      selectedDateInput.value = i;
      datePickerOverlay.style.display = "none";
    });

    dateGrid.appendChild(cell);
  }
}

generateDateCells();







// add staff js
function sevenhost() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("emergency-contact");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}




// $(function () {
//   $("#spouse-name").hide();
//   $('input:radio[name=maritalStatus]').change(function(){
//     if($(this).val() == "married"){
//       $("#spouse-name").show();
//     } else {
//       $("#spouse-name").hide();
//     }
//   });
// });

// marriage radio
function marriageField(radio) {
  var spouseName = document.getElementById("spouseName");
  
  if (radio.value === "unmarried") {
    spouseName.style.display = "none";
  } else {
    spouseName.style.display = "block";
  }
}



















