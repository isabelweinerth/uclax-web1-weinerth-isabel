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

            <SingleEssay
                question={`Essay 5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <li>
                        In React, linking to resources can be approached in
                        different ways, and understanding the distinctions
                        between document-relative and root-relative paths is
                        essential. Document-relative links, demonstrated through
                        syntax like ./, involve referencing resources within the
                        same directory or navigating up levels with ../. This
                        method is context-dependent, meaning the path changes
                        based on the current document. Conversely, root-relative
                        paths in React use the @ symbol and consistently
                        originate from the root of the folder. Root-relative
                        paths provide a fixed, persistent path, making them
                        suitable for scenarios where the resource location is
                        constant. On the other hand, document-relative paths
                        offer flexibility, enabling resources to be
                        self-contained and adaptable to different directory
                        structures without breaking the link chain. The choice
                        between these approaches depends on the specific
                        requirements of the application – fixed paths favor
                        root-relative links, while dynamic or self-contained
                        resources benefit from document-relative paths.
                    </li>
                </ul>
            </SingleEssay>

            <SingleEssay
                question={`Essay 6: What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <li>
                        JPEG is a lossy compression format, meaning it
                        sacrifices some image quality to achieve smaller file
                        sizes. It uses a compression algorithm that removes
                        details that are less noticeable to the human eye.It is
                        suitable for photographs and images with gradients, as
                        it supports millions of colors. It does not support
                        transparency. JPEG is not suitable for images that
                        require a transparent background.
                    </li>

                    <li>
                        GIF is a lossless compression format, meaning it retains
                        all image information. However, it supports a maximum of
                        256 colors, leading to smaller file sizes compared to
                        formats like JPEG. It is limited to 256 colors, making
                        it suitable for simple graphics, logos, and images with
                        solid colors. GIF supports a single color to be fully
                        transparent, making it useful for creating simple
                        animations with transparent backgrounds.
                    </li>

                    <li>
                        PNG is a lossless compression format, preserving image
                        quality without sacrificing details. It uses a different
                        compression algorithm compared to GIF. It supports
                        millions of colors, suitable for photographs and images
                        with complex color variations. PNG supports full alpha
                        channel transparency, allowing for images with
                        transparent backgrounds.
                    </li>
                    <li>
                        SVG is a vector graphics format, representing images
                        using mathematical equations rather than pixels. SVG
                        images are resolution-independent and can be scaled to
                        any size without loss of quality. Ideal for logos,
                        icons, and graphics requiring flexibility in size. SVG
                        files are plain text and can be edited with a text
                        editor. They can be manipulated with CSS or JavaScript
                        and are suitable for animations. Generally smaller
                        compared to bitmap formats, especially for simple
                        graphics. However, for highly complex images, file sizes
                        can be larger than those of JPEG or PNG.
                    </li>
                </ul>
            </SingleEssay>

            <SingleEssay
                question={`Essay 7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <ul>
                    <li>
                        The Product Manager is responsible for the overall
                        vision and strategy of the product. They collaborate
                        with stakeholders, customers, and the development team
                        to define product goals, prioritize features, and ensure
                        the product aligns with the business objectives. Product
                        Managers bridge the gap between business needs and
                        technical implementation.
                    </li>

                    <li>
                        The Product Owner is a crucial role within the Agile
                        development team. They work closely with the Product
                        Manager and are responsible for translating high-level
                        product requirements into actionable tasks. The Product
                        Owner maintains the product backlog, prioritizes user
                        stories, and ensures that the team delivers value in
                        each iteration.
                    </li>

                    <li>
                        The Business Analyst plays a key role in understanding
                        business needs, eliciting and documenting requirements,
                        and facilitating communication between stakeholders and
                        the development team. They analyze processes, identify
                        opportunities for improvement, and contribute to
                        creating a shared understanding of project goals.
                    </li>

                    <li>
                        Scrum Master is a servant-leader who facilitates the
                        Scrum framework. They help the team understand and
                        follow Scrum practices, remove impediments, and foster a
                        collaborative and iterative development environment.
                        Scrum Masters also work to improve team efficiency and
                        ensure adherence to Agile principles.
                    </li>

                    <li>
                        UX Designers focus on creating a positive and meaningful
                        user experience for products. They conduct user
                        research, design interfaces, and ensure that the product
                        is intuitive and user-friendly. Collaboration with
                        Product Owners and Developers is crucial to align design
                        decisions with both business goals and technical
                        feasibility.
                    </li>

                    <li>
                        Developer/Engineer are responsible for implementing the
                        features and functionality outlined in the user stories.
                        They write code, follow best practices, and collaborate
                        with the team to deliver high-quality software.
                        Developers work closely with other roles to ensure that
                        technical solutions meet both user and business
                        requirements.
                    </li>

                    <li>
                        QA/SDET professionals are responsible for ensuring the
                        quality of the software through testing. They design
                        test cases, automate testing processes, and collaborate
                        with developers to identify and address issues. QA/SDET
                        roles play a vital part in maintaining product quality
                        throughout the development lifecycle.
                    </li>

                    <li>
                        DevOps is a culture and set of practices that aim to
                        bridge the gap between development and operations teams.
                        DevOps professionals work to automate processes, improve
                        collaboration, and streamline the delivery of software.
                        They focus on enhancing the efficiency, reliability, and
                        speed of the development and deployment pipeline.
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
