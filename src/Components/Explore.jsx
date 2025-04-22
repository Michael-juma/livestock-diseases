import NavBar from "./NavBar";

export default function AllAbout() {
  const disease = [
    {
      name: "H5N1 Avian Influenza (Bird Flu)",
      image:
        "https://media.istockphoto.com/id/1440434242/video/sick-chickens-disease-outbreaks-symptoms-and-clinical-signs-with-high-mortality.jpg?s=640x640&k=20&c=2aP_DwbDfVdhOoSferoF3ccPltDwlQOvqU1trfoYwL8=",
    },
    {
      name: "African Swine Fever (ASF)",
      image:
        "https://media.istockphoto.com/id/470953896/photo/sick-pig-in-farm.jpg?b=1&s=612x612&w=0&k=20&c=31bVyhuomtHmmrPnu5O_r8cAh9sxuW5-vDalj7xhEhQ=",
    },
    {
      name: "Foot-and-Mouth Disease (FMD)",
      image: "https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/FMD/FMD_006sm.jpg",
    },
    {
      name: "Lumpy Skin Disease (LSD)",
      image: "https://media.istockphoto.com/id/1427853618/photo/lumpy-skin-disease-in-india-cow-skin-disease-virus-is-spreading-in-east-asia-cows-from-lumpy.jpg?s=612x612&w=0&k=20&c=j1lqrIdNY3GhOfQMDf-vW6lI-RZRMyymNRjH5_PkDUw=",
    },
    {
      name: "Asiatic Redwater (Babesiosis)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqd-N9H_uuRg7IIg1f9bx4fQu7qOvifDmGnBi0-wMbUfx_8mobP10R7kSfNnHkWafn8kw&usqp=CAU",
    },
    {
      name: "New World Screwworm",
      image: "https://extension.psu.edu/media/wysiwyg//extensions/catalog_product/952dd57c20474218913b719f224ecd7d/s/c/screwworm-fly.jpg",
    },
    {
      name: "Johne’s & Bang’s Disease (Brucellosis)",
      image: "https://veteriankey.com/wp-content/uploads/2016/08/B978032307732300014X_f013-008-9780323077323.jpg",
    },
  ];

  const DiseasCard = ({ name, image }) => {
    const validImage = image?.trim() || null;
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow">
          <img
            src={
              validImage
                ? validImage
                : "https://via.placeholder.com/300x200.png?text=No+Image"
            }
            className="card-img-top"
            alt={name}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h2 className="text-center mb-3">All About Livestock Diseases</h2>
        <p className="text-center">
          This section provides a comprehensive overview of trending livestock
          diseases, including their causes, symptoms, and treatment options.
        </p>
        <div className="row">
          {disease.map((d, index) => (
            <DiseasCard key={index} {...d} />
          ))}
        </div>
      </div>
    </>
  );
}
