import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import NonCredlyBadge from "../elements/NonCredlyBadge";
import Resume from "../../resume.json";

function buildBadges(certificates){
    let credlyBadges = []
    let columnSize = 12 / certificates.length;
    let columnClass = "column has-text-centered is-" + columnSize;
    certificates.forEach((cert, index) => {
        let credlyUrl = 'www.credly.com';
        let hint = index;

        if(!cert.url.includes(credlyUrl)){
            credlyBadges.push(
                <div key={hint} className={columnClass}>
                    <NonCredlyBadge
                        width="120"
                        height="120"
                        name={cert.name}
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
                <div key={hint} className={columnClass}>
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
            <div className="container">
                <h1 className="title">Certifications</h1>
                <div className="columns is-centered">
                    {buildBadges(Resume.certificates)}
                </div>
            </div>
        </section>
    )
}

export default Certifications;