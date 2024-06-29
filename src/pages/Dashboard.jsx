import React from "react";

const candidates = [
  {
    name: 'Bola Tinubu',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    dateOfBirth: 'March 29, 1952',
    politicalParty: 'All Progressives Congress (APC)',
    notableAchievements: [
      'Governor of Lagos State from 1999 to 2007',
      'Key role in the formation of APC',
      'Prominent Nigerian political leader'
    ],
    description: 'Bola Tinubu is a Nigerian politician and a national leader of the All Progressives Congress. He was the governor of Lagos State from 1999 to 2007.'
  },
  {
    name: 'Peter Obi',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    dateOfBirth: 'July 19, 1961',
    politicalParty: 'Labour Party (LP)',
    notableAchievements: [
      'Governor of Anambra State from 2006 to 2014',
      'Recognized for prudent economic management',
      'Known for anti-corruption stance'
    ],
    description: 'Peter Obi is a Nigerian politician and businessman who served as the governor of Anambra State. He is known for his prudent economic management and anti-corruption stance.'
  }
];

const CandidateCard = ({ candidate }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card">
      <img
        src={candidate.image}
        className="card-img-top"
        alt={`${candidate.name}'s image`}
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="card-body">
        <h5 className="card-title">{candidate.name}</h5>
        <p className="card-text"><strong>Date of Birth:</strong> {candidate.dateOfBirth}</p>
        <p className="card-text"><strong>Political Party:</strong> {candidate.politicalParty}</p>
        <p className="card-text"><strong>Notable Achievements:</strong></p>
        <ul>
          {candidate.notableAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <p className="card-text">{candidate.description}</p>
      </div>
    </div>
  </div>
);

const Candidates = () => {
  return (
    <div className="container">
      <h1 className="my-4">Candidates</h1>
      <div className="row">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.name} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
