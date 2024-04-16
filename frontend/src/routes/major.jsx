import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css"

const MajorList = () => {
  const [majors, setMajors] = useState([]);
  const [error, setError] = useState(null);
  const [hoverStates, setHoverStates] = useState({});

  useEffect(() => {
    fetchMajors();
  }, []);

  const fetchMajors = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/majors");
      setMajors(response.data.majors);
    } catch (error) {
      setError("Failed to fetch majors.");
      console.error('Error fetching majors:', error);
    }
  }

  const formatDescription = (description) => {
    const parts = description.split('*');
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && <br />}
      </span>
    ));
  };

  
  const toggleHover = (id, isHovering) => {
    setHoverStates(prev => ({ ...prev, [id]: isHovering }));
  };

  return (
    <>
      <div style={{minHeight: '100px', maxHeight: '200px'}}></div>
      <div className='font_div' style={{ display: 'flex', flexDirection: 'column' }}>
        {majors.map((major, index) => (
          <div key={major.id} style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', alignItems: 'center' }}>
            {index % 2 === 0 ? (
              <React.Fragment>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                  <h3>{major.major}</h3>
                  <p>{formatDescription(major.description)}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <div className='floating_div'>
                    <p id={hoverStates[major.id] ? "text_after" : "text_before"}>{major.initials}</p>
                    <button className="hover_button"
                            onMouseEnter={() => toggleHover(major.id, true)}
                            onMouseLeave={() => toggleHover(major.id, false)}>Customize your Major</button>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div style={{ flex: 1 }}>
                  <div className='floating_div'>
                    <p id={hoverStates[major.id] ? "text_after" : "text_before"}>{major.initials}</p>
                    <button className="hover_button"
                            onMouseEnter={() => toggleHover(major.id, true)}
                            onMouseLeave={() => toggleHover(major.id, false)}>Customize your Major</button>
                  </div>
                </div>
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                  <h3>{major.major}</h3>
                  <p>{formatDescription(major.description)}</p>
                </div>
              </React.Fragment>
            )}
          </div>
        ))}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default MajorList;