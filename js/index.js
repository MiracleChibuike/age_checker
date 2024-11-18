let title = document.getElementById("Age_calc");
title.textContent = "Age Calculator";
title.style.textAlign = "center";

// Container for Year input
let year_Input = document.getElementById("year_Input");

// Container for Month input
let month_Input = document.getElementById("month_Input");

console.log(year_Input);
console.log(month_Input);

// For Answer
let display_Ans = document.getElementById("displaY_Data");

const run_calculation = () => {
  const current_Time = new Date();

  let year = parseInt(year_Input.value);
  let month = parseInt(month_Input.value);

  let current_Year = current_Time.getFullYear();
  let current_Month = current_Time.getMonth() + 1;

  // Conditioning for checking
  if (year_Input.value === "" || month_Input.value === "") {
    alert("Please enter your birth month and year");
  } else if (year >= current_Year || month < 1 || month > 12) {
    // alert("")
    display_Ans.innerHTML = "Invalid Month or year entered";
    display_Ans.style.color = "#502020";
  } else {
    // const nex_Line = <br></br>
    const EvaLuate_Year = current_Year - year_Input.value;
    const Evauate_Month = current_Month - month_Input.value;
    display_Ans.innerHTML = `You are ${EvaLuate_Year} year(s) <br> and ${Evauate_Month} month(s) old`;
    display_Ans.style.color = "#f3f3f3";
    display_Ans.style.textAlign = "center";
    display_Ans.style.wordBreak = "10";
  }

  year_Input.value = "";
  month_Input.value = "";

  // console.log(year);
  // console.log(month)
  // let year_Checker = curr

  // console.log(current_Year);
  // console.log(current_Month);
};

const check_Age = document.getElementById("check_Data");
check_Age.addEventListener("click", run_calculation);
