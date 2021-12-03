import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import WcIcon from "@mui/icons-material/Wc";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import Link from "next/link";

export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 260,
                bgcolor: "#FFF",
                height: "100vh",
                position: "sticky",
                top: 0,
            }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </ListSubheader>
            }
        >
            <Link href='/statistic'>
                <a>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </a>
            </Link>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='Visualization' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <Link href='/statistic/Age'>
                        <a>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <DataUsageIcon />
                                </ListItemIcon>
                                <ListItemText primary='Age' />
                            </ListItemButton>
                        </a>
                    </Link>

                    <Link href='/statistic/Gender'>
                        <a>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <WcIcon />
                                </ListItemIcon>
                                <ListItemText primary='Gender' />
                            </ListItemButton>
                        </a>
                    </Link>

                    <Link href='/statistic/Date'>
                        <a>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <BloodtypeIcon />
                                </ListItemIcon>
                                <ListItemText primary='Time' />
                            </ListItemButton>
                        </a>
                    </Link>
                </List>
            </Collapse>
        </List>
    );
}
