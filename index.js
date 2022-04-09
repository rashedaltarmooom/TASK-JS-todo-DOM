// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

function addTask() {
  const Chosen_Category = getSelectedCategoryById(CATEGORY_SELECTOR);
  const Title = getNewTaskText();
  // continue the code here
  let number_id = tasks.length; 

  let object_task = {
    id: number_id,
    title: Title,
    category: Chosen_Category,
    done: false,
  };

  tasks.push(object_task); 
  renderTasks(tasks, "tasks-list"); 
  //alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}


function addCategory() {
  const Updated_Category = getUpdated_CategoryText();
  let Updated_Categorysml = Updated_Category.toLowerCase();
  let categoriessml = categories.map((category) => category.toLowerCase());
  let indx = categoriessml.indexOf(Updated_Categorysml);
  // continue the code here
  categories.push(Updated_Category); ///
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  
  alert(`New category was added: ${Updated_Category}`);
}


function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  if (checked) {
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.done = true;
        // indexoftask = index;
        // console.log("index", indexoftask);
      }
    });
  } else {
    {
      tasks.forEach((task) => {
        if (task.id === taskId) {
          task.done = false;
          // indexoftask = index;
          // console.log("index", indexoftask);
        }
      });
    }
  }
  if (getFilteredDone()) {
    let checkedtasks = tasks.filter(
      (task) => task.done === true && task.category === selectedCategory
    );
    renderTasks(checkedtasks, "tasks-list");
  } else {
    let unChecked = tasks.filter(
      (task) => task.done === false && task.category === selectedCategory
    );
    renderTasks(unChecked, "tasks-list");
  }
}


function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  if (done === true) {
    let donefiltered = tasks.filter(
      (task) => task.category === selectedCategory && task.done === true
    );

    renderTasks(donefiltered, "tasks-list");
  } else {
    let filtered = tasks.filter(
      (task) => task.category === selectedCategory && task.done === false
    );

    renderTasks(filtered, "tasks-list");
  }
}