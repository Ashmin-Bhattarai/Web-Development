bgColorPicker = document.querySelector("input[name = 'bgColorPicker']");
textColorPicker = document.querySelector("input[name = 'textColorPicker']");
bgColorText = document.querySelector("#bgColorText");
fontColorText = document.querySelector("#fontColorText");

bgColorPicker.value = "#ffffff";
bgColorText.innerHTML = "#ffffff";

textColorPicker.value = "#000000";
fontColorText.innerHTML = "#000000";


bgColorPicker.addEventListener('change', function (e) {
    e.preventDefault()
    bgCP = bgColorPicker.value;
    bgColorText.innerHTML = `${bgCP}`;
    document.body.style.backgroundColor = `${bgCP}`;
});

textColorPicker.addEventListener('change', function (e) {
    e.preventDefault()
    textCP = textColorPicker.value;
    fontColorText.innerHTML = `${textCP}`;
    document.body.style.color = `${textCP}`;
});

