import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button className="mt-10 ml-10 relative rounded-full border-2 border-stone-300 px-4 py-2 text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 
            before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-stone-300 before:transition-transform before:duration-300 before:rounded-full before:hover:scale-x-100
            hover:text-black hover:border-hidden" onClick={() => navigate("/kyle-wang")}>
            <div className="flex items-center justify-center">
                <GoArrowLeft />
                <span className="ml-2">
                    Back to Home
                </span>
            </div>                            
        </button>
    )
}

export default BackButton