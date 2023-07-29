import "./Error.css"

const Error = ({error}) => {
    return (
        <div className="Error">
            <div>
            Oops... something went wrong!
            </div>
            <div>
            Error message: {error}
            </div>
        </div>
    );
};

export default Error;