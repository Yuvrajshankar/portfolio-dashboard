import { useState } from "react";
import Group from "../../assets/Group.svg";
import menu from "../../assets/menu.svg";
import cross from "../../assets/cross.svg";
import down from "../../assets/chevron-down.svg";
import right from "../../assets/chevron-right.svg";
import style from "./navbar.module.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(true);
    const [isSettingsOpen, setIsSettingsOpen] = useState(true);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleAdd = () => setIsAddOpen(!isAddOpen);
    const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

    return (
        <nav>
            <div className={style.left}>
                <img src={Group} alt="group logo" />
                <h3 className={style.logo}>Lease Pixie</h3>
            </div>
            <div className={style.right}>
                <img src={isMenuOpen ? cross : menu} alt={isMenuOpen ? "cross menu" : "menu"} onClick={toggleMenu} />
            </div>

            {isMenuOpen && (
                <div className={style.menu}>

                    {/* only display when width is less than 600px */}
                    <div className={style.mobilemenu}>
                        <div className={style.left}>
                            <img src={Group} alt="group logo" />
                            <h3 className={style.logo}>Lease Pixie</h3>
                        </div>
                        <div className={style.right}>
                            <img src={isMenuOpen ? cross : menu} alt={isMenuOpen ? "cross menu" : "menu"} onClick={toggleMenu} />
                        </div>
                    </div>
                    {/*  */}

                    <dl>
                        {/* Add Section */}

                        <dt onClick={toggleAdd} className={style.menuTerm}>
                            Add{" "}
                            <img
                                src={isAddOpen ? down : right}
                                alt="toggle"
                                className={style.chevronIcon}
                            />
                        </dt>
                        {isAddOpen && (
                            <>
                                <dd>User</dd>
                                <dd>Property</dd>
                                <dd>Portfolio</dd>
                            </>
                        )}


                        {/* Settings Section */}
                        <dt onClick={toggleSettings} className={style.menuTerm}>
                            Settings{" "}
                            <img
                                src={isSettingsOpen ? down : right}
                                alt="toggle"
                                className={style.chevronIcon}
                            />
                        </dt>
                        {isSettingsOpen && (
                            <>
                                <dd>User</dd>
                                <dd>Portfolio</dd>
                            </>
                        )}
                    </dl>

                    <div className={style.signOut}>Sign out</div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;