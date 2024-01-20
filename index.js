 // Define the data object for the expert system
 var data = {
    symptoms: ["fever", "cough", "sore-throat", "runny-nose", "headache", "loss-of-taste-or-smell","cold","kidney"],
    rules: [
      {
        if: ["kidney"],
        then: " To maintain kidney health . keep active and fit and also manage you blood sugar dont smoke "
      },
      {
        if: ["loss-of-taste-or-smell"],
        then: " you may have COVID 19 so please be sure to check ones covid test and consult the doctor"
      },
      {
        if: ["cold"&&"cough"],
        then: " monitor the temperature. and use the cool mist humidifiers and get plenty of rest"
      },
      {
        if: ["fever"&&"headache"],
        then: " Take some paracetamol and monitor your temperature. drink some mint water to reduce the headache"
      },
      {
        if: ["cough"],
        then: "You may have a some fever and  cough. Take some paracetamol beacuse it may increase thr fever by the cough  drink the Hot Hot fluieds." 
      },
      {
        if: ["cough"&&"fever"],
        then: "You may have a some fever and  cough. use Paracetamol for pain and fever. ,Combination 'cough and cold' medicines Paracetamol is found in many cold and flu products, eg, Codral®, Coldrex® and Lemsip®.." 
      },
      {
        if: ["sore-throat"],
        then: "You may have a sore throat. Gargle with salt water and avoid spicy foods to reduce sore-throat."
      },
      {
        if: ["runny-nose"],
        then: "You may have a runny-nose. drink plenty of fluids,Hot teas ,Facial steam."
      },
      {
        if: ["headache"],
        then: "You may have a headche. to reduce the headache naturally drink-water, Take some high magnesium foods get sufficent sleep. Try essintial oils"
      },
    ]
  };
  // Define the function to diagnose the disease based on the user input and the rules
  function diagnose() {
    // Get the user input from the form
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var symptoms = [];
    for (var i = 0; i < data.symptoms.length; i++) {
      var symptom = document.getElementById(data.symptoms[i]);
      if (symptom.checked) {
        symptoms.push(symptom.value);
      }
    }
  
    // Validate the user input
    if (name == "" || age == "" || gender == "" || symptoms.length == 0) {
      alert("Please fill in all the required fields");
      return;
    }
  
    // Apply the rules to infer the diagnosis
    var diagnosis = "No disease found";
    for (var i = 0; i < data.rules.length; i++) {
      var rule = data.rules[i];
      if (symptoms.includes(...rule.if)) {
        diagnosis = rule.then; // Assign the value of the then property
        break; // Break the loop after finding a match
      }
    }
  
    // Display the result on the web page
    var result = document.getElementById("result"); // Get the result element
    result.innerHTML = ""; // Clear the previous content
    result.innerHTML += "<h3>Diagnosis Result</h3>"; // Add a heading
    result.innerHTML += "<p>Hello, " + name + ". You are " + age + " years old and your gender is " + gender + ".</p>"; // Add a paragraph with the user information
    result.innerHTML += "<p>You have the following symptoms: " + symptoms.join(", ") + ".</p>"; // Add a paragraph with the user symptoms
    result.innerHTML += "<p><strong>" + diagnosis + "</strong></p>"; // Add a paragraph with the diagnosis in bold
  }
  