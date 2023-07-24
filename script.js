let chooseFile = document.getElementById("upl");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let select = document.querySelectorAll("select");
let input = document.getElementById("input");
let output = document.getElementById("output");
let swap = document.getElementById("swap");
let inputCopy = document.getElementById("input-copy");
let outputCopy = document.getElementById("output-copy");
let inputAudio = document.getElementById("input-audio");
let outputAudio = document.getElementById("output-audio");

//Setting all the laguages in the options

select.forEach((e, id) => {
  languages.forEach((country) => {
    let selected;
    if (id == 0 && country.code == "en") {
      selected = "selected";
    } else if (id == 1 && country.code == "hi-IN") {
      selected = "selected";
    }
    let option = `<option value="${country.code}" ${selected}>${country.name} (${country.native})</option>`;
    e.insertAdjacentHTML("beforeend", option); // Adding option tag inside select tag
  });
});

//Main translate function by fetching tranalator API

const translate = () => {
  let text = input.value;
  let translateFrom = select[0].value;
  let translateTo = select[1].value;
  if(!text){return;}
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${translateFrom}&tl=${translateTo}&dt=t&q=${encodeURI(
    text
  )}`;
  if (input.value != "") {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        output.value = json[0].map((item) => item[0]).join("");
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    output.value = "";
  }
};

//call the translate function when select different language

select.forEach((e) => {
  e.addEventListener("change", translate);
});

//Set the input limit to 5000 words
input.addEventListener("input", (e) => {
  if (input.value.length > 5000) {
    input.value = input.value.slice(0, 5000);
  }
  translate();
});

//Setting the swap functions into the icon

swap.addEventListener("click", () => {
  let text = input.value;
  input.value = output.value;
  output.value = text;
  text = select[0].value;
  select[0].value = select[1].value;
  select[1].value = text;
  translate();
});

//Click the input field when clicking into the upload button
upload.onclick = () => {
  chooseFile.click();
};

//Adding the data into the textarea

chooseFile.addEventListener("change", (e) => {
  let file = e.target.files[0];
  if (
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type === "text/plain"
  ) {
    upload.innerHTML = file.name;
    setTimeout(() => {
      upload.innerHTML = `Upload <i class="fa-solid fa-cloud-arrow-up"></i>`;
    }, 5000);
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (el) => {
      input.innerText = el.target.result;
      translate();
    };
  } else {
    alert("Please Select a valid file type (pdf,msword,txt)");
  }
});

//Download funtion of the translated text;

download.addEventListener("click", (e) => {
  let outputText = output.value;
  if (outputText) {
    let blob = new Blob([outputText], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.download = `from-${select[0].value}-to-${select[1].value}.txt`;
    a.href = url;
    a.click();
    download.innerText = a.download;
    setTimeout(() => {
      download.innerHTML = `Download <i class="fa-solid fa-cloud-arrow-down"></i>`;
    }, 5000);
    a.remove();
  }
});

//function to copy the input and output text

inputCopy.onclick = () => {
  inputCopy.innerText = "Text Copied!";
  setTimeout(() => {
    inputCopy.innerText = "Copy Text";
  }, 900);
  navigator.clipboard.writeText(input.value);
};

outputCopy.onclick = () => {
  outputCopy.innerText = "Text Copied!";
  setTimeout(() => {
    outputCopy.innerText = "Copy Text";
  }, 900);
  navigator.clipboard.writeText(output.value);
};

//Covert both input and output text into the speech

inputAudio.onclick = () => {
  let speech = new SpeechSynthesisUtterance(input.value);
  speech.lang = select[0].value;
  speechSynthesis.speak(speech);
};

outputAudio.onclick = () => {
  let speech = new SpeechSynthesisUtterance(output.value);
  speech.lang = select[1].value;
  speechSynthesis.speak(speech);
};

let voices = [];
window.speechSynthesis.onvoiceschanged = ()=>{
  voices = window.speechSynthesis.getVoices();
  console.log(voices);
}