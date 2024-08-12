import React from "react";
import {Button} from "../ui/button";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <nav className="flex">
                    <Link to="/" style={{ marginRight: '16px' }}>
                        <Button variant="outline">Home</Button>
                    </Link>
                    <Link to="/board/list">
                        <Button variant="outline">Board</Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header