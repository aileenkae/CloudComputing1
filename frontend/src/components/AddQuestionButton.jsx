import React, {useState} from "react";
import {Button, Fade, Menu, MenuItem} from "@mui/material";

// This function returns a button that opens a dropdown menu with options to add different types of questions
export function AddQuestionButton(props) {
    // state to keep track of whether the menu is open or closed
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // function to open the menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // function to close the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        {/* button that opens the menu */}
        <Button
            className="w-min"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
        >Frage hizufügen
        </Button>
        
        {/* menu that appears when the button is clicked */}
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <MenuItem onClick={() => props.onClick('multiline')}>
                Multiline
            </MenuItem>
            <MenuItem onClick={() => props.onClick('singleline')}>
                Singleline
            </MenuItem>
            <MenuItem onClick={() => props.onClick('radiobutton')}>
                Radiobutton
            </MenuItem>
        </Menu>
        </>
    );
}