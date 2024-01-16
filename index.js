 // Define the data object for the expert system
 var data = {
    symptoms: ["fever", "cough", "sore-throat", "runny-nose", "headache", "loss-of-taste-or-smell"],
    rules: [
      {
        if: ["fever", "cough", "sore-throat", "loss-of-taste-or-smell"],
        then: "You may have COVID-19. Please consult a doctor and get tested."
      },
      {
        if: ["fever", "cough", "runny-nose"],
        then: "You may have a common cold. Drink plenty of fluids and rest."
      },
      {
        if: ["fever", "headache"],
        then: "You may have a fever. Take some paracetamol and monitor your temperature."
      },
      {
        if: ["sore-throat"],
        then: "You may have a sore throat. Gargle with salt water and avoid spicy foods."
      }
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
  