
export default function DiseaseCollection(diseases) {
 
    return (
      <div className="p-6 bg-info-100 min-h-screen">
        <h2 className="text-xl font-semibold text-center mb-2">Disease List</h2>
        <div className="w-full h-full bg bg-info flex items-center justify-center rounded">
          <table className="table table-bordered border-danger table-striped table-hover">
            <thead>
              <tr>
                <th className="p-4">Region</th>
                <th className="p-4">Disease</th>
                <th className="p-4">Cases</th>
                <th className="p-4">Syptomps</th>
                <th className="p-4">Treatement</th>
                <th className="p-4">Prevantion </th>
                <th className="p-4">Animal picture</th>
              </tr>
              <tr>
                <td className="p-4">North</td>
                <td className="p-4">FMD</td>
                <td className="p-4">100</td>
                <td className="p-4">High fever (lasts 2–3 days)

Excessive salivation ("drooling")

Blisters (vesicles) on:

Mouth and tongue (causes drooling, difficulty eating)

Hooves (leads to limping or lameness)

Teats (can reduce milk production)

Depression, weight loss

Decrease in milk yield

Painful movement or reluctance to move

</td>
                <td className="p-4">Vaccination</td>
                <td className="p-4">Quarantine</td>
                <td className="p-4">
                <img
                    src="https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/FMD/FMD_003.jpg"
                    className="img-fluid w-25 h-25 rounded"
                    alt="Animal"
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              { Array.isArray(diseases) && 
              diseases.map((disease) => (
                <tr key={disease.id}>
                  <td className="p-4">{disease.region}</td>
                  <td className="p-4">{disease.diseaseName}</td>
                  <td className="p-4">{disease.cases}</td>
                  <td className="p-4">{disease.symptoms}</td>
                  <td className="p-4">{disease.treatment}</td>
                  <td className="p-4">{disease.prevention}</td>
                  <td className="p-4">
                    <img
                      src={disease.image}
                      className="img-fluid w-25 h-25 rounded"
                      alt="Animal"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  