// src/components/ui/Card.jsx
export default function Card({ icon, title, subtitle, description }) {
    return (
      <div className="bg-blue-400 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col gap-4">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p className="text-base text-gray-700">{description}</p>
        <div className="flex items-center gap-2 text-white font-medium mt-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A2 2 0 0120 14.118V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-1.882a2 2 0 01.447-1.342L9 10m6 0V6a3 3 0 00-6 0v4m6 0H9" />
          </svg>
          <span>Video coming soon</span>
        </div>
      </div>
    );
  }
  