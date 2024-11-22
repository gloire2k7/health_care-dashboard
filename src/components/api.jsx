import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://fedskillstest.coalitiontechnologies.workers.dev',
          {
            auth: {
              username: 'coalition',
              password: 'skills-test',
            },
          }
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.profile_picture}</div> // Adjust `item.name` based on the actual response structure
      ))}
    </div>
  );
};

export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://fedskillstest.coalitiontechnologies.workers.dev',
//           {
//             auth: {
//               username: 'coalition',
//               password: 'skills-test',
//             },
//           }
//         );
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) return <div>Error: {error}</div>;
//   if (!data.length) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       {data.map((item, index) => (
//         <div key={index} className="data-item" style={{ marginBottom: '20px' }}>
//           {Object.entries(item).map(([key, value]) => (
//             <div key={key}>
//               <strong>{key}:</strong> {JSON.stringify(value, null, 2)}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
