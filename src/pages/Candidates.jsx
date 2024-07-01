// import React from "react";

import PropTypes from 'prop-types';

const candidates = [
  {
    name: 'Bola Tinubu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bola_Tinubu_portrait.jpg/819px-Bola_Tinubu_portrait.jpg', // Replace with actual image URL
    dateOfBirth: 'March 29, 1952 (Age 72)',
    politicalParty: 'All Progressives Congress (APC)',
    notableAchievements: [
      'Governor of Lagos State from 1999 to 2007',
      'Key role in the formation of APC, the ruling party in Nigeria',
      'Prominent Nigerian political leader and kingmaker',
      'Elected President of Nigeria in 2023 after a highly contested election'
    ],
    description: 'Bola Ahmed Tinubu is a Nigerian politician and the current President of Nigeria. He was the former governor of Lagos State, serving from 1999 to 2007. Tinubu is a national leader of the ruling All Progressives Congress (APC) party and played a key role in its formation. He is widely regarded as a political godfather and kingmaker in Nigerian politics.',
    vision: 'President Tinubu vision for Nigeria is to foster economic prosperity drive infrastructural development and ensure security and social justice for all Nigerians.',
    mission: 'President Tinubu mission is to implement policies and programs that will create jobs improve the standard of living, and build a more secure just and equitable society in Nigeria.',
  },
  {
    name: 'Peter Obi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnauMosQth2FKwBWmz4HANbx2ji3SE8KdsfQ&s',
    dateOfBirth: 'July 19, 1961 (Age 62)',
    politicalParty: 'Labour Party (LP)',
    notableAchievements: [
    'Governor of Anambra State from 2006 to 2014',
    'Recognized for prudent economic management and fiscal responsibility',
    'Known for his anti-corruption stance and efforts to curb waste in government',
    'Served as the Vice-Presidential candidate of the Peoples Democratic Party (PDP) in the 2019 general election',
    'Contested the 2023 presidential election on the Labour Party platform, coming second in a closely contested race'
    ],
    description: 'Peter Obi is a Nigerian politician and businessman who served as the governor of Anambra State from 2006 to 2014. He is known for his prudent economic management, fiscal responsibility, and anti-corruption stance. Obi contested the 2023 presidential election on the Labour Party platform, coming in second in a closely contested race.',
    vision: 'To build a transparent, accountable, and efficient government that prioritizes the well-being of all Nigerians.',
    mission: 'To enhance the standard of living through sustainable economic policies, investment in human capital, and the fight against corruption.'
    },
    {
      name: 'Goodluck Jonathan',
      image: 'https://www.bellanaija.com/wp-content/uploads/2013/08/President-Goodlucj-Ebele-Jonathan-August-2013-BellaNaija.jpg',
      dateOfBirth: 'November 20, 1957 (Age 65)',
      politicalParty: 'Peoples Democratic Party (PDP)',
      notableAchievements: [
      'Vice President of Nigeria (2007-2010)',
      'President of Nigeria (2010-2015)',
      'First president in Nigerias history to concede defeat in an election',
      'Implemented economic reforms and anti-corruption measures during his presidency',
      'Strengthened Nigerias democracy and improved relations with neighboring countries',
      'Established the Almajiri education system to address the issue of out-of-school children'
      ],
      description: 'Goodluck Ebele Azikiwe Jonathan is a Nigerian politician who served as the President of Nigeria from 2010 to 2015. He was the first president in Nigerias history to concede defeat in an election, setting a precedent for peaceful democratic transitions. During his presidency, Jonathan implemented various economic reforms and anti-corruption measures, aiming to improve the countrys economy and governance. He also strengthened Nigerias democracy and improved relations with neighboring countries.',
      vision: 'Jonathans vision for Nigeria was to foster economic growth, reduce poverty, and strengthen the countrys democratic institutions.',
      mission: 'His mission was to implement policies and programs that would improve the standard of living for all Nigerians, combat corruption, and promote national unity and stability.'
      }
];

const CandidateCard = ({ candidate }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card h-100">
      <img
        src={candidate.image}
        className="card-img-top"
        alt={`${candidate.name}'s image`}
        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{candidate.name}</h5>
        <p className="text-primary"><strong>Date of Birth:</strong> {candidate.dateOfBirth}</p>
        <p className="card-text"><strong>Political Party:</strong> {candidate.politicalParty}</p>
        <div className="border fw-bold rounded-1 get-height text-dark mt-2 text-center">
        <strong>Notable Achievements:</strong>
                        </div>
        <ul>
          {candidate.notableAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="border fw-bold rounded-1 get-height text-dark mt-2 text-center">
        <strong>Description:</strong>
                        </div>
        <p className="card-text">{candidate.description}</p>
        <div className="border fw-bold rounded-1 get-height text-dark mt-2 text-center">
        <strong>Vision:</strong>
                        </div>
        <p className="card-text"> {candidate.vision}</p>
        <div className="border fw-bold rounded-1 get-height text-dark mt-2 text-center">
        <strong>Mission:</strong>
                        </div>
        <p className="card-text"> {candidate.mission}</p>
      </div>
    </div>
  </div>
);

CandidateCard.propTypes = {
  candidate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    politicalParty: PropTypes.string.isRequired,
    notableAchievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    vision: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
  }).isRequired,
};

const Candidates = () => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Candidates</h1>
      <div className="row">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.name} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
