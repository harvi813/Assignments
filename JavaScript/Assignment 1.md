# Assignment: Introduction to JavaScript
---

## Section A: Short Answer Questions (1 Mark each)

****Q1.** What is JavaScript?**

Answer: JavaScript is a high-level, dynamically typed programming language used to make web pages interactive and dynamic. It can also be used for backend, mobile, desktop, and other applications.

****Q2.** Who created JavaScript and in which year?**

Answer: JavaScript was created by Brendan Eich in 1995 while he was working at Netscape.

****Q3.** What was the original name of JavaScript?**

Answer: Its original name was Mocha. It was later renamed LiveScript and then JavaScript.

****Q4.** Is JavaScript the same as Java? Give one major difference.**

Answer: No. JavaScript and Java are different programming languages. JavaScript is primarily dynamically typed and commonly used for web development, while Java is statically typed and commonly used for applications.

****Q5.** What does it mean when we say JavaScript is a **high-level** programming language?**

Answer: It means JavaScript provides simple, human-readable syntax and hides complex low-level computer operations from the programmer.

****Q6.** Is JavaScript a compiled language or an interpreted language? Explain briefly.**

Answer: JavaScript is traditionally described as an interpreted language, but modern JavaScript engines use Just-In-Time (JIT) compilation to improve performance.

****Q7.** Name the JavaScript engines used by the following browsers:**
- Google Chrome     
- Mozilla Firefox     
- Apple Safari
  
Answer:
- Google Chrome       -> V8
- Mozilla Firefox     -> SpiderMonkey
- Apple Safari        -> JavaScriptCore(JSC)       

****Q8.** What is **Dynamic Typing** in JavaScript?**

Answer: Dynamic typing means a variable's type is determined at runtime and the same variable can hold values of different types.

****Q9.** What is the main difference between a **static** website and a **dynamic** website?**

Answer: A static website generally displays fixed content, while a dynamic website can change its content or behavior based on user interaction, data, or other conditions.

****Q10.** Name the three pillars of Front-end Web Development and write one line about each.**

Answer:
1. HTML – Provides the structure and content of a webpage.
2. CSS – Controls the styling and visual appearance.
3. JavaScript – Adds behavior, logic, and interactivity.

****Q11.** What is the difference between Frontend and Backend?**

Answer: Frontend is the part of an application that users see and interact with, while Backend handles server-side logic, databases, authentication, and data processing.

****Q12.** What is Node.js?**

Answer: Node.js is a JavaScript runtime environment that allows JavaScript to run outside web browsers, particularly on servers.

****Q13.** Explain **ECMAScript**. What is its relation with JavaScript?**

Answer: ECMAScript is the standardized specification that defines the rules and features of the language. JavaScript is an implementation of ECMAScript with additional features provided by its environment.

---

## Section B: True or False  
(Write True or False. If False, correct the statement)

**1. JavaScript is a statically typed language.**

Answer: False.

**2. JavaScript can only run inside the browser.**
 
Answer: False.
   
**3. HTML is responsible for the behaviour of a webpage.**
    
Answer: False.
   
**4. Node.js allows JavaScript to run outside the browser.**

Answer: True.
   
**5. JavaScript is case-insensitive.**
   
Answer: False.
   
**6. `let name` and `let Name` are the same variable.**

Answer: False.
   
**7. ECMAScript is a programming language.**
    
Answer: False.
   
**8. React, Angular, and Vue.js are used for Backend development.**
    
Answer: False.
   

---

## Section C: Fill in the Blanks

**1. JavaScript was created by ______________ in the year ______________.
2. The three technologies used in Front-end development are __________, __________, and __________.
3. JavaScript engines: Chrome uses __________, Firefox uses __________.
4. In the restaurant analogy: Customer = __________, Waiter = __________, Chef = __________.
5. JavaScript file extension is __________.**

**Answer**

1. JavaScript was created by *Brendan Eich* in the year *1995*.

2. The three technologies used in Front-end development are *HTML*, *CSS*, and *JavaScript*.

3. JavaScript engines: Chrome uses *V8*, Firefox uses *SpiderMonkey*.

4. In the restaurant analogy:
Customer = *Frontend/User*,
Waiter = *API/Server communication*,
Chef = *Backend*

5. JavaScript file extension is *.js*.

---

## Section D: Conceptual Questions (2 Marks each)

**Q14. Differentiate between a **static website** and a **dynamic website**. Give one real-world example of each.**

Answer: 
| Static Website | Dynamic Website| 
| -------- | -------- | 
| Content is generally fixed.   | Content can change based on users, data, or conditions.   | 
| Usually simpler to develop.   | Usually requires more programming and often server/database interaction.  | 
| Example: simple portfolio or informational webpage.   | Example: Instagram, Amazon, or an online banking website. | 


**Q15. Explain any two features of JavaScript that make it suitable for creating interactive web pages.**

Answer:
1. Event Handling:
JavaScript can respond to events such as button clicks, mouse movements, keyboard input, and form submissions.
2. DOM Manipulation:
JavaScript can access and modify HTML elements dynamically. For example, it can change text, styles, attributes, or create new elements without reloading the entire page.

**Q16. List any four areas (apart from web browsers) where JavaScript is used today. Mention one popular framework/library for each (if applicable).**

Answer:
| Area | Example Framework/Technology| 
| -------- | -------- | 
| Backend/Server applications   | Node.js / Express.js | 
| Mobile applications   | React Native | 
| Desktop applications   | Electron | 
| AI/ML and data applications | TensorFlow.js


