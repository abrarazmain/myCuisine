import React from "react";

const Blog = () => {
  return (
    <div>
      <section class="bg-white dark:bg-purple-400 my-12 rounded">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold  text-purple-600">
            Frequently asked questions
          </h2>
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg text-purple-700 font-bold ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-dark-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  The differences between uncontrolled and controlled
                  components?
                </h3>
                <p class="text-purple-100">
                  In React JS, components can also be classified as either
                  controlled or uncontrolled. Controlled components are those
                  that are fully controlled by the application's state, meaning
                  that their behavior and output can be managed and adjusted
                  through changes in the state. In contrast, uncontrolled
                  components are those that are driven by their internal state,
                  and their behavior and output cannot be controlled or adjusted
                  externally. <br /> <br />
                  Understanding the differences between controlled and
                  uncontrolled components is important for developing efficient
                  and effective React applications, as it can impact the
                  predictability and stability of the application. In general,
                  using controlled components can make the application more
                  predictable and easier to manage, while uncontrolled
                  components can be more flexible but may require additional
                  measures to ensure their stability and consistency. <br />
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg text-purple-700 font-bold ">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-dark-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How to validate React props using PropTypes?
                </h3>
                <p class="text-purple-100">
                  To use PropTypes in a component, I first need to import the
                  library at the top of my file. Then, I can define the expected
                  data types and any required props for the component. For
                  example, I might use PropTypes.string.isRequired to define a
                  required string prop, or PropTypes.number to define a prop
                  that should be a number. <br />
                  PropTypes also offers other validation options, such as
                  arrayOf, which allows me to define an array of a specific data
                  type, and shape, which lets me define an object with specific
                  key-value pairs and data types. Once I've defined my PropTypes
                  for a component, React will automatically validate the props
                  passed to the component and warn me of any errors or
                  mismatches.
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg  text-purple-700 font-bold">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Difference between nodeJS and expressJS?
                </h3>
                <p class="text-purple-100">
                  Node.js and Express.js are two popular technologies used for
                  building server-side applications using JavaScript. Node.js is
                  a server-side JavaScript runtime environment, while Express.js
                  is a web application framework built on top of Node.js. <br />{" "}
                  <br />
                  Node.js provides a runtime environment for executing
                  JavaScript code outside of a web browser, allowing developers
                  to build server-side applications using JavaScript. It
                  provides a number of built-in modules for file I/O,
                  networking, and other tasks commonly needed in server-side
                  applications. Node.js is highly scalable, efficient, and
                  provides non-blocking I/O, making it well-suited for building
                  large-scale, real-time applications. <br /> <br />
                  Express.js, on the other hand, is a web application framework
                  built on top of Node.js. It provides a set of tools and
                  conventions for building web applications, including routing,
                  middleware, and templating engines. Express.js makes it easier
                  for developers to build web applications by abstracting away
                  many of the low-level details involved in handling HTTP
                  requests and responses, and providing a higher-level, more
                  expressive API for building web applications.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg  text-purple-700 font-bold">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is a custom hook, and why will I create a custom hook?
                </h3>
                <p class="text-purple-100">
                  Custom hooks are a feature in React that allow developers to
                  reuse stateful logic across different components in a more
                  elegant and efficient way. A custom hook is essentially a
                  JavaScript function that uses React's built-in hooks (such as
                  useState or useEffect) to encapsulate and abstract away
                  complex logic, making it easier to share across different
                  components in a React application. <br /> <br />
                  There are several reasons why I might want to create a
                  custom hook. One common reason is to reduce code duplication
                  and improve the maintainability of my application. By
                  encapsulating complex logic in a custom hook, I can reuse
                  the same code across multiple components, rather than having
                  to copy and paste the same code in different places. This can
                  help keep my code DRY (Don't Repeat Yourself), and make it
                  easier to modify and update my code in the future. <br />
                  <br />
                  Overall, custom hooks are a powerful tool in React for
                  encapsulating and reusing stateful logic across different
                  components. By creating custom hooks, I can make your code
                  more efficient, maintainable, and expressive, and provide a
                  better developer experience for myself and others working on
                  my codebase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
