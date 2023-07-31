import "./Error.css"

const Error = ({ error }) => {
    return (
        <div className="Error">
            <div className="Error__avatar">
            <img src="https://i.pinimg.com/originals/c4/52/f5/c452f5f7c0cbf9c723bc6f24e51fd041.png" alt="error" />
            </div>
            <div className="Error__text">
            Looks like something went wrong! 
            <br />
            Please try again.
            <br />
            Error message: {error}
            </div>
        </div>
    );
};

export default Error;