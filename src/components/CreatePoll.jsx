import React, { useState } from 'react';
import './CreatePoll.css';

const CreatePoll = () => {
  const [options, setOptions] = useState(['']);
  const [pollTitle, setPollTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [touched, setTouched] = useState({});

  const handleOptionChange = (idx, value) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleDeleteOption = (idx) => {
    setOptions(options.filter((_, i) => i !== idx));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleOptionBlur = (idx) => {
    setTouched(prev => ({
      ...prev,
      [`option${idx}`]: true
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    // Mark all as touched to show errors
    setTouched({
      pollTitle: true,
      category: true,
      ...Object.fromEntries(options.map((_, idx) => [`option${idx}`, true]))
    });

    const hasEmptyOption = options.some(opt => !opt.trim());
    if (
      !pollTitle.trim() ||
      !category.trim() ||
      hasEmptyOption
    ) {
      setErrorMsg('Please complete all required fields and options.');
      return;
    }

    setSuccessMsg('You have successfully made a poll!');
    setPollTitle('');
    setCategory('');
    setDescription('');
    setOptions(['']);
    setEndDate('');
    setEndTime('');
    setTouched({});
  };

  return (
    <div className="createpoll-main">
      <div className="createpoll-left">
        <button
          type="button"
          className={`createpoll-btn${!showResult ? ' active' : ''}`}
          onClick={() => setShowResult(false)}
        >
          Create Poll
        </button>
        <button
          type="button"
          className={`createpoll-btn${showResult ? ' active' : ''}`}
          onClick={() => setShowResult(true)}
        >
          View Result
        </button>
      </div>
      <div className="createpoll-right">
        {!showResult ? (
          <form className="poll-form" onSubmit={handleSubmit}>
            {/* Poll Title Row */}
            <div className="poll-title-row">
              <label className="poll-label">Poll Title</label>
              <input
                type="text"
                className={`poll-title-input${touched.pollTitle && !pollTitle.trim() ? ' error-border' : ''}`}
                value={pollTitle}
                onChange={e => setPollTitle(e.target.value)}
                onBlur={() => handleBlur('pollTitle')}
                placeholder="Enter poll title"
              />
              <button type="button" className="upload-btn">Upload</button>
              <select
                className={`category-select${touched.category && !category.trim() ? ' error-border' : ''}`}
                value={category}
                onChange={e => setCategory(e.target.value)}
                onBlur={() => handleBlur('category')}
              >
                <option value="">Category</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="poll-desc-row">
              <label className="poll-label">Description <span className="optional">(optional)</span></label>
              <input
                type="text"
                className="poll-desc-input"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </div>
            <div className="poll-options-row">
              <label className="poll-label">Poll Options</label>
              <div className="poll-options-list">
                {options.map((opt, idx) => (
                  <div key={idx} className="poll-option-item">
                    <input
                      type="text"
                      className={`poll-option-input${touched[`option${idx}`] && !opt.trim() ? ' error-border' : ''}`}
                      value={opt}
                      onChange={e => handleOptionChange(idx, e.target.value)}
                      onBlur={() => handleOptionBlur(idx)}
                      placeholder={`Option ${idx + 1}`}
                    />
                    {options.length > 1 && (
                      <button
                        type="button"
                        className="delete-option-btn"
                        onClick={() => handleDeleteOption(idx)}
                      >
                        &#10005;
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" className="add-option-btn" onClick={handleAddOption}>
                  + Add Option
                </button>
              </div>
            </div>
            <div className="poll-end-row">
              <label className="poll-label">Poll End Date and Time</label>
              <div className="poll-end-inputs">
                <input
                  type="date"
                  className={`poll-end-date${touched.endDate && !endDate.trim() ? ' error-border' : ''}`}
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  onBlur={() => handleBlur('endDate')}
                />
                <input
                  type="time"
                  className={`poll-end-time${touched.endTime && !endTime.trim() ? ' error-border' : ''}`}
                  value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                  onBlur={() => handleBlur('endTime')}
                />
              </div>
              <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
                Leave blank for the poll with no time limit
              </div>
            </div>
            {errorMsg && (
              <div style={{ color: 'red', marginTop: 10, fontWeight: 600 }}>
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div style={{ color: 'green', marginTop: 10, fontWeight: 600 }}>
                {successMsg}
              </div>
            )}
            <button type="submit" className="createpoll-new-btn" style={{ marginTop: 24 }}>
              Create Poll
            </button>
          </form>
        ) : (
          <div>
            <h2 className="createpoll-title">Poll Results</h2>
            <p>No results to show yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePoll;