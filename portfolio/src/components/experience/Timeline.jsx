import timelineElements from "../../assets/timelineElements";
import schoolIcon from "../../assets/school.svg";
import workIcon from "../../assets/work.svg";

export default function Timeline({ defaultColor }) {
  return (
    <div className="relative">
      {timelineElements.map((element, index) => {
        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative">
            {index > 0 && (
              <div
                className={`${color} w-0.5 h-16 absolute left-1/2 transform -translate-x-1/2 top-0`}
              ></div>
            )}
            <div className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
            <div className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div>
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-yellow-500">{element.date}</div>
              <div className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-20`}
              />
              <div className={`${color} h-px w-8 translate-y-5 opacity-30`}></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
              <div className="text-xl font-bold text-yellow-500">{element.title}</div>
              <div className="text-yellow-500 mb-6 sm:mb-8 sm:text-lg pt-2">
                {element.location}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <ul className="mb-4 text-left">
                {element.description.map((point, idx) => (
                  <li key={idx} className="list-disc list-inside text-sm mb-2">{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}