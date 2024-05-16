import React from 'react'

function Map() {
    return (
        <>
            <div className="map fix" style={{ background: "#F5F5F5" }}>
                <div className="container-flud">
                    <div className="row">
                        <div className="col-lg-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.6046079439834!2d23.472169576178644!3d46.73325967112307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47491024c214a46b%3A0xab604bca8fa67650!2sStr.%20Teilor%2023a%2C%20Flore%C8%99ti%20407280!5e0!3m2!1sro!2sro!4v1715885042665!5m2!1sro!2sro"
                             width="600" height="450" style={{ border: "0" }} loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map