import React from 'react';
import Pdf from "react-to-pdf"
const ref = React.createRef();

const Blog = () => {
    return (

        <div className='max-w-3xl mx-auto my-10 md:my-20'>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary'>Generate Pdf</button>}
            </Pdf>
            <p className='text-center text-primary'><small>tap/click on the question to see the answers</small></p>
            <div ref={ref}>
                <div className="collapse my-5 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary  peer-checked:text-secondary-content">
                        Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary  peer-checked:text-secondary-content">
                        <p>controlled component's state and behavior controlled by their parent component.
                            controlled components rely on props passed down from the parent component to update their state and behavior.
                            <br /> <br />
                            Uncontrolled components refer to components that manage their own state and behaviour.
                        </p>
                    </div>
                </div>
                <div className="collapse my-5 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>When some of the props are passed with an invalid type, we get the warnings on js console. <br /> <br />
                            After specifying the validation patterns, we will set the App.defaultProps.</p>
                    </div>
                </div>
                <div className="collapse my-5 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>Express is a minimal and flexible node. js web application framework,
                            providing a set of features for building single and multi-page, and hybrid web applications.
                            <br /> <br />
                            Node.js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast,
                            scalable network applications".</p>
                    </div>
                </div>
                <div className="collapse my-5 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                        <p>Custom Hook is a function whose name starts with ”use” and that may call other Hooks.
                            <br /> <br />
                            We create custom hooks for code reusability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;