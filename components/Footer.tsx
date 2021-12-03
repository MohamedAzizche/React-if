import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
    return (
        <div style={{ background: "#011e3b", padding: "20px" }}>
            <p style={{ color: "white", fontSize: "40px", textAlign: "center" }}>
                N'hésitez pas de nous contacter
            </p>
            <hr style={{ color: "white", width: "600px" }} />
            <div style={{ textAlign: "center" }}>
                <a>
                    <FacebookIcon style={{ color: "white", margin: "5px", fontSize: "30px" }} />
                </a>
                <a>
                    <EmailIcon style={{ color: "white", margin: "5px", fontSize: "30px" }} />
                </a>
                <a>
                    <InstagramIcon style={{ color: "white", margin: "5px", fontSize: "30px" }} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
