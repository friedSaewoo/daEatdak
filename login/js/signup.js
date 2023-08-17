function handleEmailSelect(selectElement) {
    var email2Input = selectElement.nextElementSibling.querySelector('input[name="email2_input"]');
    var directOption = selectElement.querySelector('option[value="direct"]');
    
    if (selectElement.value === "direct") {
        email2Input.style.display = "inline-block";
        email2Input.value = ""; // Clear any existing value
        email2Input.removeAttribute("readonly");
        directOption.textContent = ""; // Hide the "직접입력" option text
    } else {
        email2Input.style.display = "none";
        email2Input.setAttribute("readonly", "readonly");
        directOption.textContent = "직접입력"; // Show the "직접입력" option text
    }
}