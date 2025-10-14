// -------- Profile Page Functionality --------
const editBtn = document.getElementById("editBtn");
if (editBtn) {
  editBtn.addEventListener("click", () => {
    const newBio = prompt("Enter your new bio:");
    if (newBio && newBio.trim() !== "") {
      editBtn.previousElementSibling.textContent = `Bio: ${newBio}`;
      alert("Bio updated successfully!");
    } else {
      alert("Bio cannot be empty.");
    }
  });
}

// -------- Activities Page Functionality --------
const addBtn = document.getElementById("addActivityBtn");
if (addBtn) {
  addBtn.addEventListener("click", () => {
    const input = document.getElementById("newActivity");
    const activityList = document.getElementById("activityList");

    if (input.value.trim() !== "") {
      const newItem = document.createElement("li");
      newItem.textContent = "📝 " + input.value;
      activityList.appendChild(newItem);
      input.value = "";
    } else {
      alert("Please enter an activity first.");
    }
  });
}
