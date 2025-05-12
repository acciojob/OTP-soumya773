//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length === 1 && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }

    if (value.length > 1) {
      code.value = value[0];
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value === "" && idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });
});
