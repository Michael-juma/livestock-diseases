import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AllAbout() {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const diseases = [
    {
      name: "H5N1 Avian Influenza (Bird Flu)",
      image:
        "https://media.istockphoto.com/id/1440434242/video/sick-chickens-disease-outbreaks-symptoms-and-clinical-signs-with-high-mortality.jpg?s=640x640&k=20&c=2aP_DwbDfVdhOoSferoF3ccPltDwlQOvqU1trfoYwL8=",
      description:
        "Avian Influenza (H5N1 HPAI), also known as bird flu, is a highly infectious, systemic disease of poultry caused by an Orthomyxovirus of the genus Influenzavirus A. Most AI viruses cause asymptomatic infections or mild diseases in poultry.",
      region: "Asia, Europe, Africa",
      rate: "High",
      symptoms:
        "Coughing, sneezing, nasal discharge, sudden death Neurological signs commonly reported include head twitching, ataxia, tremors, torticollis, and opisthotonos [174,175]. The degree of neurovirulence of HPAI H5Nx viruses depends on the virus and the infected bird species.",
      treatment:
        "If identified early, you can treat bird flu with antiviral medications. A provider might prescribe: Oseltamivir (Tamiflu®) Peramivir (Rapivab®)",
      prevention:
        "Biosecurity, surveillance, culling Minimizing contact with secretions (mucus, saliva), blood, or feces from infected birds and mammals is key to preventing avian influenza A(H5N1) infections",
    },
    {
      name: "African Swine Fever (ASF)",
      image:
        "https://media.istockphoto.com/id/470953896/photo/sick-pig-in-farm.jpg?b=1&s=612x612&w=0&k=20&c=31bVyhuomtHmmrPnu5O_r8cAh9sxuW5-vDalj7xhEhQ=",
      description:
        "African Swine Fever (ASF) is a highly contagious viral disease of pigs. In its acute form the disease generally results in high mortality. ASF is a different disease to swine flu. The virus does not affect people and there is no impact on human health..",
      region: "Sub-Saharan Africa, Europe, Asia",
      rate: "Very High",
      symptoms:
        "In the acute form pigs develop a high temperature (40.5 degrees C or 105 degrees F), then become dull and go off their food. Other symptoms can vary but will include some or all of the following: vomiting. diarrhoea (sometimes bloody)",
      treatment: "No cure or vaccine available",
      prevention: "Quarantine, proper disposal, strict hygiene",
    },
    {
      name: "Foot-and-Mouth Disease (FMD)",
      image:
        "https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/FMD/FMD_006sm.jpg",
      description:
        "FMD is characterised by fever and blister-like sores on the tongue and lips, in the mouth, on the teats and between the hooves. The disease causes severe production losses, and, while the majority of affected animals recover, the disease often leaves them weakened and debilitated..",
      region: "Worldwide",
      rate: "high",
      symptoms:
        "Animals with FMD typically have a fever and blisters on the tongue and lips, in and around the mouth, on the mammary glands, and around the hooves. These blisters, called vesicles, pop and turn into red areas called erosions.",
      treatment:
        "There is no specific treatment for FMD. In endemic countries antibiotic therapy may be used to control secondary bacterial infection of ulcers but recovery takes several weeks to months. In the UK animalsthat are confirmed to have FMD will be compulsorily slaughtered (with government compensation).",
      prevention:
        " Provide fresh drinking water in tanks. Monitor animals closely and frequently for any developing illness or signs of disease. Isolate sick animals from the herd to minimize disease spread. - Isolation should be at a minimum 28-30 days (which equals two incubation periods for FMD).",
    },
    {
      name: "Lumpy Skin Disease (LSD)",
      image:
        "https://media.istockphoto.com/id/1427853618/photo/lumpy-skin-disease-in-india-cow-skin-disease-virus-is-spreading-in-east-asia-cows-from-lumpy.jpg?s=612x612&w=0&k=20&c=j1lqrIdNY3GhOfQMDf-vW6lI-RZRMyymNRjH5_PkDUw=",
      description:
        "Lumpy skin disease is a viral infection of cattle. Originally found in Africa, it has also spread to countries in the Middle East, Asia, and eastern Europe. Clinical signs include fever, lacrimation, hypersalivation, and characteristic skin eruptions. Diagnosis is by histopathology, virus isolation, or PCR. Attenuated vaccines may help control outbreaks.",
      region: "Middle East, Asia, and eastern Europe,Africa",
      rate: "High",
      symptoms:
        "The incubation period for lumpy skin disease is between 4 and 14 days post-infection. After an initial period of high fever (41°C) and swollen lymph glands, the animal may develop large, firm nodules that are up to 5 cm in diameter in the skin. These can be found all over the body, but particularly on the: head",
      treatment:
        "There is no specific treatment for LSD. Supportive care may be provided to affected animals.",
      prevention:
        "Control and prevention of lumpy skin disease relies on four tactics - movement control (quarantine), vaccination, slaughter campaigns and management strategies. Specific national control plans vary between countries and so advice should be sought from the relevant authorities and veterinarians.",
    },
    {
      name: "Asiatic Redwater (Babesiosis)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqd-N9H_uuRg7IIg1f9bx4fQu7qOvifDmGnBi0-wMbUfx_8mobP10R7kSfNnHkWafn8kw&usqp=CAU",
      description:
        "A parasitic infection caused by Babesia, affecting red blood cells of cattle. Symptoms include anemia, fever, and red urine.",
      region: "especially tropical and subtropical climates",
      rate: "high",
      symptoms:
        "African redwater disease symptoms become noticeable 7-14 days after infection and include fever, anaemia, light- to dark-brown or red urine, poor appetite, weakness, dry nose, diarrhoea, dull coat, listlessness, unwillingness to move, abortion and, in advanced cases, jaundice.",
      treatment:
        "When animals have Redwater, treat the animals with Dizene cattle using 7ml/100kg. If unsure if the animal could be infected with Anaplasmosis/ Gallsickness (clinical signs very similar), Terralon LA can be added to the treatment regime.",
      prevention:
        "But to prevent this disease from killing your herd, you have to vaccinate your calves between the ages of three and nine months. You can also make sure that your vaccinated cattle develop a long-lasting immunity against redwater, by letting them graze in pastures where ticks carrying the redwater parasite, are present.",
    },
    {
      name: "New World Screwworm",
      image:
        "https://extension.psu.edu/media/wysiwyg//extensions/catalog_product/952dd57c20474218913b719f224ecd7d/s/c/screwworm-fly.jpg",
      description:
        "A parasitic fly larvae infestation that feeds on living tissue. Can lead to severe wounds and infections in livestock.",
      region:
        "Cuba, Haiti, the Dominican Republic, and countries in South America",
      rate: "high",
      symptoms:
        "Unexplained skin lesions (wounds or sores) that do not heal,Skin wounds or sores that worsen over time,Painful skin wounds or sores,Bleeding from open sores,Feeling larvae movement within a skin wound or sore, nose, mouth, or eyes,Seeing maggots around or in open sores.",
      treatment:
        "Screwworm infestations can be treated in both endemic and non-endemic regions; euthanasia of the animal is not usually required. Although some wounds may be surgically excised, most are treated with a suitable larvicide and allowed to heal without closure.",
      prevention:
        "Strict control of the movement of animals out of affected areas",
    },
  ];

  const handleCardClick = (disease) => {
    setSelectedDisease(disease);
    setShowModal(true);
  };

  const DiseaseCard = ({ disease }) => (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow"
        onClick={() => handleCardClick(disease)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={
            disease.image ||
            "https://via.placeholder.com/300x200.png?text=No+Image"
          }
          className="card-img-top"
          alt={disease.name}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{disease.name}</h5>
        </div>
      </div>
    </div>
  );

  return (
    <>
      
      <div className="container my-4">
        <h2 className="text-center mb-3">All About Livestock Diseases</h2>
        <p className="text-center">
         These are the most Trending diseases Click on a disease to learn more about its effects, symptoms, and
          prevention.
        </p>
        <div className="row">
          {diseases.map((d, index) => (
            <DiseaseCard key={index} disease={d} />
          ))}
        </div>
      </div>

      {selectedDisease && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedDisease.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedDisease.image}
              className="img-fluid mb-3"
              alt={selectedDisease.name}
            />
            <p>
              <strong>Description:</strong> {selectedDisease.description}
            </p>
            <p>
              <strong>Region Affected:</strong> {selectedDisease.region}
            </p>
            <p>
              <strong>Rate of Affection:</strong> {selectedDisease.rate}
            </p>
            <p>
              <strong>Symptoms:</strong> {selectedDisease.symptoms}
            </p>
            <p>
              <strong>Treatment:</strong> {selectedDisease.treatment}
            </p>
            <p>
              <strong>Prevention:</strong> {selectedDisease.prevention}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
