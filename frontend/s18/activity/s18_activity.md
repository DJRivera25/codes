# s18 - Bootstrap - Components

## Activity - 1 (Quiz)

[s18 - Bootstrap Quiz 1](https://forms.gle/GKBZUmc8L6MiYMTu7)

## Activity - 2

Together with your groupmates, create a website for a company with **landing, about, projects, FAQs, and contact section**.

### Activity Instructions  

#### Member 1:
1. In the s18 folder, create an activity folder.
    - Create an activity folder.
    - Create a new index.html file with the HTML structure
    - Add the page title and the Bootstrap CSS and JS dependencies.
    - Add a div with class container-fluid.
2. Update your local groupwork git repository and push to git with the commit message of Add template code s18.
3. Add a responsive bootstrap navbar with links to sections of the page:
    - A link to landing (Home)
    - A link to about (About)
    - A link to projects (Projects)
    - A link to services (Services)
    - A link to frequently asked questions (FAQs)
    - A link to contact (Contact)
    - Ensure that the navbar is NOT inside the container.
4. Inside the container, Add a div with class row and id, “landing”
    - Inside the div should contain at least:
      - An image of your company logo
      - An h1 with your company name
      - A p to describe your company
      - A call to action button to your projects.

#### Member 2:
5. Inside the container, Add a div with class row and id, “about”
    - Div should contain at least:
        - An image related to your company
        - An h1 for About
        - An h3 for mission
        - An h3 for vision
        - Two paragraph elements for mission and vision each.

6. Inside the container, Add a div with class row and id, “projects”
    - Div should contain at least:
        - A carousel with 3 images related to projects of the company.
        - Projects div should not display on smallest screen but appear from medium screen as block.

#### Member 3:
7. Inside the container, Add a div with class row and id, “services”
- Div should contain at least:
    - 3 Divs with class, card.
        - Each card should contain:
            - An image of the service
            - An h5 with the name of the service
            - A paragraph element with short description of the service.

8. Inside the container, Add a div with class row and id, “faqs”
    - Div should contain at least:
        - 3 accordion with frequently asked questions.

#### Member 4:
9. Inside the container, Add a div with class row and id, “social”
    - Div should contain at least:
        - 4 images of social media 

10. Inside the container, Add a div with class row and id, “map”
    - Div should contain at least:
        - A google map embed of company.
        - Any location is ok.
        - Ensure it is SFW.

#### Member 5:
11. Inside the container, Add a div with class row and id, “contact”
    - Div should contain at least:
        - A form with inputs
        - A button which displays a modal on click.

12. The form will accept the following fields:
    - Name (text input)
    - Email Address (email input)
    - Contact Number (number input)
    - Concern (select)
    - Message (textarea)
    - Add a button to the form.
        - Add the correct bootstrap class to the button to allow the button to work with the modal.
    - Add an id to the form: “form-col”

13. Add a Modal Component to the portfolio that opens when the form button is pressed.
    - Make sure to add an id called modalDiv to the modal div.
    - Make sure the form button is type button so that the modal can work.

#### All Members:
14. Check out to your own git branch with git checkout -b <branchName>
15. Update your local groupwork git repository and push to git with the commit message of Add activity code s18.
16. Add the sessions repo link in Boodle for s18.
---

### Expected Activity Output:
-![s17_1_expected_output](./images/s17_1.png)
-![s17_2_expected_output](./images/s17_2.png)

## Activity Template  
**This activity has no template.**

---

### Activity References
- [Bootstrap CSS Framework](https://getbootstrap.com/)
- [Introduction to Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Bootstrap local vs. CDN](https://www.belugacdn.com/bootstrap-local-vs-cdn/)
- [Responsive Meta Tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)
- [Bootstrap Navbar Component](https://getbootstrap.com/docs/4.6/components/navbar/)
- [Auto Indent On Sublime Text 3](https://stackoverflow.com/questions/44803547/autoindent-on-sublime-text)
- [How To Automatically Reindent Code With Sublime Text 3](https://shibulijack.wordpress.com/2015/05/11/how-to-automatically-reindent-code-with-sublime-text-3/)
- [Boostrap Color Utility Classes](https://getbootstrap.com/docs/4.6/utilities/colors/)
- [Bootstrap Spacing Utility Classes](https://getbootstrap.com/docs/4.6/utilities/spacing/)
- [Bootstrap Containers](https://getbootstrap.com/docs/4.6/layout/overview/#containers)
- [Bootstrap Grid System classes](https://getbootstrap.com/docs/4.0/layout/grid/)
- [Bootstrap Text Utility Classes](https://getbootstrap.com/docs/4.6/utilities/text/)
- [Bootstrap Collapse Component](https://getbootstrap.com/docs/4.6/components/collapse/#accordion-example)
- [Bootstrap Display Utility Classes](https://getbootstrap.com/docs/4.0/utilities/display/)
- [Bootstrap Carousel Component](https://getbootstrap.com/docs/4.6/components/carousel/)
- [How Do You Decrease Carousel Size](https://forum.bootstrapstudio.io/t/how-do-you-decrease-carousel-size/5109)
- [Place Kitten](https://placekitten.com/)
- [Place Bear](https://placebear.com/)
- [Bootstrap Card Component](https://getbootstrap.com/docs/4.6/components/card/)
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Bootstrap Flex Classes](https://getbootstrap.com/docs/4.0/utilities/flex/)
- [Bootstrap Form Component](https://getbootstrap.com/docs/4.6/components/forms/)
- [Bootstrap Modal Component](https://getbootstrap.com/docs/4.6/components/modal/)
