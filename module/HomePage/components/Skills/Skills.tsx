import { BiCode, BiLayout } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { LuServer } from "react-icons/lu";


export default function Skills() {
  const skillsData = {
    frontend: [
      {
        name: 'React',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Next.js',
        color: 'from-gray-800 to-gray-600'
      },
      {
        name: 'TypeScript',
        color: 'from-blue-600 to-blue-800'
      },
      {
        name: 'Tailwind CSS',
        color: 'from-teal-400 to-cyan-500'
      }
    ],
    backend: [
      {
        name: 'Node.js',
        color: 'from-green-600 to-green-700'
      },
      {
        name: 'Express',
        color: 'from-gray-700 to-gray-900'
      }
    ],
    database: [
      {
        name: 'MongoDB',
        color: 'from-green-500 to-green-700'
      }
    ]
  };

  const categories = [
    {
      title: 'Frontend',
      icon: BiLayout,
      skills: skillsData.frontend,
      iconColor: 'text-blue-500'
    },
    {
      title: 'Backend',
      icon: LuServer,
      skills: skillsData.backend,
      iconColor: 'text-green-500'
    },
    {
      title: 'Base de Datos',
      icon: BsDatabase,
      skills: skillsData.database,
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BiCode className="w-10 h-10 text-secondary" />
            <h2 className="text-3xl font-bold text-primary">Skills</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to create modern and scalable web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-6 bg-re4">
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-linear-to-r from-primary to-transparent ml-4"></div>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    {/* Gradient Background Effect */}
                    <div className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${skill.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}