****Q17. What is the difference between writing JavaScript code:
- Inside an HTML file using `<script>` tag, and
- In an external `.js` file?  
Mention two advantages of using an external JavaScript file.**

Answer:
JavaScript can be written directly inside an HTML document using the <script> tag:
```html
<script>
    alert("Hello!");
</script>
```
Alternatively, JavaScript can be placed in a separate .js file:
```html
<script src="script.js"></script>
```
Advantages of an external JavaScript file:
1. Code reusability: The same JavaScript file can be linked to multiple HTML pages.
2. Better organization: HTML and JavaScript are separated, making the project easier to maintain.

**Q18. Explain the difference between Frontend and Backend using the **restaurant analogy** in your own words.**

Answer:
Imagine a website as a restaurant.
- Frontend = Dining area/menu: This is what the customer sees and interacts with, such as buttons, forms, images, and menus.
- Backend = Kitchen: It handles the work behind the scenes, such as processing requests, applying business logic, and communicating with databases.
- Customer = User: The user interacts with the frontend.
- Waiter/API = Communication: It carries requests and responses between the customer-facing part and the kitchen/backend.
Thus, the frontend handles the user experience, while the backend handles much of the processing and data management behind it.

**Q19. Why should a beginner learn JavaScript? Write at least 4 points.**

Answer:
A beginner should learn JavaScript because:
1. It is one of the major technologies used in web development.
2. It allows developers to create interactive and dynamic webpages.
3. It can be used for both frontend and backend development.
4. It has a large ecosystem containing libraries and frameworks such as React, Angular, and Vue.js.
5. It can also be used for mobile, desktop, and other applications.
6. JavaScript has a large developer community and many learning resources.

---

## Section E: Code-Based Questions (3 Marks each)

**Q20. Predict the output of the following code and explain why:**

```javascript
let value = 25;
console.log(typeof value);
value = "JavaScript";
console.log(typeof value);
value = false;
console.log(typeof value);
```
Answer:
number
string
boolean

Explanation:
JavaScript is dynamically typed, so the same variable can store values of different data types at different times.
- 25 → number
- "JavaScript" → string
- false → boolean
The typeof operator returns the type of the current value.

**Q21. Write a simple HTML + JavaScript program that displays an alert box with the message **"Welcome to JavaScript!"** when a button is clicked.**

Answer:
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Alert</title>
</head>
<body>

    <button onclick="showMessage()">Click Me</button>

    <script>
        function showMessage() {
            alert("Welcome to JavaScript!");
        }
    </script>

</body>
</html>
```

**Q22. Write JavaScript code to demonstrate **event-driven programming**. 
When a user clicks a button with id `"myBtn"`, the text of a paragraph with id `"demo"` should change to `"Button was clicked!"`.**

Answer:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Driven Programming</title>
</head>
<body>

    <button id="myBtn">Click Me</button>

    <p id="demo">Original text</p>

    <script>
        document.getElementById("myBtn").addEventListener("click", function() {
            document.getElementById("demo").textContent = "Button was clicked!";
        });
    </script>

</body>
</html>
```

---

## Section F: Practical / Application Based (5 Marks)

**Q23. Create a complete web page (HTML + JavaScript) that includes the following:

1. A heading: **"My First JavaScript Page"**
2. A button labeled **"Click Me"**
3. When the button is clicked:
   - Show an alert: `"Hello, B.Tech Student!"`
   - Change the background color of the page to light blue
4. Also print `"JavaScript is running successfully!"` in the browser console.

**Write the complete code (you can use Inline or External JavaScript).**


Answer:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript Page</title>
</head>

<body>

    <h1>My First JavaScript Page</h1>

    <button id="clickBtn">Click Me</button>

    <script>
        console.log("JavaScript is running successfully!");

        document.getElementById("clickBtn").addEventListener("click", function() {

            alert("Hello, B.Tech Student!");

            document.body.style.backgroundColor = "lightblue";

        });
    </script>

</body>
</html>
```
---

## Section G: Higher Order Thinking (Bonus - 3 Marks)

**Q24. JavaScript was originally created only for browsers. Today it is used in frontend, backend, mobile apps, desktop apps, and even AI/ML.  
In your own words, explain why JavaScript became so popular and multipurpose. Mention the role of **Node.js** and **ECMAScript** updates in this growth.**

Answer:
JavaScript became popular because it was initially designed to add interactivity to webpages, but its capabilities expanded significantly over time.
First, JavaScript became widely supported by web browsers, making it an important part of frontend development alongside HTML and CSS. The development of powerful libraries and frameworks such as React, Angular, and Vue.js further expanded its use.
Node.js was another major development because it allowed JavaScript to run outside the browser. This made it possible to use JavaScript for server-side and backend development, allowing developers to use the same language across the frontend and backend.
ECMAScript provides a standardized specification for JavaScript. Regular ECMAScript updates have introduced new language features and improvements, helping JavaScript evolve with modern development requirements.
As a result, JavaScript is now used in many areas, including:
- Frontend web development
- Backend/server development
- Mobile applications
- Desktop applications
- APIs and tools
- AI/ML applications
Therefore, JavaScript's browser support, large ecosystem, continuous language improvements, and Node.js runtime helped transform it from primarily a browser scripting language into a multipurpose programming language.
---
