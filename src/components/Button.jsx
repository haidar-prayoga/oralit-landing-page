const Button = ({ className, children }) => {
    return (
        <div>
            <button className={`${className} hover:bg-gray-800  py-2 px-4 rounded`}>
                {children}
                <span className="mx-2">
                    <i className="fa-solid fa-arrow-right"></i>
                </span>
            </button>
        </div >
    )
}
export default Button