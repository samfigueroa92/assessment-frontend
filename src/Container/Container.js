import "./Container.css";

const Container = ({ center, children, scroll = true }) => {

    let classNames = ['Container'];

    if (center) {
        classNames.push('Container__center');
    };

    if (scroll) {
        classNames.push('Container__scroll');
    };

    return (
        <div className={classNames.join(' ')}>
            {children}
        </div>
    );
};

export default Container;