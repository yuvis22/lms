import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

const SuggestionBox = ({ bookId }) => {
    const [suggestionText, setSuggestionText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`/api/books/${bookId}/suggestions`, { suggestionText });
            alert('Thank you for your suggestion!');
            setSuggestionText('');
        } catch (error) {
            console.error('Error submitting suggestion:', error);
            alert('An error occurred while submitting your suggestion. Please try again later.');
        }
    };

    return (
        <div>
            <h3>Submit a Suggestion</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={suggestionText}
                    onChange={(e) => setSuggestionText(e.target.value)}
                    required
                ></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SuggestionBox;
