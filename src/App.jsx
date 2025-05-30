import React, { useState } from 'react';

const sampleMatches = [
  {
    name: 'Arefin',
    role: 'Full Stack Developer',
    skills: ['React', 'Firebase'],
    interests: ['AI', 'Startups'],
    location: 'Dhaka',
  },
  {
    name: 'Mahi',
    role: 'UX/UI Designer',
    skills: ['Figma', 'Design Thinking'],
    interests: ['Hackathons', 'Design'],
    location: 'Chittagong',
  },
  {
    name: 'Rafiq',
    role: 'Founder',
    skills: ['Business Strategy', 'Pitching'],
    interests: ['Startup Funding'],
    location: 'Sylhet',
  },
];

const questions = [
  'What’s your full name?',
  'What’s your role? (Founder, Developer, Designer, etc.)',
  'What are your key skills?',
  'What are your interests?',
  'What are you working on or want to build?',
  'What kind of partner are you looking for?',
  'Do you prefer short-term or long-term collaboration?',
  'Your preferred region or university?',
  'Any profile links (LinkedIn, GitHub, Dribbble)?',
  'Would you like to answer some personality-based questions?'
];

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    const value = e.target.elements.answer.value;
    if (value) {
      setAnswers([...answers, value]);
      setStep(step + 1);
    }
    e.target.reset();
  };

  const finishChat = () => setShowProfile(true);

  return (
    <div className="bg-black min-h-screen text-white font-sans p-6">
      <header className="text-3xl font-bold text-center mb-6">
        Find Your Perfect Partner
      </header>

      {!showProfile ? (
        <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
          {step < questions.length ? (
            <form onSubmit={handleNext}>
              <p className="mb-4">{questions[step]}</p>
              <input
                name="answer"
                type="text"
                required
                className="w-full p-2 rounded text-black"
              />
              <button
                type="submit"
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Next
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4">Thanks! Here's your profile preview.</p>
              <button
                onClick={finishChat}
                className="bg-red-600 hover:bg-red-700 py-2 px-6 rounded"
              >
                Show My Matches
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl mb-4">Your Matches</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {sampleMatches.map((match, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-xl p-4 shadow hover:scale-105 transition"
              >
                <h3 className="font-bold text-lg">{match.name}</h3>
                <p className="text-sm">{match.role}</p>
                <p className="text-xs mt-2">Skills: {match.skills.join(', ')}</p>
                <p className="text-xs">Interests: {match.interests.join(', ')}</p>
                <p className="text-xs">Location: {match.location}</p>
                <button className="mt-3 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

