# s14 - Bootstrap Introduction and Simple Styles

## Activity - 1 (Quiz)

[s14 - Bootstrap Quiz 1](https://forms.gle/dmtqaUQaCCxxxFfg8)

## Activity - 2

**Implement Bootstrap** and **apply classes to HTML elements** in order to **create/replicate a simple portfolio.**

#### Activity Instructions  

#### Member 1:
1. In the **S14** folder, 
	- Add a **.gitignore fil**e with the following content:
		- /node_modules
		- .DS_Store
	- Create an **activity folder.**
		- **Copy** the **template** provided by your Instructor and **paste** it in the in the **index.html** file.
	- **Update** your **local groupwork git repository** and **push to git** with the commit message of **Add template code s14.**

2. **Apply Bootstrap to the project** by adding **all the dependencies.**

3. **Add bootstrap classes** to the element with **id “navbar”** to:  
	- Add a bootstrap class to **fix the nav element at the top of the page** 
	- Add a bootstrap class to add a **blue bg color to the navbar element**  
	- Add **padding to the navbar element** using bootstrap classes  
	- Add a bootstrap class to element with id “navbar” to **center the links and text inside the navbar**

#### Member 2:
4. Add a **bootstrap class to links** in the navbar:  
	- Add a bootstrap class to the **links that will remove the text-decoration of each link.**

5. Add **bootstrap classes to the element** with **id “about-me”:** 
	- Add a **bootstrap class to the about-me section** which will **center all the text/inline elements inside it.**  
	- Add a **bootstrap class to the about-me section** to add a **margin at the top.**

6. Add a **margin bootstrap class to center** the **profile div that contains the picture and developer name.**

#### Member 3:
7. Add **bootstrap classes to the profilePicture** element:
	- Add a **bootstrap class to the profilePicture** element to **round the picture.**
	- Add a **bootstrap class to the profilePicture** to **disallow it from overflowing.**

8. Add **bootstrap classes to the profileText** element:
	- Add a **margin at the top of the profileText div** element
	- Add a **blue border at the bottom of the h2 inside the profileText div** using bootstrap classes.

9. Add **bootstrap classes to the element** with **id “about-me”:**
	- Add a **margin at the top of the h4** inside the **profileText div.**
	- Add a **bootstrap class to the h4** inside the **profileText** div to **transform the text to uppercase.**
	- Add a bootstrap class to **center the introduction paragraph element.**
	- Add bootstrap class to **add a margin at the top of the introduction paragraph element.**

![s14_1_expected_output](./images/s14_1.png)

#### Member 4:
10. Add **bootstrap classes to the element** with **id “projects”** to:
	- Add a bootstrap class to the **projects section** which will **center all the text/inline elements inside it.**
	- Add a bootstrap class to the **projects section** which will add a **gray background color.**
	- Add a bootstrap class to the **projects section** which will add a **padding inside the element.**

11. Add **bootstrap classes to the element** with **id “footer”** to:
	- Align **text to center.**
	- Add **primary bootstrap color as background color.**
	- Add a **size 3 bootstrap padding to all sides.**
	- Color the **text as white**

#### Member 5:
12. Add a bootstrap class to the **divs inside the projects section:**
	- Add a bootstrap class to the **divs inside the projects section** which will **display each as inline-block.**
	- Add a bootstrap class to the **divs inside the projects section** which will **round the corners of the element.**
	- Add a bootstrap class to the **divs inside the projects section** which will **add a padding inside the element.**

13. Add a bootstrap class to the **divs inside the projects section:**
	- Add a bootstrap class to the **divs inside the projects section** which will make the **text light or white inside the element.**
	- Add a bootstrap class to the **divs inside the projects section** which will make the **background dark inside the element.**
	- Add a bootstrap class to the **divs inside the projects section** which will **add margins on the left and right side of each divs.**   
	- Add a bootstrap class to the **img element** inside each **div** to disallow it from overflowing.
	- Add a bootstrap class to the **h3 element inside each div add a margin at the top of the element.**
	- Add a bootstrap class to the **p element inside each div add a margin at the top of the element.**

![s14_2_expected_output](./images/s14_2.png)

#### All Members:
14. **Check** out to your own git branch with `git checkout -b <branchName>.`

15. **Update** your **local groupwork** git repository and **push to git** with the commit message of **Add activity code s12.**

16. **Add** the **sessions** repo link in **Boodle for s12.**

---

## Activity Template  
```html
<!DOCTYPE HTML>
<html>
    <head>
        <!-- Add mobile responsive meta tag. -->
        <!-- Mobile Responsive Meta Tag -->

        <!-- Add bootstrap css -->
        <!-- Bootstrap Link -->

        <title>Developer Portfolio</title>

    </head>
    <body>

        <!-- Navbar -->
        <!-- This div/nav element contains 3 links to home, aboutme and projects section -->
        <!-- Add a bootstrap class to fix the nav element at the top of the page. -->
        <!-- Add a bootstrap class to add a blue bg color to the navbar element-->
        <!-- Add padding to the navbar element using bootstrap classes-->
        <!-- Add a bootstrap class to center the links in the navbar -->
        <!-- Add a bootstrap class to the links that will remove the text-decoration of each link. -->
        <!-- Add margin on the left-side of the links -->
        <div id="navbar">

            <a href="">
                Home
            </a>
            <a href="">
                About Me
            </a>
            <a href="">
                Projects
            </a>

        </div>
        <!-- End of Navbar -->

        <!-- About Me -->
        <!-- Add a bootstrap class to the aboutme section which will center all the text/inline elements inside it. -->
        <div id="about-me">
            <!-- Add a bootstrap class to center the div that contains the picture and developer name.-->
            <div id="profile" style="width: 25%;">
                <!-- Add a bootstrap class to the profilePicture element to round the picture. -->
                <!-- Add a bootstrap class to the profilePicture to disallow it from overflowing. -->
                <img id="profilePicture"src="https://i.guim.co.uk/img/media/3656ae6ea2209d4561caf04fa9f172a519908ca3/0_28_2318_1391/master/2318.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=afcc355f47876bc495cdc3c902639bae"/>
                <!-- Add a margin at the top of the profileText div element -->
                <div id="profileText">
                     <!-- Add a blue border at the bottom of the h2 inside the profileText div using bootstrap classes. -->           
                    <h2>
                        Ada Lovelace
                    </h2>
                    <!-- Add a margin at the top of the h4 inside the profileText div. -->
                    <!-- Add a bootstrap class to the h4 inside the profileText div to tranform the text to uppercase. -->
                    <h4>Full-Stack Web Developer</h4>
                </div>
                
            </div>
            <!-- Add a bootstrap class to center the introduction paragraph element.-->
            <!-- Add bootstrap class to add a margin at the top of the introduction paragraph element. -->
            <p id="introduction"style="width: 50%;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

        </div>
        <!-- End of About Me -->

        <!-- Projects -->
        <!-- Add a bootstrap class to the projects section which will center all the text/inline elements inside it. -->
        <!-- Add a bootstrap class to the projects section which will add a gray background color. -->
        <!-- Add a bootstrap class to the projects section which will add a padding inside the element. -->
        <div id="projects" style="padding: 3rem; margin-bottom: 3rem;">

            <!-- Add a bootstrap class to the divs inside the projects section which will display each as inline-block. -->
            <!-- Add a bootstrap class to the divs inside the projects section which will round the corners of the element. -->
            <!-- Add a bootstrap class to the divs inside the projects section which will add a padding inside the element. -->
            <!-- Add a bootstrap class to the divs inside the projects section which will make the text light or white inside the element. -->
            <!-- Add a bootstrap class to the divs inside the projects section which will make the background dark inside the element. --> 
            <!-- Add a bootstrap class to the divs inside the projects section which will add margins between each divs. -->                        
            <div style="width: 25%;">
                <!-- Add a bootstrap class to the img element inside each div to disallow it from overflowing. -->
                <!-- Add a bootstrap class to the h3 element inside each div add a margin at the top of the element. -->
                <!-- Add a bootstrap class to the p element inside each div add a margin at the top of the element. -->
                <img src="https://getbootstrap.com/docs/4.0/examples/screenshots/album.png">
                <h3>My First Project</h3>
                <p>A simple project made from HTML</p>
            </div>
            <div style="width: 25%;">
                <img src="https://getbootstrap.com/docs/4.0/examples/screenshots/jumbotron.png">
                <h3>My Second Project</h3>
                <p>A simple project made from CSS</p>
            </div>
            <div style="width: 25%;">
                <img src="https://getbootstrap.com/docs/4.0/examples/screenshots/carousel.png">
                <h3>My Third Project</h3>
                <p>A simple Bootstrap project.</p>
            </div>
        </div>
        <!-- End of Projects -->

        <!-- Footer -->
        <!-- Add a bootstrap class to fix the footer element at the bottom of the page. -->
        <!-- Add a bootstrap class to add a blue bg color to the footer element-->
        <!-- Add padding to the footer element using bootstrap classes-->
        <!-- Add a bootstrap class to center the text in the footer -->
        <!-- Add a bootstrap class to color the text as light/white in the footer -->
        <div id="footer">
            <p>All assets are used for educational purposes only.</p>
        </div>
        <!-- End of Footer -->
        
        <!-- Add bootstrap js -->
        <!-- Bootstrap Script -->

        <!-- End of Bootstrap Script -->

    </body>
</html>
```

---

### Activity References
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/5.0/utilities/text/)
- [What is Mobile First Design](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00)
- [Bootstrap Border Utility Classes](https://getbootstrap.com/docs/5.0/utilities/borders/)
- [Bootstrap Sizing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/sizing/)
- [HTML Blocks - tutorialspoint](https://www.tutorialspoint.com/html/html_blocks.htm)
- [HTML Blocks - w3schools](https://www.w3schools.com/html/html_blocks.asp)
- [HTML Elements](https://developer.mozilla.org/en-US/docs/Glossary/Element)
- [Bootstrap Position Utility Classes](https://getbootstrap.com/docs/5.0/utilities/position/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/5.0/utilities/spacing/)
- [Bootstrap Display Utility Classes](https://getbootstrap.com/docs/5.0/utilities/display/)
- [Bootstrap Image Utility Classes](https://getbootstrap.com/docs/5.0/content/images/)