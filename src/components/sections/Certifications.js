import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import NonCredlyBadge from "../elements/NonCredlyBadge";
import Resume from "../../resume.json";

function buildBadges(certificates){
    let credlyBadges = []
    let columnSize = 12 / certificates.length;
    let columnClass = "column has-text-centered is-" + columnSize;
    certificates.forEach((cert, index) => {
        if(!cert.url.includes("www.credly.com")){
            credlyBadges.push(
                <div key={index} className={columnClass}>
                    <NonCredlyBadge
                        width="120"
                        height="120"
                        profile={cert.url}
                        imageId={cert.x_imageId}
                        imageName={cert.x_imageName}
                        badgeId={cert.x_badgeId}
                        badgeName={cert.name + " by " + cert.issuer}
                    />
                </div>
            )
        }else{
            credlyBadges.push(
                <div key={index} className={columnClass}>
                    <CredlyBadge
                        width="186"
                        height="186"
                        profile={cert.url}
                        imageId={cert.x_imageId}
                        imageName={cert.x_imageName}
                        badgeId={cert.x_badgeId}
                        badgeName={cert.name + " by " + cert.issuer}
                    />
                </div>
            )
        }
    });
    return credlyBadges
}

function Certifications(props) {
    return (
        <section className="section" id="certifications">
            <h1 className="title">Certifications</h1>
            <div className="container">
                <div className="columns is-centered">
                    {buildBadges(Resume.certificates)}
                </div>
            </div>
        </section>
    )
}

export default Certifications;