import ChartPanel from "../Components/ChartPanel";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3x1 front bold mb-6 text-center">
        LIVESTOCKE DISEASE RESEARCH
      </h1>
      
      <div>
       
        <ChartPanel />
        
      </div>
    </div>
  );
}
