const Button = ({ className, children }) => {
    return (
        <div>
            <button className={`${className} hover:bg-green-600  py-2 px-4 rounded`}>
                {children}
            </button>
        </div >
    )
}
export default Button