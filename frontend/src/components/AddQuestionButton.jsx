import React, {useState} from "react";
import {Button, Fade, Menu, MenuItem} from "@mui/material";


export function AddQuestionButton(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <Button
            className="w-min"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
        >Frage hizufügen
        </Button>

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