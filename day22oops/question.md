
# Factory Function and Constructor Function Questions

## Factory Function Questions

1. **E-commerce Inventory Management:**  
   *Question:* Imagine you have an e-commerce site that sells electronics. You need a function that creates a product with properties like `name`, `price`, and `category`. Create a factory function called `createProduct` that returns an object for each product.
   *Hint:* Think of the factory function as a "blueprint" that creates different product objects with specified properties.

2. **Student Report Card Generator:**  
   *Question:* Write a factory function `createReportCard` that generates a report card for each student with properties such as `name`, `grade`, and `subject`. This function should return an object for each student.
   *Hint:* Each student can have different grades, so think about how each object represents an individual student's information.

3. **Car Rental Service:**  
   *Question:* Suppose you run a car rental service. Write a factory function `createCar` that creates a car object with properties like `model`, `rentalRate`, and `availability`. Use this to generate car instances for each vehicle in your fleet.
   *Hint:* Each car will have different values for these properties, so use a function that takes parameters for each property.

4. **Library Book Generator:**  
   *Question:* Create a factory function `createBook` that generates a book object with properties such as `title`, `author`, `ISBN`, and `availableCopies`. Use this function to add books to a library inventory.
   *Hint:* Each book should have unique details, so think about how to pass these as arguments to the function.

5. **Employee Badge Creator:**  
   *Question:* Your company needs to generate badges for employees with properties like `name`, `id`, `department`, and `position`. Write a factory function `createEmployeeBadge` that returns an employee badge object.
   *Hint:* Use parameters in your factory function to create unique badge information for each employee.

---

## Constructor Function Questions

1. **Hotel Room Reservation System:**  
   *Question:* Suppose you’re building a reservation system for a hotel. Write a constructor function `Room` that creates a room object with properties like `roomNumber`, `type`, `price`, and `isAvailable`. 
   *Hint:* Use the `new` keyword to create new room objects.

2. **Online Course Management:**  
   *Question:* Design a constructor function `Course` that generates an object representing an online course with properties like `title`, `instructor`, `duration`, and `studentsEnrolled`.
   *Hint:* Use the `this` keyword to assign values to each property.

3. **Digital Wallet:**  
   *Question:* Create a constructor function `Wallet` that initializes a wallet object with properties like `ownerName`, `balance`, and `currency`. Include a method that allows the owner to add money to the wallet.
   *Hint:* Add methods inside the constructor to handle wallet operations.

4. **City Weather Tracker:**  
   *Question:* Write a constructor function `Weather` that creates a weather object with properties like `city`, `temperature`, `humidity`, and `forecast`. Create a method to update the forecast.
   *Hint:* Use the constructor to set initial values, and add a method to update properties.

5. **School Student Enrolment:**  
   *Question:* Write a constructor function `Student` that generates a student object with properties `name`, `rollNumber`, `grade`, and `subjects`. Add a method to add new subjects to the student’s subject list.
   *Hint:* Use the `new` keyword to create each student, and add a method to modify the object’s state.
