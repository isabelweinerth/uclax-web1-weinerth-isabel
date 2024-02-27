import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Essay 1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <ul>
                    <li>
                        HTML, CSS, and JavaScript are three core technologies
                        used in web development that each serve a distinct
                        purpose in creating web pages. HTML is the foundational
                        language used to create the content of the webpage, and
                        can be thought of as defining the basic building blocks
                        such as the headings, paragraphs, hierarchies, and
                        structure of the content. CSS is the styling language
                        used to design the visual presentation of the webpage.
                        It allows the developer to define specific visual
                        elements of the webpage, such as color, font, size, and
                        positioning. JavaScript is the behavioral language that
                        adds interactive features to the webpage, allows it to
                        handle user input, manipulate the Document Object Model,
                        and communicate with servers. If we think about building
                        a website as building a house, each language fulfills a
                        specific part of the process. For instance, we can think
                        of HTML as the blueprint of the house that outlines the
                        structure of the house, and walls/bones of the house,
                        meaning the content of the house. CSS can be thought of
                        as the decorations or interior design of the house, as
                        it is responsible for the overall aesthetics. Lastly,
                        javascript can be thought of as the smart home system or
                        perhaps the heating/AC system in the house that brings
                        interactivity and functionality throughout the house
                        based on user input.
                    </li>
                </ul>
            </SingleEssay>

            <SingleEssay
                question={`Essay 2: What is the difference between Git and Github?`}
            >
                <ul>
                    <li>
                        While Git and Gitbhub are related, they serve different
                        purposes in the context of version control and
                        collaboration in software development. Git is a
                        distributed version control system (DVCS) that helps
                        track changes in source code during software
                        development. It allows multiple developers to work on a
                        project simultaneously without interfering with each
                        other and operates locally on a developer’s machine
                        while requiring no connection to a central server.
                        GitHub, on the other hand, is a web-based platform that
                        provides hosting for Git repositories. It adds a
                        centralized platform for collaboration, making it easier
                        for multiple developers to work on the same project,
                        track changes, and manage the workflow.
                    </li>

                    <li>
                        GitHub offers additional features beyond Git, including
                        issue tracking, project management tools, pull requests,
                        and more. GitHub also serves as a social platform for
                        developers to showcase their work, contribute to
                        open-source projects, and collaborate with others. In
                        summary, Git is the version control system that tracks
                        changes locally, while GitHub is a web-based platform
                        that provides hosting for Git repositories and adds
                        collaboration and project management features. There are
                        other platforms similar to GitHub, such as GitLab and
                        Bitbucket, each with its own set of features and
                        advantages.
                    </li>
                </ul>
            </SingleEssay>

            <SingleEssay
                question={`Essay 3: What is the difference between JQuery and React?`}
            >
                <ul>
                    <li>
                        jQuery and React are both JavaScript libraries, but they
                        serve different purposes and have distinct approaches to
                        building web applications. jQuery, known for its
                        simplicity, is primarily focused on simplifying DOM
                        manipulation and providing an easy-to-use syntax for
                        working with HTML documents. It allows developers to
                        perform tasks like selecting elements, handling events,
                        and creating animations efficiently.
                    </li>

                    <li>
                        On the other hand, React is designed specifically for
                        building dynamic user interfaces. It introduces a
                        component-based architecture, where UIs are composed of
                        reusable and modular components. React promotes a
                        declarative programming style, allowing developers to
                        describe how the UI should look based on the application
                        state, while it takes care of efficiently updating the
                        DOM through a virtual DOM. While jQuery is often chosen
                        for its simplicity and compatibility with older
                        browsers, React is preferred for larger, more complex
                        applications due to its component-based structure and
                        efficient rendering mechanisms.
                    </li>
                </ul>
            </SingleEssay>

            <SingleEssay
                question={`Essay 4: What is the difference between a Front-End and Back-End Developer?`}
            >
                <ul>
                    <li>
                        Front-end developers are responsible for crafting the
                        user-facing elements of a website or application. Using
                        languages like HTML for structuring content, CSS for
                        styling, and JavaScript for interactivity, they bring
                        designs to life and ensure a seamless and visually
                        appealing user experience. Front-end developers need to
                        be mindful of responsive design, ensuring that the
                        interface functions well across various devices and
                        screen sizes. Their work often involves collaborating
                        closely with UI/UX designers to translate design
                        concepts into functional and intuitive user interfaces
                        that engage and delight visitors.
                    </li>

                    <li>
                        On the other hand, back-end developers focus on the
                        server-side logic and infrastructure that powers the
                        functionality of a website or application. They use
                        server-side programming languages like Python, Java, or
                        PHP to handle data processing, business logic, and
                        communication with databases. Back-end developers play a
                        crucial role in ensuring the security and performance of
                        the application, implementing features such as user
                        authentication, authorization, and data storage. Their
                        work involves creating the backbone of the system,
                        allowing front-end elements to interact seamlessly with
                        the underlying data and business processes. Together,
                        front-end and back-end development form a collaborative
                        effort to build robust and fully functional web
                        applications.
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
