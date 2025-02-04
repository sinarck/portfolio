import Navigation from "@/components/navigation";

const Projects = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <Navigation />
        <ul className="space-y-4">
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Personal Blog</h2>
            <p className="text-neutral-400 mt-2">
              A platform to share my journey in tech
            </p>
          </li>
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Weather App</h2>
            <p className="text-neutral-400 mt-2">
              Real-time forecasts using modern APIs
            </p>
          </li>
          <li className="bg-neutral-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Machine Learning Model</h2>
            <p className="text-neutral-400 mt-2">
              Predictive analysis for stock market trends
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

