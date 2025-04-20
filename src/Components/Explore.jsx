import NavBar from "./NavBar"
export default function AllAbout() {

    return (
        <>
            <NavBar />
            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3x1 front bold mb-6 text-center">
                    TRENDING DISEASES
                </h1>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="card shadow" style={{ width: '30rem' }}>
                        <div className="card-body text-center">
                            <h5 className="card-title mb-3">Trending Diseases</h5>
                            <img src="https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/FMD/FMD_003.jpg" alt="Disease" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}