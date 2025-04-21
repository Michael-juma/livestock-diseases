import NavBar from "./NavBar"
export default function AllAbout() {
    const disease =[
        {
            name : "H5N1 Avian Influenza (Bird Flu)",
            image :
            "https://media.istockphoto.com/id/1440434242/video/sick-chickens-disease-outbreaks-symptoms-and-clinical-signs-with-high-mortality.jpg?s=640x640&k=20&c=2aP_DwbDfVdhOoSferoF3ccPltDwlQOvqU1trfoYwL8=",
        },
        {
            name : "African Swine Fever (ASF)",
            image :
            "https://media.istockphoto.com/id/470953896/photo/sick-pig-in-farm.jpg?b=1&s=612x612&w=0&k=20&c=31bVyhuomtHmmrPnu5O_r8cAh9sxuW5-vDalj7xhEhQ=",
        },
        {
            name : "Foot-and-Mouth Disease (FMD)",
            image :
            "",
        },
        {
            name : "Lumpy Skin Disease (LSD)",
            image :
            "",
        },
        {
            name : "H5N1 Avian Influenza (Bird Flu)",
            image :
            "",
        },
        {
            name : "Asiatic Redwater (Babesiosis)",
            image :
            "",
        },
        {
            name : "New World Screwworm",
            image :
            "",
        },
        {
            name : "Johne’s & Bang’s Disease (Brucellosis)",
            image :
            "",
        },
    ]
    const DiseasCard = ({ name, image }) => (
        <div className="border p-4 rounded shadow-md flex flex-col items-center">
            <img src={image} alt={name} className="h-40 w-full object-cover" />
            
                <h3 className="text-lg font-semibold">{name}</h3>
            
        </div>
    )

    

    return (
        <>
            <NavBar />
           <div>
                <h2 className="text-xl font-semibold mb-2">
                    All About Livestock Diseases
                </h2>
                <p>
                    This section provides a comprehensive overview of trending livestock
                    diseases, including their causes, symptoms, and treatment
                    options. Understanding these diseases is crucial for farmers
                    to maintain the health of their livestock and ensure food
                    safety.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {disease.map((disease) => (
                    <DiseasCard key={disease.name} {...disease} />
                ))}
           </div>
        </>
    )
}