# mileston3class Todo {
    constructor(taskID, taskName, taskListTopic, categoryID, dueDate, status) {
      this.taskID = taskID;
      this.taskName = taskName;
      this.taskListTopic = taskListTopic;
      this.categoryID = categoryID;
      this.dueDate = dueDate;
      this.status = status;
    }
  
    // getters
    getTaskID() {
      return this.taskID;
    }
  
    getTaskName() {
      return this.taskName;
    }
  
    getTaskListTopic() {
      return this.taskListTopic;
    }
  
    getCategoryID() {
      return this.categoryID;
    }
  
    getDueDate() {
      return this.dueDate;
    }
  
    getStatus() {
      return this.status;
    }
  
    // setters
    setTaskID(taskID) {
      this.taskID = taskID;
    }
  
    setTaskName(taskName) {
      this.taskName = taskName;
    }
  
    setTaskListTopic(taskListTopic) {
      this.taskListTopic = taskListTopic;
    }
  
    setCategoryID(categoryID) {
      this.categoryID = categoryID;
    }
  
    setDueDate(dueDate) {
      this.dueDate = dueDate;
    }
  
    setStatus(status) {
      this.status = status;
    }
  }
  export default Todo;
